//* Dependencies
const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');

//*Constructor Classes
const employee = require('./constr/employee');
const role = require('./constr/role');
const department = require('./constr/department');

//*Logger to allow colored console logs
const Logger = require('./Logger/logger');
const log = new Logger();

//* Arrays
let managerArray = [];
let roleArray = [];
let deptArray = [];
let managerAndIDArray = [];
let roleAndIDArray = [];

//*Intro Inquirer Question
const introQ = [
	{
		type: 'rawlist',
		message: 'What Would You Like To Do?',
		name: 'queryInto',
		choices: [
			'View All Employees',
			'View All Employees By Department',
			'View All Employees By Manager',
			'Add Employee',
			'Remove Employee',
			'Update Employee Role',
			'Update Employee Manager',
			'View All Roles',
			'Add Role',
			'Remove Role',
			'View All Departments',
			'Add Department',
			'Remove Department',
			'View Total Utalized Budget Of A Department',
			'Exit Application',
		],
	},
];

const connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'JeffMacSQL!!',
	database: 'p12_db',
});

connection.connect(function (err) {
	if (err) throw err;
	startApp();
	buildManagerArray();
	buildRoleArray();
	builddeptArray();
	ManagerWithID();
	RoleWithID();
});

//* function to start the program, prints app header and has intro inquirer prompt
function startApp() {
	log.yellow(`
    
---------------------------------------------------------------------------------------                                                
     ________                          __                                              
    /        |                        /  |                                             
    $$$$$$$$/  _____  ____    ______  $$ |  ______   __    __   ______    ______       
    $$ |__    /     \/    \  /      \ $$ | /      \ /  |  /  | /      \  /      \      
    $$    |   $$$$$$ $$$$  |/$$$$$$  |$$ |/$$$$$$  |$$ |  $$ |/$$$$$$  |/$$$$$$  |     
    $$$$$/    $$ | $$ | $$ |$$ |  $$ |$$ |$$ |  $$ |$$ |  $$ |$$    $$ |$$    $$ |     
    $$ |_____ $$ | $$ | $$ |$$ |__$$ |$$ |$$ \__$$ |$$ \__$$ |$$$$$$$$/ $$$$$$$$/      
    $$       |$$ | $$ | $$ |$$    $$/ $$ |$$    $$/ $$    $$ |$$       |$$       |     
    $$$$$$$$/ $$/  $$/  $$/ $$$$$$$/  $$/  $$$$$$/   $$$$$$$ | $$$$$$$/  $$$$$$$/      
                            $$ |                    /  \__$$ |                         
                            $$ |                    $$    $$/                          
                            $$/                      $$$$$$/                           
     __       __                                                                       
    /  \     /  |                                                                      
    $$  \   /$$ |  ______   _______    ______    ______    ______    ______            
    $$$  \ /$$$ | /      \ /       \  /      \  /      \  /      \  /      \           
    $$$$  /$$$$ | $$$$$$  |$$$$$$$  | $$$$$$  |/$$$$$$  |/$$$$$$  |/$$$$$$  |          
    $$ $$ $$/$$ | /    $$ |$$ |  $$ | /    $$ |$$ |  $$ |$$    $$ |$$ |  $$/           
    $$ |$$$/ $$ |/$$$$$$$ |$$ |  $$ |/$$$$$$$ |$$ \__$$ |$$$$$$$$/ $$ |                
    $$ | $/  $$ |$$    $$ |$$ |  $$ |$$    $$ |$$    $$ |$$       |$$ |                
    $$/      $$/  $$$$$$$/ $$/   $$/  $$$$$$$/  $$$$$$$ | $$$$$$$/ $$/                 
                                               /  \__$$ |                              
                                               $$    $$/                               
                                                $$$$$$/                                                                    
-----------------------------------------------------------------------------------------
                                                                                          
    `);
	inquirer.prompt(introQ).then(function (data) {
		const intoQuestion = data.queryInto;
		if (intoQuestion === 'View All Employees') {
			func1();
		} else if (intoQuestion === 'View All Employees By Department') {
			func2();
		} else if (intoQuestion === 'View All Employees By Manager') {
			func3();
		} else if (intoQuestion === 'Add Employee') {
			func4();
		} else if (intoQuestion === 'Remove Employee') {
			func5();
		} else if (intoQuestion === 'Update Employee Role') {
			func6();
		} else if (intoQuestion === 'Update Employee Manager') {
			func7();
		} else if (intoQuestion === 'View All Roles') {
			func8();
		} else if (intoQuestion === 'Add Role') {
			func9();
		} else if (intoQuestion === 'Remove Role') {
			func10();
		} else if (intoQuestion === 'View All Departments') {
			func11();
		} else if (intoQuestion === 'Add Department') {
			func12();
		} else if (intoQuestion === 'Remove Department') {
			func13();
		} else if (intoQuestion === 'View Total Utalized Budget Of A Department') {
			func14();
		} else {
			func15();
		}
	});
}

