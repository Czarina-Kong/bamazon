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
  if (err) throw err
  queryAllProducts()
  // The app should then prompt users with two messages.
  setTimeout(function(){
  	start()
  },1000)
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

// The first should ask them the ID of the product they would like to buy.
// The second message should ask how many units of the product they would like to buy.
function start() {
  inquirer
    .prompt([
      {
        name: "item_id",
        type: "input",
        message: "What is the ID of the product you would like to buy?"
      },
      {
        name: "units",
        type: "input",
        message: "How many units of this product would you like to buy?"
      },
    ])
// Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
// If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.
// However, if your store does have enough of the product, you should fulfill the customer's order.
// This means updating the SQL database to reflect the remaining quantity.
// Once the update goes through, show the customer the total cost of their purchase.
    .then(function(answer) {
		connection.query('SELECT * FROM products WHERE item_id = '+answer.item_id, function(err, res){
			if (res[0].stock_quantity>=answer.units) {
				var updatedQty = res[0].stock_quantity-answer.units
				connection.query('UPDATE products SET stock_quantity = '+updatedQty+' WHERE item_id = '+answer.item_id, function(err,res){
				})
				var total = res[0].price * answer.units
				console.log('Your order was placed.  Your total is $'+total)
				console.log("Let's shop 'til we drop!!")
				start()
			} else {
				console.log("I'm sorry, we don't have quite enough " + res[0].product_name+" available.\nWould you like to purchase something else?")
				start()
			}
		})
    });
}
// If this activity took you between 8-10 hours, then you've put enough time into this assignment. Feel free to stop here -- unless you want to take on the next challenge.