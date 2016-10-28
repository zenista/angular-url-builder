/*
* Url Builder : clone of google's url builder, written in angularjs
* @author zenista
* @email zenista@rocketmail.com
*/
var myApp = angular.module('MyApp', []);

// myApp.controller()
function UrlBuilderController($scope) {
 

 	var isStrEmpty = function(str) {
 		if( str && str.length > 0 )
 		{
 			return false;
 		}
 		else
 		{
 			return true;
 		}
 	}

	$scope.buildUrl = function() 
	{
		var items = [];
		
		// build array
		if(! isStrEmpty($scope.utc_source) )
		{
			items.push('utc_source='+$scope.utc_source);
		}
		
		if(! isStrEmpty($scope.utc_medium) )
		{
			items.push('utc_medium='+$scope.utc_medium);
		}
		 	
		if(! isStrEmpty($scope.utc_term) )
		{
			items.push('utc_term='+$scope.utc_term.replace(' ', '+'));
		}
		 
		if(! isStrEmpty($scope.utc_content) )
		{
			items.push('utc_content='+$scope.utc_content);
		}
		 	 
		if(! isStrEmpty($scope.utc_campaign) )
		{
			items.push('utc_campaign='+$scope.utc_campaign);
		}

		console.log('Items: ', items, $scope.utc_campaign);

		$scope.finalUrl = $scope.baseUrl + "?" + items.join('&');
		// $items = [];
	};


	$scope.reset = function() 
	{
		$scope.baseUrl = '';
		$scope.utc_source = '';
		$scope.utc_medium = '';
		$scope.utc_term = '';
		$scope.utc_content = '';
		$scope.utc_campaign = '';
		$scope.finalUrl = '';
	}
}