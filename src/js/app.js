'use strict';

angular.module('App',['main']);

angular.module('main',[]);

 angular.module('main').controller('mainController',function($scope){
    // Controller body
    $scope.welcome = 'This is just the beginning.';
    $('.wizard').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        centerMode: true,
        variableWidth: true
    });
});

