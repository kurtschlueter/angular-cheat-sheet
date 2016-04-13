// AngularJS modules define AngularJS applications.
// The module is a container for the different parts of an application.
// The module is a container for the application controllers.
var app1 = angular.module('myApp1', []);

app1.run(function($rootScope) {
    $rootScope.color = 'blue';
});

// Let's break this down...
  // var app1 = angular.module('myApp1', []);
    // angular.module => calls the AngularJS function module
    // The "myApp1" parameter refers to an HTML element in which the application will run.

// AngularJS controllers control AngularJS applications.
// Controllers always belong to a module.
app1.controller('myCtrl1', function($scope) {

// SCOPE

  // In AngularJS, $scope is the application object (the owner of application variables and functions).

  // The scope is the binding part between the HTML (view) and the JavaScript (controller) and is available in both the view and the controller.

    // Binding works both ways, you change the value inside the input field, the AngularJS property will also change it's value. So in the html file, <input type="text" ng-model="firstName"> is linked to $scope.firstName. If the value gets changed here or in the view, it changes everywhere.
    $scope.firstName= "John";
    $scope.lastName= "Doe";
    $scope.myCol= "lightblue";
    $scope.quantity= 10;
    $scope.cost= 5.50;
    $scope.names =[
                  {name:'T',country:'USA'},
                  {name:'K',country:'Chile'}];
    $scope.color = 'red'
});

// The ng-app directive defines the application, the ng-controller directive defines the controller. Lets go look in the div to see this.

// When naming a directive, you must use a camel case name, testDirective, but when invoking it, you must use - separated name, test-directive:
app1.directive("testDirective", function() {
    return {

        // You can restrict your directives to only be invoked by some of the methods. E for Element name, A for Attribute, C for Class, M for Comment
        restrict : "ECM",
        template : "<h1>Made by a directive!</h1>"
    };
});

// We could create our own filters in this manner as well.
app1.filter('addAlexis', function() {
    return function(input) {
        var output = input + " Alexis";
        return output;
    };
});

app1.controller('myCtrl2', function($scope) {
    $scope.names =[
                  {name:'Tiffany',country:'USA'},
                  {name:'Kurt',country:'Chile'},
                  {name:'Sabri',country:'Algeria'},
                  {name:'Ray',country:'A land down under'}];
    $scope.quantity= 10;
    $scope.cost= 5.50;

  // This function also owned in the scope. I can call on it in the view and in the controller. All this does is take a string input (x) and returns that same string but assigned to myOrderBy controller scope variable.
  $scope.orderByMe = function(x) {
    $scope.myOrderBy = x;
  }
});

