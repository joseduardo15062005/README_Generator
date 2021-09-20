// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

//TODO: Render section
function renderSection(sectionTitle, data) {
  return `
## ${sectionTitle}\n
${data}
  `;
}

//renden the table of Content
function renderTableOfContent(data) {
  let temp = "## Table of Contents\n";
  if (data.installation) temp += `* [Installation](#installation)\n`;
  if (data.usage) temp += `* [Usage](#usage)\n`;
  if (data.contributing) temp += `* [Credits](#credits)\n`;
  if (data.tests) temp += `* [Tests](#tests)\n`;
  if (data.questions) temp += `* [Questions](#questions)\n`;
  if (data.license) temp += `* [License](#license)\n`;

  return temp;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description\n
${data.description}\n
${renderTableOfContent(data)}
${
  data.installation ? `${renderSection("Installation", data.installation)}` : ""
}\n
${data.usage ? `${renderSection("Usage", data.usage)}` : ""}\n
${
  data.contributing ? `${renderSection("Contributing", data.contributing)}` : ""
}\n
${data.tests ? `${renderSection("Tests", data.tests)}` : ""}\n
${data.questions ? `${renderSection("Questions", data.questions)}` : ""}\n
`;
}

module.exports = generateMarkdown;
