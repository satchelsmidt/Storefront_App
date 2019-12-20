# Storefront_App

### About

This is a CLI (Command Line Interface) application designed to mimic an online storefront. Users can run the app as either a customer or a manager, and perform a different series of tasks unique to each option. 

App wa built to test development skills in a terminal-type environment, with minimal UI/UX components.  

### Walkthrough

This app has two interfaces within it, a customer application and a manager application. 

The customer application allows the customer to view a list of products in the store, select an item and a quantity to purchase, and to complete the purchase. 

Here is a gif of this view:
<br>
<img src="/assets/storefront_gif_1.gif" width="600" height="250"/>


The manager application allows a user to view the current list of products, view products with an inventory level under 5 units, and reorder inventory for certain items. 

Here is a gif of this view:
<br>
<img src="/assets/storefront_gif_2.gif" width="600" height="250"/>

### Technology Used
* Javascript
  * Node.js (Inquirer package)
* MySQL


### Future Development

__Manager View__: 
* If a manager selects Add New Product, it should allow the manager to add a completely new product to the store.

__New View, 'Supervisor View'__:
* Create a new MySQL table called departments. Your table should include the following columns:
 - department_id
 - department_name
 - over_head_costs (A dummy number you set for each department)

* Modify the products table so that there's a product_sales column, and modify your bamazonCustomer.js app so that when a customer purchases anything from the store, the price of the product multiplied by the quantity purchased is added to the product's product_sales column.

* Make sure your app still updates the inventory listed in the products column.

* Create another Node app called bamazonSupervisor.js. Running this application will list a set of menu options:
 - View Product Sales by Department
 - Create New Department

* When a supervisor selects View Product Sales by Department, the app should display a summarized table in their terminal/bash window. Use the table below as a guide.
<br>
<img src="/assets/future_dev.PNG" width="600" height="200"/>

* The total_profit column should be calculated on the fly using the difference between over_head_costs and product_sales. total_profit should not be stored in any database. You should use a custom alias.

* If you can't get the table to display properly after a few hours, then feel free to go back and just add total_profit to the departments table.

 - Hint: You may need to look into aliases in MySQL.
 - Hint: You may need to look into GROUP BYs.
 - Hint: You may need to look into JOINS.
 - HINT: There may be an NPM package that can log the table to the console.




