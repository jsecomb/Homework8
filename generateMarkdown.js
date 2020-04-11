function generateMarkdown(response, profile) {

return `# ${response.title} by ${profile.data.name} 

[![HitCount](http://hits.dwyl.com/{${response.username}}/{${response.title}}.svg)](http://hits.dwyl.com/{${response.username}}/{${response.title}})
![GitHub top language](https://img.shields.io/github/languages/top/${response.username}/${response.title}?style=flat-square)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/${response.username}/${response.title}?style=flat-square)

## Description: 

${response.description}

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

## Istallation: 

${response.installation}

---

## Usage: 

Boilerplate Usage text here

---

## License: 

Boilerplate License text here

Copyright © ${response.year} ${profile.data.name}

---

## Contributing:

Boilerplate Contributing text here

---

## Resources:

Boilerplate Resources text here

---

## Tests:

${response.tests}

---

## Questions:

If you have any questions, please contact ${profile.data.name} at ${profile.data.email};

<img src="${profile.data.avatar_url}" alt="${response.username}"/>`
}

module.exports = generateMarkdown;
