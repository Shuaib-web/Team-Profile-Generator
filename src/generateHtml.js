const managerCard = function (manager) {
  return `<div class="card">
    <h1>Manager</h1>
    <h3>Name: ${manager.name}</h3>
    <h3>Email: ${manager.email}</h3>
    <h3>Office Number: ${manager.officeNumber}</h3>
    </div>`;
};

const internCard = function (intern) {
  return `<div class="card">
    <h1>Intern</h1>
    <h3>Name: ${intern.name}</h3>
    <h3>Email: ${intern.email}</h3>
    <h3>Office Number: ${intern.school}</h3>
    </div>`;
};

const engineerCard = function (engineer) {
  return `<div class="card">
    <h1>Engineer</h1>
    <h3>Name: ${engineer.name}</h3>
    <h3>Email: ${engineer.email}</h3>
    <h3>Office Number: ${engineer.github}</h3>
    </div>`;
};

const generateHtml = function (data) {
  let page = [];
  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    if (role === "Manager") {
      const managersCard = managerCard(data[i]);
      page.push(managersCard);
    }

    if (role === "Intern") {
      const internsCard = internCard(data[i]);
      page.push(internsCard);
    }

    if (role === "Engineer") {
      const engineersCard = engineerCard(data[i]);
      page.push(engineersCard);
    }
  }
  const cards = page.join("");
  const generateTeam = main(cards);
  return generateTeam;
};

const main = function (employeeCards) {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css"/>
        <title>Team</title>
    </head>
    <body>
    <header class="header">
    <h1>
        Team Profile
    </h1>
</header>
    <main class="content">
    ${employeeCards}
    </main>    
    </body>
    </html>`;
};

module.exports = generateHtml;
