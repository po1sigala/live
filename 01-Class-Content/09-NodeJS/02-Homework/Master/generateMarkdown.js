const colors = {
  green: {
    wrapperBackground: "#E6E1C3",
    headerBackground: "#C1C72C",
    headerColor: "black",
    photoBorderColor: "#black"
  },
  blue: {
    wrapperBackground: "#5F64D3",
    headerBackground: "#26175A",
    headerColor: "white",
    photoBorderColor: "#73448C"
  },
  pink: {
    wrapperBackground: "#879CDF",
    headerBackground: "#FF8374",
    headerColor: "white",
    photoBorderColor: "#FEE24C"
  },
  red: {
    wrapperBackground: "#DE9967",
    headerBackground: "#870603",
    headerColor: "white",
    photoBorderColor: "white"
  }
};

const licenses = {
  mit: {
    name: "MIT"
  },
  apache: {
    name: "APACHE"
  },
  gnu: {
    name: "GNU"
  }
}

function generateMarkdown(data) {
  return `
  #${data.title}
  [![GitHub license](https://img.shields.io/badge/license-${data.license.name}-blue.svg)](https://github.com/${data.username}/LICENSE)
  
  ## Description
  ${data.description}

  ## Table of Contents 
  
  * [Installation](#installation)

  * [Usage](#usage)

  * [Credits](#credits)

  * [License](#license)

  ## Installation

  To install necessary dependencies, run the following command:
  
  \`${data.installation}\`
  
  ## Usage
  
  ${data.usage}
  
  ## Credits
  
  ${data.credits}
  
  ## License

  ${data.license}
    
  ## Badges
  
  Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by shields.io. You may not understand what they all represent now, but you will in time.
  
  ## Contributing
  If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The Contributor Covenant is an industry standard, but you can always write your own.
  
  ## Tests

  To run tests, run the following command:

  \`${data.test}\`
  Go the extra mile and write tests for your application. Then provide examples on how to run them.
  
  
`;
}

module.exports = generateMarkdown;
