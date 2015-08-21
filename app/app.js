(function(){
	'use strict';

	angular.module('MessageBoard', ['ngroute','Controllers','config']).

	config(['$routeProvider',function($routeProvider){
		var route ={templateUrl: 'messages/post.html', controller: 'MessageController'};
		$routeProvider.when('/post-message', route);

	}])
})