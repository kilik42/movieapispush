var express = require("express");

app = express();

var request = require("request");
app.set("view engine","ejs");

app.get("/results", function(req, res){
    request("http://omdbapi.com/?s=chicago", function(error, response, body){
      if (!error && response.statusCode == 200) {
        var data = JSON.parse(body);
        //res.send(results["Search"][0]["Title"]);
        //var data = JSON.parse(body);

        res.render("results",{data:data});
      }
    });

});


app.listen(3000, function(){

  console.log("movie app  has started!!!");
});


//for cloud 9 servers:
//app.listen(process.env.PORT, process.env.IP, function(){

//  console.log("movie app  has started!!!");
//});
