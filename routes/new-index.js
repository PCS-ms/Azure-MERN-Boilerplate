
var express = require('express');
var router = express.Router();

var mongoClient = require('mongodb').MongoClient;
var mongoUrl = process.env.MONGO_URL;

router.get('/', (req, res, next) => {
	mongoClient.connect(mongoUrl, function(err, db) {
		if (err) throw err;
		var dbo = db.db("Main");
		dbo.collection("collection1").find({}).toArray(function(err, result) {
			if (err) throw err;
			console.log('Mongo data coming in hot')
    		console.log(result);
    		res.json(result)
    		db.close();
    	});
	}); 
});

module.exports = router;