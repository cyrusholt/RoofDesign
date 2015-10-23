var app = angular.module('roofApp');

app.controller('invoice-Ctrl', function($scope, newInvoiceService, $location){
$scope.remove = function(row) {
   var index = $scope.gridOptions.data.indexOf(row.entity);
   $scope.gridOptions.data.splice(index, 1);
 }
$scope.calculateFinalCost = function() {
	if ($scope.person) {
		$scope.person.finalCost = 0;
		if ($scope.person.cost1) $scope.person.finalCost += Number($scope.person.cost1);
		if ($scope.person.cost2) $scope.person.finalCost += Number($scope.person.cost2);
		if ($scope.person.cost3) $scope.person.finalCost += Number($scope.person.cost3);
		if ($scope.person.cost4) $scope.person.finalCost += Number($scope.person.cost4);
	}
}	
	$scope.users= [];

$scope.addUser = function(person){
	console.log(person);
	newInvoiceService.addUser(person).then(function(){
		$scope.getUsers();
    $location.path( "/invoice" );
	})
}

$scope.getUsers = function() {
   newInvoiceService.getUsers().then(function(res) {
     for (var i = 0; i < res.data.length; i++) {
       var newInvoice = {
         firstName: res.data[i].firstName,
         lastName: res.data[i].lastName,
         company: res.data[i].company,
         date: res.data[i].date,
         invoiceNum: res.data[i].invoiceNum,
         address: res.data[i].address,
         state: res.data[i].state,
         zip: res.data[i].zip,
         homePhone: res.data[i].homePhone,
         workPhone: res.data[i].workPhone,
		     email: res.data[i].email,
		     fax: res.data[i].fax,
		     labor1: res.data[i].labor1,
		     cost1: res.data[i].cost1,
         labor2: res.data[i].labor2,
		     cost2: res.data[i].cost2,
         labor3: res.data[i].labor3,
		     cost3: res.data[i].cost3,
         labor4: res.data[i].labor4,
		     cost4: res.data[i].cost4,
		     finalCost: res.data[i].finalCost,
        //  removeButton: "<input type='submit' ng-click='remove($index)' value='Remove' />"
       }
       $scope.users.push(newInvoice)
     }
     console.log($scope.users);
   });


 };
 $scope.getUsers();

$scope.gridOptions = {
  data: $scope.users,
  columnDefs: [
    {name: "firstName", field: "firstName"},
    {name: "lastName", field: "lastName"},
    {name: "company", field: "company"},
    {name: "invoiceNum", field: "invoiceNum"},
    {name: "address", field: "address"},
    {name: "homePhone", field: "homePhone"},
    {name: "workPhone", field: "workPhone"},
    {name: "email", field: "email"},
    {name: "remove", cellTemplate: "<input type='submit' ng-click='remvove($index)' value='Remove'>"}
  ]
 }
 console.log($scope.users);

});

