'use strict';

/**
 * @ngdoc function
 * @name storeAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the storeAppApp
 */
angular.module('storeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.products = [
    	{ name: 'hammer',
    	  price: 23.95,
    	  image: 'Claw-hammer.jpg'
    	},
    	{ name: 'drill',
    	  price: 30.99,
    	  image: 'CordlessDrill.jpg'
    	},
    	{ name: 'wrench',
    	  price: 15.99,
    	  image: 'Adjustable_Wrench.jpg'
    	}
    ];
  });
    	