//* Function to view all employees with their names, departments, job titles, salaries, and managers
function func1() {
	//

	var query = `
    SELECT e.id AS employee_id, e.first_name, e.last_name, d.name AS department_name, r.title AS job_title, r.salary, CONCAT(x.first_name, " ", x.last_name) AS manager_name 
    FROM employee e
    LEFT JOIN role r
    ON e.role_id = r.id
    LEFT JOIN department d
    ON d.id = r.department_id
    LEFT JOIN employee x
    ON e.manager_id = x.id`;

	connection.query(query, function (err, res) {
		if (err) throw err;
		//Adds space between the console table
		console.log(`
		
		`);
		console.table(res);

		reRun();
	});
}

function func2() {
	//
	const query = 'SELECT name FROM department';
	connection.query(query, function (err, res) {
		if (err) throw err;
		inquirer
			.prompt({
				name: 'deptChoice',
				type: 'list',
				message: 'What Department Would You Like To View All Employees Within?',
				choices: function () {
					const departmentChoices = [];
					for (let i = 0; i < res.length; i++) {
						departmentChoices.push(res[i].name);
					}
					return departmentChoices;
				},
			})
			.then(function (answer) {
				const query2 = `
                    SELECT e.id AS employee_id, e.first_name, e.last_name, d.name AS department_name, r.title AS job_title, r.salary, CONCAT(x.first_name, " ", x.last_name) AS manager_name 
                    FROM employee e
                    LEFT JOIN role r
                    ON e.role_id = r.id
                    LEFT JOIN department d
                    ON d.id = r.department_id
                    LEFT JOIN employee x
                    ON e.manager_id = x.id
                    WHERE name = ?`;
				connection.query(query2, [answer.deptChoice], function (err, res) {
					if (err) throw err;
					//Adds space between the console table
					console.log(`
		
					`);
					console.table(res);
					reRun();
				});
			});
	});
}

//* View All Employees By Manager
//! Need to fix querying of Manager_name as that does not exist
function func3() {
	//
	const query = `
    SELECT DISTINCT CONCAT(x.first_name, " ", x.last_name) AS manager_name 
    FROM employee e
    INNER JOIN employee x
    ON e.manager_id = x.id
    `;
	connection.query(query, function (err, res) {
		if (err) throw err;
		inquirer
			.prompt({
				name: 'managerChoices',
				type: 'list',
				message: 'Who Is The Manager You Want To View All Employees Who Work Under?',
				choices: function () {
					const ManagerChoiceArray = [];
					for (let i = 0; i < res.length; i++) {
						ManagerChoiceArray.push(res[i].manager_name);
					}
					return ManagerChoiceArray;
				},
			})
			.then(function (answer) {
				console.log(`This is your choice ----- ${answer.managerChoices}`);
				const query2 = `
                    SELECT e.id AS employee_id, e.first_name, e.last_name, d.name AS department_name, r.title AS job_title, r.salary, CONCAT(x.first_name, " ", x.last_name) AS manager_name 
                    FROM employee e
                    LEFT JOIN role r
                    ON e.role_id = r.id
                    LEFT JOIN department d
                    ON d.id = r.department_id
                    LEFT JOIN employee x
                    ON e.manager_id = x.id
                    HAVING manager_name = ?`;
				connection.query(query2, [answer.managerChoices], function (err, res) {
					if (err) throw err;
					//Adds space between the console table
					console.log(`
		
					`);
					console.table(res);
					reRun();
				});
			});
	});
}

