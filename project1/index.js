var express = require('express');
var app = express();

function kalkulator(operation,num1,num2){
    if(operation =='dodawanie'){
        return(num1 +'+'+ num2 +'=' +(num1 + num2))
    }
    else if(operation =='odejmowanie'){
        return(num1 +'-'+ num2 +'=' +(num1 - num2))
    }
    else if(operation =='mnozenie'){
        return(num1 +'*'+ num2 +'=' +(num1 * num2))
    }
    else if(operation =='dzielenie'){
        return(num1 +'/'+ num2 +'=' +(num1 / num2))
    }
    else{
        return ('');
    }
}

app.get('/', function(req, res){
 var operation = req.params.operation;
 var num1= parseInt(req.params.num1);
 var num2= parseInt(req.params.num2);
 
 res.send(kalkulator(operation, num1, num2));

});

app.get('/', function (req, res) {
    res.send('Hello World');
});
app.listen(3000);
