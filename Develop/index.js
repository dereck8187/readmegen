// array of questions for user
const questions = [
    {
      type: "input",
      name: "github", 
      message: "What is your GitHub username?"
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?"
    },
    {
      type: "input",
      name: "title",
      message: "What is the title of project?"
    },
    {
      type: "input",
      name: "description",
      message: "write project description"
    },
   
    {
      type: "input",
      name: "installation",
      message: "What command should be run to install?",
      default: "npm i"
    },
    {
      type: "input",
      name: "test",
      message: "What command should be run to run tests?",
      default: "npm test"
    },
    
  ];
  

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponses) => {
      console.log("Generating README...");
      writeToFile("README.md", generateMarkdown({...inquirerResponses}));
    })

}

// function call to initialize program
init();
}
