# Project 12: MySQL Employee Tracker

Unit 12 MySQL Homework: Employee Tracker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

Project 12 for the MySQL portion of the class tasked the student with building an employee tracker in the node.js enviorment using the MySQL dependency as the database and to take the inforamtion stored in the database to create an internal tool to view employee, role, and department data. This
project required knoweldge of how to form SQL queries using multiple tables to display the information needed for each specific option in the application. in addition, the project required adding, updating, and deleting existing information in the SQL database tables.

What sets my project apart from the rest of the projects are three main areas. First, I included all bonus options to the program mentioned on the project outline. Second, my application ensures to validate the correct inforamtion being added, updated, or deleted from the database. This was
important as employees may share the same first and last name and if you try to delete or update an employee without their unique identifying value (the employee ID number for example), this would cause multiple rows to get updated. My program will prompt the user for the first name, last name, and
ID number to ensure that the correct employee is being updated as once you make a change to the database, it is hard to revert those changes. Lastly, my application has been beautified using back tick console logs for better formatting of messages while using the program. In addition to this, I have
implemented the Chalk node package to add color to the console log messages. The console log messages are color coded in a way to help the user know what they are doing. For example, the requests to update/add/delete a user will print in yellow and success messages will print in green. Any aborted
actions will print in blue.

This project was not too difficult and as I already had a background in PostgreSQL, it was not that hard to forumlate the querys to grab the inforamtion from the database I needed to perform the application actions. The more difficult concept to get down for this project was ensuring to design this
program with validation in mind to be sure that an employee removed or updated was the employee in question. To do this, as previously mentioned, I had to have the user confirm the unique identifyer for the employee which would be the employee.id value from the employee table. This prevents any
action from updating non-related accounts.

## Demo

<img src="/DemoImgs/EmployeeManagerMySQLGif.gif?raw=true">

## Table of Contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [Credits](#credits)
-   [License](#license)
-   [Contributing](#contributing)
-   [Questions](#questions)

## Installation

To install this application, first, branch the Github Repo and clone the repo to your local machine. Then, you will need to install the node dependencies which can be done by running the npm install command in your terminal/bash shell.

After the dependencies have been installed, you will need to populate your MySQL database. This can be done with dummy data that is found in the sqlFiles folder. There are two files for this. First the db.sql which will creat the database and the three tables for employee, role, and department.
Second, there is a seed.sql file which will populate the database with data for each table.

After populating the data, you will need to add your MySQL password to the server.js file to ensure tha the connection to the database can be made and requests for actions can be pushed to the database.

Once this has been completed, you are ready to use the application!

## Usage

Once everything has been set up, the application can be launched by running the command node server.js or npm start. You will then be prompted with the header for the program shown in ASCII art and will have a set of options to pick from. From here, you can select what action you want to take.

## Credits

This application was completed by Jeff Quittman as a project for UCLA/Trilogy's Full Stack Software Development Bootcamp.

Dependencies for this project include the node modules:

Inquirer - for creating question prompts in the CLI. Chalk - for creating colorized console.log messages MySQL - for connecting the MySQL database to Node.js Console.Table - for console logging the table information from the SQL file in an easy to read format.

## License

    								MIT License

    		Unit 12 MySQL Homework: Employee Tracker   Copyright (C) 2020 Jeffrey Quittman

    		Permission is hereby granted, free of charge, to any person obtaining a copy
    		of this software and associated documentation files (the "Software"), to deal
    		in the Software without restriction, including without limitation the rights
    		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    		copies of the Software, and to permit persons to whom the Software is
    		furnished to do so, subject to the following conditions:

    		The above copyright notice and this permission notice shall be included in all
    		copies or substantial portions of the Software.

    		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    		SOFTWARE.

## Contributing

If you would like to contribute to this application, please feel free to email me via the email found in the questions section and we can discuss how to collaborate and enhance this application

## Tests

N/A

## Questions

-   For any questions related to this applicaiton, please contact me at: JeffQuittman@gmail.com.

-   Please use this link to access my Github Profile: [https://github.com/JeffQuit](https://github.com/JeffQuit)
