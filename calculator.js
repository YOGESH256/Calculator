const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended :true}));



app.get("/binCalculator" , function (req , res) {

// res.sendFile(__dirname);

res.sendFile(__dirname + "/binCalculator.html");

});

app.post("/binCalculatorl" ,  function(req , res) {


   var  num1 =Number(req.body.height) ;
   var num2 = Number(req.body.weight);
   result = num1+num2;

   res.send("the result of calculation is " + result)


});


app.listen(3000 , function () {
  console.log("Sever running on 3000");

});
