const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const generateMarkdown = require("./utils/generateMarkdown.js");

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your username?",
            name: "username"
        },
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title",
        },
        {
            type: "input",
            message: "Please describe your project",
            name: "description",
        },
        {
            type: "input",
            message: "Please describe how to install your project",
            name: "installation"
        }
    ])
    .then(function (response) {

        const accessToken = "940ff9b6f0d7894c3ec5225d50cbed4505a1d0db";
        const queryUrl = `https://api.github.com/users/${response.username}?acceses_token=${accessToken}`;
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
    



