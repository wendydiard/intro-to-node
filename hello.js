

var mysql=require('mysql');

// create a connection
var con=mysql.createConnection({
	host: "localhost",
	user: "test",
	password: "test",
	database: "test",

})


// connect to mysql
con.connect(function(err) {
	if (err) throw err;
	console.log("Connected to Database");

	var sql="Insert into tbl_customers (cust_email, cust_name) values ?";
	var values=[
		['tim@tim.com','Tim'],
		['sam@sam.com','Sam'],
		['laura@laura.com','Laura'],

	]
	con.query(sql, [values], function(err, result) {
		if (err) throw err;
		console.log("records inserted: "+result.affectedRows);
	})

})


console.log("Hello World!");