//* Add Employee
function func4() {
	//
	inquirer
		.prompt([
			{
				name: 'first_name',
				type: 'input',
				message: 'What Is The First Name Of The New Employee?',
				validate: function (valLet) {
					letters = /^[A-Za-z]+$/.test(valLet);
					if (letters) {
						return true;
					} else {
						log.red(`
                      Invalid Submission. Please Only Submit Letters
                Please Delete Submission And Re-Submit With Only Letters`);
						return false;
					}
				},
			},
			{
				name: 'last_name',
				type: 'input',
				message: 'What Is The Last Name Of The New Employee?',
				validate: function (valLet) {
					letters = /^[A-Za-z]+$/.test(valLet);
					if (letters) {
						return true;
					} else {
						log.red(`
                      Invalid Submission. Please Only Submit Letters
                Please Delete Submission And Re-Submit With Only Letters`);
						return false;
					}
				},
			},
			{
				name: 'role',
				type: 'list',
				message: 'What Is The Job Title Of This New Employee?',
				choices: roleArray,
			},
			{
				name: 'manager',
				type: 'list',
				message: 'Who Is The Manager For This New employee',
				choices: managerArray,
			},
		])
		.then(function (answer) {
			// Builds construtor for new employee
			console.log(answer);

			let employeeFirstName = answer.first_name;
			let employeeLastName = answer.last_name;

			//*Loop through Role Array to find matching id
			function FindRoleID() {
				for (let p = 0; p < roleAndIDArray.length; p++) {
					if (roleAndIDArray[p].title === answer.role) {
						return roleAndIDArray[p].id;
					}
				}
			}
			//*Loop through Manager Array to find matching id
			function FindManagerID() {
				for (let q = 0; q < managerAndIDArray.length; q++) {
					if (managerAndIDArray[q].manager_name === answer.manager) {
						return managerAndIDArray[q].manager_id;
					}
				}
			}
			let employeeRole = FindRoleID();
			let employeeManager = FindManagerID();

			//* Take information and build a constructor to insert into DB
			log.green(`Adding New Employee ${employeeFirstName} ${employeeLastName} to Database!`);
			let addnewEmployee = new employee(employeeFirstName, employeeLastName, employeeRole, employeeManager);
			connection.query('INSERT INTO employee SET ?', addnewEmployee, function (err, res) {
				if (err) throw err;
			});
			reRun();
		});
}

//*Remove Employee
function func5() {
	//
	//! Call reRun() at the end of the query
}

//*Update Employee Role
function func6() {
	//
	//! Call reRun() at the end of the query
}

//*Update Employee Manager
function func7() {
	//
	//! Call reRun() at the end of the query
}

//*View All Roles
function func8() {
	//
	var query = `
    SELECT * FROM role`;

	connection.query(query, function (err, res) {
		if (err) throw err;
		console.table(res);

		reRun();
	});
}

//*Add Role
function func9() {
	inquirer
		.prompt([
			{
				name: 'newRole',
				type: 'input',
				message: 'What Is The Title Of The New Role You Want To Add?',
			},
			{
				name: 'newRoleSalary',
				type: 'number',
				message: 'What Is The Salary Of This New Role?',
			},
		])
		.then(function (answer) {
			//*Need to add role name and then find length of role array to add ID #
			let newRoleName = answer.newRole;
			let newRoleSalary = answer.newRoleSalary;
			let newRoleID = roleArray.length + 1;

			//* Take information and build new role constructor
			log.green(`Adding New Role | Role Title: ${newRoleName} | Role Salary ${newRoleSalary} | Role ID ${newRoleID} to Database!`);
			let addNewRole = new role(newRoleName, newRoleSalary, newRoleID);
			connection.query('INSERT INTO role SET ?', addNewRole, function (err, res) {
				if (err) throw err;
			});
			reRun();
		});
}

