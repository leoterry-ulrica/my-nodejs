
var express = require('express');
var utility = require('utility');

var app = express();

app.get('/test', function(req, res){

	var q = req.query.q;
	if (null == q) {
		res.send('no parameter q is found');
	}
	var md5Value = utility.md5(q);
	console.log('>>>q:'+q+", md5value:"+md5Value);
	res.send(md5Value);
});

app.listen(3000, function(req, res){
	console.log('app is running at port 3000');
});

