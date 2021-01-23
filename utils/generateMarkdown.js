// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

`;

${data.usage}

${data.description}

${renderLicenseLink(data.license)}
}

module.exports = generateMarkdown;
