USE p12_db;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Marcus", "Fenix", 3, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Leon", "Kennedy", 11, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Manny", "Cavalera", 9, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Samus", "Aran", 4, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Gordon", "Freeman", 6, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Arthas", "Menethil", 1, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Nathan", "Drake", 10, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Duke", "Nukem", 1, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Revolver", "Ocelot", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Cloud", "Strife", 8, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Lara", "Croft", 12, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Justin", "Greene", 7, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Keri", "Lee", 8, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Maxson", 5, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Dick", "Richardson", 11, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Frank", "Horrigan", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Keith", "Wright", 4, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Rebecca", "Dyer", 5, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Sally", "Dunton", 10, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Thomas", "Moore", 10, 4);

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Associate", 60000.00, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Sales Manager", 85000.00, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Sales Director", 120000.00, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Junior Engineer", 90000.00, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Senior Engineer", 140000.00, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Engineering Manager", 210000.00, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Junior Finance Associate", 50000.00, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Senior Finance Associate", 75000.00, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Finance Manager", 110000.00, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Junior Legal Advisor", 95000.00, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("Senior Legal Advisor", 165000.00, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("Legal Manager", 245000.00, 4);

INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("Engineering");
INSERT INTO department (name)
VALUES ("Finance");
INSERT INTO department (name)
VALUES ("Legal");
