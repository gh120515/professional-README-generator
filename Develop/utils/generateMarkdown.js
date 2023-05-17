// function to create badges with clickable link
function renderLicense(license) { 
  let licenseChoice = `${license.license}`;
  // If there is no license, return an empty string
  let licenseLink = ''
  if (licenseChoice === 'GNU AGPLv3') {
    licenseChoice = 'GNUAGPLv3';
    licenseLink = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
  };
  if (licenseChoice === 'GNU GPLv3') {
    licenseChoice = 'GNUGPLv3';
    licenseLink = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"';
  };
  if (licenseChoice === 'GNU LGPLv3') {
    licenseChoice = 'GNULGPLv3';
    licenseLink = '![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
  };
  if (licenseChoice === 'Mozilla') {
    licenseChoice = 'MozillaPublicLicense2.0';
    licenseLink = '![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  };
  if (licenseChoice === 'MIT') {
    licenseChoice = 'MITLicense';
    licenseLink = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  };
  if (licenseChoice === 'Apache') {
    licenseChoice = 'ApacheLicense2.0';
    licenseLink = '[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let template = 
  `# ${data.title}

  ## Description
  ${data.description}

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Credits](#credits)
  * [License](#license)
  * [Contact](#contact)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contribution
  ${data.contribution}
  
  ## Credits
  ${data.credits}
  
  ## License
  ${data.license}
  
  ## Contact
  * GitHub: ${data.username}
  * Email: ${data.email}
  
`;
  return template;
}

module.exports = {
  renderLicense: renderLicense,
  generateMarkdown: generateMarkdown,
};
