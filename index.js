const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const generateMarkdown = require("./generateMarkdown.js");

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your username?",
            name: "username"
        },
        {
            type: "input",
            message: "Please enter your access token",
            name: "accessToken"
        },
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title"
        },
        {
            type: "input",
            message: "What year did you finish your project?",
            name: "year"
        },
        {
            type: "input",
            message: "Please describe your project",
            name: "description"
        },
        {
            type: "input",
            message: "Please describe how to install your project",
            name: "installation"
        },
        {
            type: "input",
            message: "Please describe the testing performed on your project",
            name: "tests"
        }
    ])
    .then(function (response) {

        const queryUrl = `https://api.github.com/users/${response.username}?access_token=${response.accessToken}`;
        axios.get(queryUrl).then((profile) => {

            console.log(profile.data);

            fs.writeFile("README.md", generateMarkdown(response, profile), function(err) {
                if (err) {
                    return console.log(err)
                }
                console.log(`Generated "${response.title}" README for ${response.username}`)
            });
        });
    });
    



