'use strict';

angular.module('App',['main']);

angular.module('main',[]);

 angular.module('main').controller('mainController',function($scope){
    // Controller body
    $scope.welcome = 'This is just the beginning.';
});

$('.wizard').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });