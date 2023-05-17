// function to set up markdown (README) file
function generateMarkdown(data) {
  // first part sets up license badges (with clickable links)
  let licenseChoice = `${data.license}`;
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
    licenseLink = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
  };
  if (licenseChoice === 'Mozilla') {
    licenseChoice = 'MozillaPublicLicense2.0';
    licenseLink = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  };
  if (licenseChoice === 'MIT') {
    licenseChoice = 'MITLicense';
    licenseLink = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  };
  if (licenseChoice === 'Apache') {
    licenseChoice = 'ApacheLicense2.0';
    licenseLink = '[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  };

  // second part to set up markdown template

  let template = 
  `# ${data.title}

  ## Description
  ${data.description}

  ${licenseLink}

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contribution
  ${data.contribution}

  ## Tests
  ${data.tests}
  
  ## License
  Licensed under ${data.license}
  
  ## Questions
  Please contact from the below options for any additional questions.
  * GitHub: [${data.username}](https://github.com/${data.username})
  * Email: ${data.email}
  
`;
  return template;
};

module.exports = {
  generateMarkdown: generateMarkdown,
};
