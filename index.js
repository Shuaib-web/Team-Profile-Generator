const teamArray = [

];

const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
    'Name',
    'ID',
    'Email',
    'OfficeNumber'
];

const inquirerQuestions = questions.map((it) => {
    return {
      type: "input",
      name: it,
      message: it,
    };
  });
  
  // askQuestions() just prompts to user with inquirerQuestions, using questions array
  async function askManagerQuestions() {
    let answers = await inquirer.prompt(inquirerQuestions);
    teamArray.push(answers);
    menu()
   
  }

const question = [
    {
        type: "list",
        name:"choices",
        message: "What would you like to do next?",
        choices: ["Add engineer", "Add Intern", "Build the team"]
    }
]
  async function menu (){
    let answers = await inquirer.prompt(question);
    if (answers.choices === "Add engineer"){
        askEngineerQuestions();
    }


  }


  async function askEngineerQuestions() {
    let answers = await inquirer.prompt(inquirerQuestions);
    teamArray.push(answers);
    console.log(teamArray);
  }

  askManagerQuestions();

 