(function(){
	var app = angular.module('myApp', ['ngRoute']);
	app.config(['$routeProvider', function($routeProvider){
                $routeProvider
                .when('/',{
						templateUrl:'view/main1.html'
					})
                .when('/computers',{templateUrl:'view/main2.html'})
                .when('/printers',{templateUrl:'view/main3.html'})
                .otherwise({redirectTo:'/'});
            }])
	
	function HomeController(){
		
	}



app.controller('myCtrl', function($scope,$http,$httpParamSerializer ) {
	
	$scope.carname = "user";
	$scope.search  = function() {
		var data={ "sites": [ { "Name": "张三", "sex": "男", "age": "12" },
							 { "Name": "李四", "sex": "男", "age": "13" }, 
							 { "Name": "王五", "sex": "女", "age": "14" }, 
							 { "Name": "赵六", "sex": "女", "age": "15" } ] };
		$scope.sites=data.sites;
		$scope.myVar = true;
	};
	$scope.toggle  = function() {
		  $scope.myVar = !$scope.myVar;
	};
});

app.directive('autoHeight',function ($window) {
	return {
		restrict : 'A',
		scope : {},
		link : function($scope, element, attrs) {
			var winowHeight = $window.innerHeight; //获取窗口高度
			var headerHeight = 80;
			var footerHeight = 80;
			element.css('min-height',
					(winowHeight - headerHeight - footerHeight) + 'px');          
		}

	};
});
})();