//*Remove Role
function func10() {
	//
	inquirer
		.prompt([
			{
				name: 'removeRole',
				type: 'list',
				message: 'What Role Do You Want To Remove?',
				choices: roleArray,
			},
		])
		.then(function (answer) {
			connection.query('DELETE FROM role WHERE title = ?', [answer.removeRole], function (err, res) {
				if (err) throw err;
				log.red(`
				The ${answer.removeRole} Role Has Been Removed From The DB
				`);
			});
			reRun();
		});
}

//*View All Departments
function func11() {
	var query = `
    SELECT * FROM department`;

	connection.query(query, function (err, res) {
		if (err) throw err;
		console.table(res);

		reRun();
	});
}

//*Add Department
function func12() {
	inquirer
		.prompt([
			{
				name: 'newDept',
				type: 'input',
				message: 'What Is The Name Of This New Department?',
			},
		])
		.then(function (answer) {
			//*Need to add role name and then find length of role array to add ID #
			let newdeptName = answer.newDept;
			let newDeptID = deptArray.length + 1;

			//* Take information and build new role constructor
			log.green(`Adding New Department | Department Name: ${newdeptName} | Department ID ${newDeptID} to Database!`);
			let addNewDept = new department(newdeptName, newDeptID);
			connection.query('INSERT INTO department SET ?', addNewDept, function (err, res) {
				if (err) throw err;
			});
			reRun();
		});
}

//*Remove Department
function func13() {
	//
	inquirer
		.prompt([
			{
				name: 'removeDept',
				type: 'list',
				message: 'What Department Do You Want To Remove?',
				choices: deptArray,
			},
		])
		.then(function (answer) {
			connection.query('DELETE FROM department WHERE name = ?', [answer.removeDept], function (err, res) {
				if (err) throw err;
				log.red(`
				The ${answer.removeDept} Department Has Been Removed From The DB
				`);
			});
			reRun();
		});
}

//*View Total Utalized Budget Of A Department
function func14() {
	inquirer
		.prompt({
			name: 'deptChoice',
			type: 'list',
			message: 'What Department Would You Like To View The Total Utalized Budget?',
			choices: deptArray,
		})
		.then(function (answer) {
			const query = `
			SELECT d.name AS Department_Name, SUM(r.salary) AS Total_Budget
            FROM employee e
            LEFT JOIN role r
            ON e.role_id = r.id
            LEFT JOIN department d
            ON d.id = r.department_id
            GROUP BY d.name
            HAVING d.name = ?`;
			connection.query(query, [answer.deptChoice], function (err, res) {
				if (err) throw err;
				//Adds space between the console table
				console.log(`
		
					`);
				console.table(res);
				reRun();
			});
		});
}

