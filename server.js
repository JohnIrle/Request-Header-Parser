var express = require("express");
var app = express();
var routes = require("./routes/index");

app.use("/", routes);

// listen for requests :)
var listener = app.listen(5000, function() {
  console.log("Your app is listening on port " + 5000);
});
