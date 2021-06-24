// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return `\n[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](${renderLicenseLink(license)})`;
      break;
    case "Apache 2.0":
      return `\n[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](${renderLicenseLink(license)})`;
      break;
    case "GPL v3":
      return `\n[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](${renderLicenseLink(license)})`;
      break;
    case "ISC":
      return `\n[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](${renderLicenseLink(license)})`;
      break;
    case "MPL 2.0":
      return `\n[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](${renderLicenseLink(license)})`;
      break;
    default:
      return `placeholder`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return `https://opensource.org/licenses/MIT`;
      break;
    case "Apache 2.0":
      return `https://opensource.org/licenses/Apache-2.0`;
      break;
    case "GPL v3":
      return `https://www.gnu.org/licenses/gpl-3.0`;
      break;
    case "ISC":
      return `https://opensource.org/licenses/ISC`;
      break;
    case "MPL 2.0":
      return `https://opensource.org/licenses/MPL-2.0`;
      break;
    default:
      return `placeholder`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return ` This project falls under the ${license} license.
  ${renderLicenseLink(license)}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents (Optional)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Features](#features)
- [Contribute](#contribute)
- [Tests](#tests)
- [Credits](#credits)
- [Questions](#questions)
## Installation
${data.install_inst}
## Usage
${data.usage_info}
## License
${renderLicenseSection(data.license)}
## Features
${data.features}
## Contribute
${data.contribution}
## Tests
${data.test_inst}
## Credits
https://github.com/${data.git_prof}
## Questions
Please send any questions to this email.
${data.email}
`;
}

module.exports = {generateMarkdown};
