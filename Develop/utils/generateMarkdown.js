// function to create badges with clickable link
function renderLicense(license) { 
  let license = `${data.license}`;
  // If there is no license, return an empty string
  let licenseLink = ''
  if (license === 'GNU AGPLv3') {
    license = 'GNUAGPLv3';
    licenseLink = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
  };
  if (license === 'GNU GPLv3') {
    license = 'GNUGPLv3';
    licenseLink = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"';
  };
  if (license === 'GNU LGPLv3') {
    license = 'GNULGPLv3';
    licenseLink = '![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
  };
  if (license === 'Mozilla') {
    license = 'MozillaPublicLicense2.0';
    licenseLink = '![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  };
  if (license === 'MIT') {
    license = 'MITLicense';
    licenseLink = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  };
  if (license === 'Apache') {
    license = 'ApacheLicense2.0';
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
  return `# ${data.title}

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Credits](#credits)
  * [License](#license)
  * [Contact](#contact)
  
  ## Installation
  ${installation}
  
  ## Usage
  ${usage}
  
  ## Contribution
  ${contribution}
  
  ## Credits
  ${credits}
  
  ## License
  ${license}
  
  ## Contact
  * GitHub: ${username}
  * Email: ${email}
  
`;
}

module.exports = renderLicense;
module.exports = generateMarkdown;
