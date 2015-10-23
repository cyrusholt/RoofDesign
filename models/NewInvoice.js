var mongoose = require('mongoose');

var schema = new mongoose.Schema ({
	firstName: { type: String, maxlength: 120, required: true },
	lastName: { type: String, maxlength: 120, required: true },
	company: { type: String, maxlength: 120 },
	invoiceNum: { type: Number, maxlength: 60, required: true },
	address: { type: String, maxlength: 120, required: true },
	zip: { type: Number, maxlength: 10, required: true },
	homePhone: { type: Number, maxlength: 10 },
	workPhone: { type: Number, maxlength: 60 },
	fax: { type: Number, maxlength: 60 },
	email: { type: String, maxlength: 120, required: true },
  	date: { type: Date, default: Date.now },
	labor1: { type: String, maxlength: 500, required: true },
	cost1: { type: Number, maxlength: 120, required: true },
	labor2: { type: String, maxlength: 500 },
	cost2: { type: Number, maxlength: 120 },
	labor3: { type: String, maxlength: 500 },
	cost3: { type: Number, maxlength: 120 },
	labor4: { type: String, maxlength: 500 },
	cost4: { type: Number, maxlength: 120 },
	finalCost: { type: Number, maxlength: 120 }
	
	  
});

module.exports = mongoose.model('Invoice', schema);