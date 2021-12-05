
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![License](https://img.shields.io/badge/License-${data.license}--blue)

  ##Table of Contents
  *[Description](#description)
  *[Usage](#usage)
  *[Installation](#installation)
  *[Testing](#testing)
  *[License](#license)
  *[Contributing to This Repo](#contributefaq)
  *[Questions / Contact for Details](#questions)

  <a name='description'></a>
  ## Description
  ${data.description}

  <a name='usefaq'></a>
  ## Usage
  ${data.usefaq}

  <a name='install'></a>
  ## Installation
  ${data.install}

  <a name='test'></a>
  ## Testing
  ${data.test}

  <a name='license'></a>
  ## License
  The application will be covered under a ${data.license} license.

  <a name='contributefaq'></a>
  ## Contributing to this Repo
  ${data.contributefaq}

  <a name='questions'></a>
  ## Questions / Contact for Details
  This application can be found on my Github page: [${data.github}](https://github.com/${data.github}).

  If you have any questions contact me using either my Github, or by my email at [${data.email}](${data.email}).
  
`;
}


module.exports = generateMarkdown;
