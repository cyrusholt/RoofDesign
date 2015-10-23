var Invoice = require('../models/NewInvoice');

module.exports = {
	
	create: function(req, res){
		console.log("hit" + req.body)
		Invoice.create(req.body, function(err, result){
			if (err) {
				console.log(err)
				return res.status(500).send(err);
			}
			res.json(result);
		});
	},
	
	read: function(req, res){
		Invoice.find().exec(function(err, result){
			if (err) return res.status(500).send(err);
			res.json(result);
		});
	},
	
	
	show: function(req, res){
		Invoice.find().exec(function(err, result){
			if (err) return res.status(500).send(err);
			res.json(result);
		});
	},
	
	remove: function(req, res){
		Invoice.remove().exec(function(err, result){
			if (err) return res.status(500).send(err);
			res.json(result);
		});
	},
}
// 	remove: function(req, res){
//     Product.findByIdAndRemove(req.params.id, function(err, suc) {
//       if (err) return res.status(500).send(err);
//       else return res.send(suc);
//     })
//   }