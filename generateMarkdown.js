function generateMarkdown(response, profile) {

return `# ${response.title} by ${profile.data.name} (${profile.data.email})
  
## Description: ${response.description}

---

## Table of Contents:
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Resources](#resources)
* [Tests](#tests)
* [Questions](#questions)

---

### Istallation: ${response.installation}
---

### Questions:

If you have any questions, please contact ${profile.data.name} at ${profile.data.email};

![${response.username}](${profile.data.avatar_url});

`

}





/*
### Usage: ${reponse.usage}
---
### License: ${response.license}
---
### Contributing: ${response.contributing}
---
### Resources: ${response.resources}
---
### Tests: ${response.tests}
---
### Questions: ${response.questions}
*/

module.exports = generateMarkdown;
