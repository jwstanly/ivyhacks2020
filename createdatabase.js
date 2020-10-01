const sqlite3 = require("sqlite3").verbose();
var sleep = require("sleep");


sqlite3.verbose();

let db = new sqlite3.Database("./ivyhacks.db", (err) => {
  if(err) {
    console.log("OPening error");
    return console.error(err.message);
  }

  console.log("All good on the opening");

});

db.serialize(function() {
  let sql = "pragma foreign_keys=ON;"
  console.log("1");
  db.run(sql);

  sql = "CREATE TABLE USStates (postalcode VARCHAR(2) unique)";
  console.log("2");
  db.run(sql);

  sql = "INSERT INTO USStates (postalcode) VALUES (\"AL\"), (\"AK\"), (\"AZ\"), (\"AR\"), (\"CA\"), (\"CO\"), (\"CT\"), (\"DE\"), (\"FL\"), (\"GA\"), (\"HI\"), (\"ID\"), (\"IL\"), (\"IN\"), (\"IA\"), (\"KS\"), (\"KY\"), (\"LA\"), (\"ME\"), (\"MD\"), (\"MA\"), (\"MI\"), (\"MN\"), (\"MS\"), (\"MO\"), (\"MT\"), (\"NE\"), (\"NV\"), (\"NH\"), (\"NJ\"), (\"NM\"), (\"NY\"), (\"NC\"), (\"ND\"), (\"OH\"), (\"OK\"), (\"OR\"), (\"PA\"), (\"RI\"), (\"SC\"), (\"SD\"), (\"TN\"), (\"TX\"), (\"UT\"), (\"VT\"), (\"VA\"), (\"WA\"), (\"WV\"), (\"WI\"), (\"WY\");"
  console.log("3");
  db.run(sql);
});

//sql = "CREATE TABLE Users (id INTEGER PRIMARY KEY AUTOINCROMENT, name VARCHAR(255), )"


db.close( (err) => {
  if(err) {
    console.log("Closing Error");
    return console.error(err.message);
  }

  console.log("All good on the closing");
})
