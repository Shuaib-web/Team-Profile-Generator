let teamArray = [];

const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHtml = require("./src/generateHtml");

// askQuestions() just prompts to user with inquirerQuestions, using questions array

async function menu() {
  let answers = await inquirer.prompt([
    {
      type: "list",
      name: "choices",
      message: "What would you like to do next?",
      choices: ["Add engineer", "Add Intern", "Done"],
    },
  ]);
  if (answers.choices === "Add engineer") {
    askEngineerQuestions();
  }
  if (answers.choices === "Add Intern") {
    askInternQuestions();
  }
  if(answers.choices === "Done") {
    writeFile(generateHtml(teamArray))
  }
}

const askManagerQuestions = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Name?",
      },
      {
        type: "input",
        name: "id",
        message: "ID?",
      },
      {
        type: "input",
        name: "email",
        message: "Email?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Office Number?",
      },
    ])
    .then((managerData) => {
      const { name, id, email, officeNumber } = managerData;
      const manager = new Manager(name, id, email, officeNumber);
      teamArray.push(manager);
      menu();
    });
};

const askEngineerQuestions = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Name?",
      },
      {
        type: "input",
        name: "email",
        message: "Email?",
      },
      {
        type: "input",
        name: "id",
        message: "ID?",
      },
      {
        type: "input",
        name: "github",
        message: "GitHub?",
      },
    ])
    .then((engineerData) => {
      const { name, id, email, github } = engineerData;
      const engineer = new Engineer(name, id, email, github);
      teamArray.push(engineer);
      menu()
    });
}

const askInternQuestions = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Name?",
      },
      {
        type: "input",
        name: "email",
        message: "Email?",
      },
      {
        type: "input",
        name: "id",
        message: "ID?",
      },
      {
        type: "input",
        name: "school",
        message: "School?",
      },
    ])
    .then((internData) => {
      const { name, id, email, school } = internData;
      const intern = new Intern(name, id, email, school);
      teamArray.push(intern);
      menu()
    });
}

const writeFile = (data) => {
  fs.writeFile("./dist/index.html", data, (err) => {
    err ? console.log(err) : console.log("HTML created!");
  });
};

askManagerQuestions()