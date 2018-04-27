// @author: Oggo Petersen
const lighthouseApp = angular.module(`lighthouseApp`, [
  `ngRoute`
]);

lighthouseApp.config(['$routeProvider', '$locationProvider',
($routeProvider, $locationProvider) => {
  $routeProvider.
    when('/home', {
      template: require('./telas/home.html')
    }).
    otherwise({
      redirectTo: '/home'
    });
}]);
