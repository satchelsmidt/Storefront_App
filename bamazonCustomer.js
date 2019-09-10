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

var itemsOrdered
var itemsStocked
var itemPrice
var productOrdered

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    showProducts();
    //Function here to run inquirer prompt
});

function showProducts() {
    connection.query("SELECT item_id, product_name, price FROM products", function (err, res) {
        if (err) throw err;
        //can use console.table here to run and get a table, must take in an array though
        console.table(res);
        buyProducts();
        //   connection.end();
    });
}

function buyProducts() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'itemID',
                message: 'What is the id of the item you would like to buy?'
            },
            {
                type: 'input',
                name: 'itemQ',
                message: 'How many units of the item would you like to buy?'
            }
        ])
        .then(answers => {
            connection.query('SELECT product_name, stock_quantity, price FROM products WHERE item_id = ?', answers.itemID, function (err, res) {
                if (err) throw err;

                productOrdered = res[0].product_name;
                itemsOrdered = parseInt(answers.itemQ);
                itemsStocked = res[0].stock_quantity;
                itemPrice = res[0].price

                inquirer
                    .prompt([
                        {
                            type: 'confirm',
                            name: 'confirmOrder',
                            message: 'Are you sure you would like to order ' + answers.itemQ + ' units of ' + res[0].product_name + '?'
                        }
                    ])
                    .then(answers => {
                        if (answers.confirmOrder) {
                            console.log("\n" + "items ORDERED: ", itemsOrdered + typeof (itemsOrdered))
                            console.log("items STOCKED ", itemsStocked + typeof (itemsStocked))
                            if (itemsOrdered > itemsStocked) {
                                console.log("NOT ENOUGH QUANTITY, TRY AGAIN")
                                buyProducts();
                            }
                            else {
                                console.log("\n" + "ENOUGH QUANTITY, ORDER PROCESSED!")
                                // itemsStocked = itemsStocked - itemsOrdered;
                                //UPDATE NUMS IN SQL
                                updateProduct();

                                // CALCULATE ORDER COST
                                var orderCost = itemPrice * itemsOrdered
                                console.log("\n" + "TOTAL COST: $", orderCost)
                            }
                        }
                        else {
                            console.log("Goodbye!")
                            return
                        }
                    })
            })
        });
}

function updateProduct() {
    var query = connection.query(
        "UPDATE products SET ? WHERE ?",
        //Use two question marks because you are updating both the key and the value in the stuff you are adding (SET key WHERE value)
        [
            {
                stock_quantity: itemsStocked - itemsOrdered
        },
            {
                product_name: productOrdered
            }
        ],
        function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " products updated!\n");
            console.log("THIS SHOULD BE A NEW NUMBER: ", res[0])
        }
    );

    // logs the actual query being run
    console.log(query.sql);
}
