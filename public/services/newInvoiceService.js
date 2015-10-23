var app = angular.module('roofApp');

app.service("newInvoiceService" , function($http){
	this.addUser = function(person){
		console.log(person)
		return $http({
			method: 'POST',
			url: 'http://localhost:9000/api/newinvoice',
			data: person
		})
	}
	
	this.getUsers = function(){
		return $http({
			method: 'GET',
			url: 'http://localhost:9000/api/getinvoice',
		})
	}
});