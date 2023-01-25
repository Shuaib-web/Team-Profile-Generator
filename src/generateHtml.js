const managersCard = function(manager) {
    return `<div class="card">
    <h1>Manager</h1>
    <h3>Name: ${manager.name}</h3>
    <h3>Email: ${manager.email}</h3>
    <h3>Office Number: ${manager.officeNumber}</h3>
    </div>`
}

const internCard = function(intern) {
    return `<div class="card">
    <h1>Intern</h1>
    <h3>Name: ${intern.name}</h3>
    <h3>Email: ${intern.email}</h3>
    <h3>Office Number: ${intern.school}</h3>
    </div>`
}

const engineerCard = function(engineer) {
    return `<div class="card">
    <h1>Engineer</h1>
    <h3>Name: ${engineer.name}</h3>
    <h3>Email: ${engineer.email}</h3>
    <h3>Office Number: ${manager.github}</h3>
    </div>`
}

const generateHtml = function(data) {
    let page = []
    for(let i = 0; i < data.length; i++) {
        const employee = data[i]
        const role = employee.getRole()

        if(role === 'Manager') {
            const managerCard = managersCard(employee)
            page.push(managerCard)
        }

        if(role === 'Intern') {
            const internCard = managersCard(employee)
            page.push(internCard)
        }

        if(role === 'Engineer') {
            const engineerCard = managersCard(employee)
            page.push(engineerCard)
        }
    }
    const cards = page.join('')
    const generateTeam = main(employeeCards)
    return generateTeam
}

const main = function(employeeCards) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team</title>
    </head>
    <body>
        ${employeeCards}
    </body>
    </html>`
}

module.exports = generateHtml