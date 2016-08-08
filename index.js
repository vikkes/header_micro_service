
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  var lang = req.headers["accept-language"].split(";")[0];
  var ip = req.headers["x-forwarded-for"];
  var ua = req.headers["user-agent"];
  //res.send(ip+"-"+lang+"-"+req.headers.host);
  
  res.json({
      ipadress: ip,
      language: lang,
      software: ua
    });
    
});

app.listen(8080, function () {
  console.log('Example app listening on port 3000!');
});