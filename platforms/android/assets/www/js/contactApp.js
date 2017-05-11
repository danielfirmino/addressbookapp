var app = angular.module('contactApp', []);
app.directive("formContact", function () {
    return {
        templateUrl: "formContact.html"
    };
});
app.directive("listContact", function () {
    return {
        templateUrl: "listContact.html"
    };
});
app.controller('contactCtrl', function ($scope, $http) {
    $scope.myContacts = [];
    $scope.indexContact = -1;
    $scope.urlContactAPI = "https://jsonplaceholder.typicode.com/users";// API for test, it doesn't access a Data Base.
    $scope.editContact = function (contactParam, indexContactParam) {
        $scope.contact = contactParam;
        $scope.indexContact = indexContactParam;
    };
    $scope.closeModal = function () {
        $(function () {
            $('#modalContact').modal('toggle');
        });
    };
    $scope.newContact = function () {
        $scope.contact = { id: null, name: "", email: "", phone: "" };
        $('#modalContact').modal('toggle');

    };
    $scope.saveContact = function () {

        var dataContact = { id: $scope.contact.id, name: $scope.contact.name, email: $scope.contact.email, phone: $scope.contact.phone };
        $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
        if (dataContact.id == null) {
            $http.post($scope.urlContactAPI, $.param(dataContact)).then(function (resp) {         
                swal({ title: "Success!", text: "Your contact has been created.", type: "success" });
          
                dataContact.id = $scope.myContacts.length + 1; //remove if you are using and API connect with a DB
                $scope.myContacts.push(dataContact);
            }, function (response) {
              swal({ title: "Fail on insert!", text: "Fail!! :( Status:" + response.status, type: "error" })
               
            });
        }
        else {
            $http.post($scope.urlContactAPI + "/" + $scope.contact.id, $.param({ dataContact })).then(function (resp) {
                swal({ title: "Success!", text: "Your contact has been updated.", type: "success" })
                  
            }, function (response) {
                swal({ title: "Fail on update!", text: "Fail!! :( Status:" + response.status, type: "error" });
            });

        }
        $('#modalContact').modal('toggle');
    };

    $scope.deleteContact = function () {        
        swal({
            title: "Delete",
            text: "You will delete " + $scope.contact.Name + " from your contact list. Are you sure?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            closeOnConfirm: false
        },
        function () {
            $http.delete($scope.urlContactAPI + $scope.contact.id).then(function (resp) {                
               // $scope.myContacts.splice($scope.indexContact, 1);
                swal({ title: "Delete!", text: "Your contact has been deleted.", type: "success" });
                
            }, function (response) {               
                $scope.myContacts.splice($scope.indexContact,1);//for test
                swal({ title: "Fail on delete!", text: "Fail!! :( Status:" + response.status, type: "error" });
               
            });

        });
        $('#modalContact').modal('toggle');

    };

    $scope.loadAllContacts = function () {
        $http.get($scope.urlContactAPI).then(function (response) {
            $scope.myContacts = response.data;  
            
        });
    };


    $scope.loadAllContacts();


});
