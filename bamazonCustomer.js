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

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
    //Function here to run inquirer prompt
});

// function specificArtist() {
//   connection.query("SELECT * FROM top5000 WHERE artist=?", [process.argv[2]], function(err, res) {
//     //Line above basically puts question mark as a variable, then you can set which genre of songs are shown. Can do specific or you can set it to [process.argv[2]]
//       if (err) throw err;
//       //can use console.table here to run and get a table, must take in an array though
//       console.table(res);
//       connection.end();
//   });
// }

// function topArtists() {
//     connection.query("SELECT COUNT(artist), artist FROM top5000 GROUP BY artist HAVING COUNT(artist) > 1 ORDER BY COUNT(artist) DESC", function(err, res) {
//       //Line above basically puts question mark as a variable, then you can set which genre of songs are shown. Can do specific or you can set it to [process.argv[2]]
//         if (err) throw err;
//         //can use console.table here to run and get a table, must take in an array though
//         console.table(res);
//         connection.end();
//     });
//   }
  
// function artistYear() {
//     connection.query(`SELECT * FROM top5000 WHERE year BETWEEN ${process.argv[2]} AND ${process.argv[3]} ORDER BY year`, function(err, res) {
//       //Line above basically puts question mark as a variable, then you can set which genre of songs are shown. Can do specific or you can set it to [process.argv[2]]
//         if (err) throw err;
//         //can use console.table here to run and get a table, must take in an array though
//         console.table(res);
//         connection.end();
//     });
//   }