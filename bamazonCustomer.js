// Then create a Node application called bamazonCustomer.js. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
// Dependencies
var mysql = require("mysql")
var inquirer = require("inquirer")
// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "abc123",
  database: "bamazon_db"
})
// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // console.log('connected as id ' + connection.threadID);
  queryAllProducts();
  // // run the start function after the connection is made to prompt the user
  // start();
})
function queryAllProducts() {
	connection.query('SELECT * FROM products', function(err, res){
		console.log("***WELCOME TO CZARINA'S BAMAZON APP***\n*Take a look at what I have for sale!*")
		for (var i = 0; i < res.length; i++) {
			console.log(res[i].item_id+' | '+res[i].product_name+' | $'+res[i].price)
		}
		console.log('--------------------------------------')
	})
}
// The app should then prompt users with two messages.

// The first should ask them the ID of the product they would like to buy.
// The second message should ask how many units of the product they would like to buy.
// Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
// If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.
// However, if your store does have enough of the product, you should fulfill the customer's order.
// This means updating the SQL database to reflect the remaining quantity.
// Once the update goes through, show the customer the total cost of their purchase.
// If this activity took you between 8-10 hours, then you've put enough time into this assignment. Feel free to stop here -- unless you want to take on the next challenge.