//*Exit App
//! Function 14 Ends Program with closing application message
function func15() {
	//
	log.red(`
    
     ______                       __  __                        __      __                           
    /      \                     /  |/  |                      /  |    /  |                          
   /$$$$$$  |  ______    ______  $$ |$$/   _______   ______   _$$ |_   $$/   ______   _______        
   $$ |__$$ | /      \  /      \ $$ |/  | /       | /      \ / $$   |  /  | /      \ /       \       
   $$    $$ |/$$$$$$  |/$$$$$$  |$$ |$$ |/$$$$$$$/  $$$$$$  |$$$$$$/   $$ |/$$$$$$  |$$$$$$$  |      
   $$$$$$$$ |$$ |  $$ |$$ |  $$ |$$ |$$ |$$ |       /    $$ |  $$ | __ $$ |$$ |  $$ |$$ |  $$ |      
   $$ |  $$ |$$ |__$$ |$$ |__$$ |$$ |$$ |$$ \_____ /$$$$$$$ |  $$ |/  |$$ |$$ \__$$ |$$ |  $$ |      
   $$ |  $$ |$$    $$/ $$    $$/ $$ |$$ |$$       |$$    $$ |  $$  $$/ $$ |$$    $$/ $$ |  $$ |      
   $$/   $$/ $$$$$$$/  $$$$$$$/  $$/ $$/  $$$$$$$/  $$$$$$$/    $$$$/  $$/  $$$$$$/  $$/   $$/       
             $$ |      $$ |                                                                          
             $$ |      $$ |                                                                          
             $$/       $$/                                                                           
                       ______   __                                      __                           
                      /      \ /  |                                    /  |                          
                     /$$$$$$  |$$ |  ______    _______   ______    ____$$ |                          
                     $$ |  $$/ $$ | /      \  /       | /      \  /    $$ |                          
                     $$ |      $$ |/$$$$$$  |/$$$$$$$/ /$$$$$$  |/$$$$$$$ |                          
                     $$ |   __ $$ |$$ |  $$ |$$      \ $$    $$ |$$ |  $$ |                          
                     $$ \__/  |$$ |$$ \__$$ | $$$$$$  |$$$$$$$$/ $$ \__$$ |                          
                     $$    $$/ $$ |$$    $$/ /     $$/ $$       |$$    $$ |                          
                      $$$$$$/  $$/  $$$$$$/  $$$$$$$/   $$$$$$$/  $$$$$$$/                           
                                                                                                     
                                                                                                     
                                                                                                     
    
    `);
	connection.end();
}

//! Function to ask the user if they want to return to the main menu or exit the application. Prompted after a query function is completed
function reRun() {
	inquirer
		.prompt({
			name: 'rerun',
			type: 'list',
			message: 'Would You Like To Return To The Main Menu Or Exit The Application?',
			choices: ['Return To Main Menu', 'Exit Application'],
		})
		.then(function (data) {
			const reRunQ = data.rerun;
			if (reRunQ === 'Return To Main Menu') {
				startApp();
			} else {
				func15();
			}
		});
}

//* Builds array for Manager Names
function buildManagerArray() {
	var query = `
    SELECT DISTINCT x.id, CONCAT(x.first_name, " ", x.last_name) 
    AS manager_name 
    FROM employee e 
    INNER JOIN employee x 
    ON e.manager_id = x.id`;

	connection.query(query, function (err, res) {
		if (err) throw err;
		for (let i = 0; i < res.length; i++) {
			managerArray.push(res[i].manager_name);
		}
		managerArray.push('null'); //Adds Null At the end of the array since not all new employees have managers
	});
}

//* Builds array for Job Title Names
function buildRoleArray() {
	var query = `
    SELECT id, title 
    FROM role;`;

	connection.query(query, function (err, res) {
		if (err) throw err;
		for (let i = 0; i < res.length; i++) {
			roleArray.push(res[i].title);
		}
	});
}

//* Builds array for Job Title Names
function builddeptArray() {
	var query = `
    SELECT id, name 
    FROM department;;`;

	connection.query(query, function (err, res) {
		if (err) throw err;
		for (let i = 0; i < res.length; i++) {
			deptArray.push(res[i].name);
		}
	});
}

function ManagerWithID() {
	var query = `
    SELECT DISTINCT CONCAT(x.first_name, " ", x.last_name) AS manager_name, x.id AS manager_id 
    FROM employee e
    LEFT JOIN employee x
    ON e.manager_id = x.id`;

	connection.query(query, function (err, res) {
		if (err) throw err;
		for (let i = 0; i < res.length; i++) {
			managerAndIDArray.push(res[i]);
		}
	});
}

function RoleWithID() {
	var query = `
    SELECT id, title 
    FROM role;`;

	connection.query(query, function (err, res) {
		if (err) throw err;
		for (let i = 0; i < res.length; i++) {
			roleAndIDArray.push(res[i]);
		}
	});
}
