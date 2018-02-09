const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// APP
const app = express();

app.get('/',function(req,res){
	var msg = "Hello Worl!!";
	res.send(msg);
	});

app.listen(PORT,HOST,function(){
	console.log(`Running on http://${HOST}:${PORT}`);
});


	