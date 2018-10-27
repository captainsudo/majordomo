"use strict";

angular.module("App", ["main"]);

angular.module("main", []);

angular.module("main").controller("mainController", function($scope) {
  // Controller body
  $scope.welcome = "This is just the beginning.";
  var slick = jQuery(".wizard").slick({
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
     centerMode: true,
     //centerPadding: '500px',
    //variableWidth: true
    responsive: [
        {
          breakpoint: 1024,
          settings: {
           
          }
        },
        {
          breakpoint: 600,
          settings: {
            
          }
        },
        {
          breakpoint: 480,
          settings: {
         
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });
});

var nextSlide = function() {
  console.log("test click");
  jQuery(".wizard").slick("slickNext");
};
var prevSlide = function() {
    console.log("test click");
    jQuery(".wizard").slick("slickPrev");
  };

jQuery(".next-btn").click(function() {
  console.log("test click");
  jQuery(".wizard").slick("slickNext");
});
