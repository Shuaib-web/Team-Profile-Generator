const teamArray = [];

const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { timingSafeEqual } = require("crypto");
const generateHtml = require("./src/generateHtml");

const managerQuestions = ["name", "id", "email", "officeNumber"];

const inquirerManagerQuestions = managerQuestions.map((it) => {
  return {
    type: "input",
    name: it,
    message: it,
  };
});

const engineerQuestions = ["name", "id", "email", "github"];

const inquirerEngineerQuestions = engineerQuestions.map((it) => {
  return {
    type: "input",
    name: it,
    message: it,
  };
});

const internQuestions = ["name", "id", "email", "school"];

const inquirerInternQuestions = internQuestions.map((it) => {
  return {
    type: "input",
    name: it,
    message: it,
  };
});

// askQuestions() just prompts to user with inquirerQuestions, using questions array

const question = [
  {
    type: "list",
    name: "choices",
    message: "What would you like to do next?",
    choices: ["Add engineer", "Add Intern"],
  },
];
async function menu() {
  let answers = await inquirer.prompt(question);
  if (answers.choices === "Add engineer") {
    askEngineerQuestions();
  }

  if (answers.choices === "Add Intern") {
    askInternQuestions();
  }

}

async function askManagerQuestions() {
  await inquirer.prompt(inquirerManagerQuestions)
  .then(managerData => {
    const { name, id, email, officeNumber } = managerData;
    const manager = new Manager(name, id, email, officeNumber)
    teamArray.push(manager);
    menu()
  })
}

async function askEngineerQuestions() {
  await inquirer.prompt(inquirerEngineerQuestions)
  .then(engineerData => {
    const { name, id, email, github } = engineerData
    const engineer = new Engineer(name, id, email, github)
    teamArray.push(engineer)
  console.log(teamArray)
})

}

async function askInternQuestions() {
  await inquirer.prompt(inquirerInternQuestions)
  .then(internData => {
    const { name, id, email, school } = internData;
    const intern = new Intern(name, id, email, school)
    teamArray.push(intern);
    console.log(teamArray)
  })
}

const writeFile = data => {
  fs.writeFile("./dist/index.html", data, err => {
    console.log(data)
    err ? console.log(err) : console.log("HTML created!")
  })
}


askManagerQuestions()
 .then(teamArray => {
   return generateHtml(teamArray)
 })
 .then(data => {
   return writeFile(data)
 })
 .catch(err => {
   console.log(err)
 }) 
