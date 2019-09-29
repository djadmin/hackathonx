var express = require('express');
var app = express();

app.get('/', function(req, res){
	let price = req.query.price;
	let quantity = req.query.quantity
	let isNotLoyal = !req.query.isLoyal;
	let maxQuantity = req.query.maxQuantity;
	
	let isScam = checkScam(price, quantity, isNotLoyal, maxQuantity);
  res.send(!!isScam);
});


// this is the equation of detect scammer by number of order, item price, buyer either loyal customer, maximum quantity of item  
// number of order = int No
// item Price = int Po
// buyer not loyal customer = boolean NL
// maximum quantity of item = MPo 
// return 1 = scammer detected

const checkScam = (Po, No, NL, MPo) => {
	if(Po === 0 || No === 0 || MPo === 0 )
    	return null;

    // Detect if the max value of No*Po is greater than $5000    
    let detectScammer = NL*(No*Po)/(MPo*50);

    return detectScammer === 0 ? 0 : 1;
}

app.listen(3001)
