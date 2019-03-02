'use strict';
// Declare app level module which depends on views, and core components
const myApp =  angular.module('myApp', [
    'ngRoute'
]);


myApp.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.when('/', {
        title: 'Home',
        templateUrl: 'view/home/home.html',
        //controller: 'HomeController'
    });

    $routeProvider.when('/otherView', {
        title: 'otherView',
        templateUrl: 'view/otherView/otherView.html',
    });


    $routeProvider.otherwise({redirectTo: '/'});
}]);

myApp.directive('appFooter', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'view/shared/footer/footer.html',
        controller: function(){
            this.date = Date.now();
            this.dateFormat = 'yyyy'
        },
        controllerAs:'footer'
    };
});

myApp.directive('appHeader', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'view/shared/header/header.html',
    };
});



myApp.run(['$rootScope', function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);
