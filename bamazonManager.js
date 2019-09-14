var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    showMenu();
});

function showMenu() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'Options',
                choices: ['View products for sale', 'View low inventory', 'Add to inventory', 'Add new product']
            }
        ])
        .then(answers => {
            if (answers.Options === 'View products for sale') {
                viewProducts();
            }
            else if (answers.Options === 'View low inventory') {
                viewInventory();

            }
            else if (answers.Options === 'Add to inventory') {
                addInventory();
            }
            else {
                addProducts();
            }
        });
}

function viewProducts() {
    connection.query("SELECT item_id, product_name, price FROM products", function (err, res) {
        if (err) throw err;
        //can use console.table here to run and get a table, must take in an array though
        console.table(res);
        showMenu();
    });
};

function viewInventory() {
    console.log("Low Inventory Items:")
    connection.query("SELECT item_id, product_name, price FROM products WHERE stock_quantity < 5", function (err, res) {
        if (err) throw err;
        //can use console.table here to run and get a table, must take in an array though
        console.table(res);
        showMenu();
    });
};

function addInventory() {
    // TODO: run a connection.query to SELECT * FROM products

    inquirer
        .prompt([
            {
                type: 'list',
                name: 'chooseItem:',
                choices: function () {
                    // loop over the res object that we get back from the database

                    // on each iteration, push only the product_name into a new array and return the new array
                }
            }
        ])
        .then(answers => {
            //TODO: use the mysql connection to run a SELECT * FROM products WHERE product_name= answers.item
        });
};


function addProducts() {

};
