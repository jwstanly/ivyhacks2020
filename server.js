const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database("./test.db", sqlite3.OPEN_READWRITE, (err) => {
  if(err) {
    return console.error(err.message);
  }

  console.log("Connected to the Sqlite database successfully");

});


let query = "SELECT * from Test;";


db.all(query, [], (err, rows) => {
  if(err) {
    throw err;
  }

  rows.forEach((row) => {

    console.log(row.age);
  })
})


db.close((err) => {
  if(err) {
    return console.error(err.message);
  }
  console.log("Close the database connection.");
});
