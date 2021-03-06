'use strict';

angular.module('Northwind', ['ui.router', 'foundation', 'foundation.common', 'ngAnimate', 'ngCookies', 'ngResource', 'ngMessages', 'mm.foundation']).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
	$urlRouterProvider.when('', '/');
	$urlRouterProvider.otherwise('/landing');

	$locationProvider.html5Mode(true);

	$stateProvider.state('start', {
		abstract: true,
		templateUrl: 'assets/landing.html',
		controller: 'dashController',
		controllerAs: 'Ctrl'
	})

	// start.dash is the landing page of our app, it currently has two views
	// (triggered by the ui-views of the respective view name on landing)
	// as we want to create new data abstractions we can add views or other child states of
	// start (e.g., start.products)

	.state('start.dash', {
		url: '/landing',
		views: {
			'dash': {
				templateUrl: 'assets/dashboard.html'
			},
			'details': {
				templateUrl: 'assets/details.html'
			}
		}
	});

	// .state('add', {
	// 	url: '/add',
	// 	templateUrl: 'assets/addform.html',
	//    	controller: 'addFormController',
	//     controllerAs: 'addCtrl'
	// })
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9qcy9tYWluLmNvbmZpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsV0FBVyxFQUFDLFlBQVksRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FFbEosTUFBTSxDQUFDLFVBQVUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFO0FBQ3hFLG1CQUFrQixDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDakMsbUJBQWtCLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDOztBQUV6QyxrQkFBaUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRWxDLGVBQWMsQ0FFYixLQUFLLENBQUMsT0FBTyxFQUFFO0FBQ1osVUFBUSxFQUFFLElBQUk7QUFDZCxhQUFXLEVBQUUscUJBQXFCO0FBQ2xDLFlBQVUsRUFBRSxnQkFBZ0I7QUFDNUIsY0FBWSxFQUFFLE1BQU07RUFDckIsQ0FBQzs7Ozs7OztFQU9ILEtBQUssQ0FBQyxZQUFZLEVBQUU7QUFDcEIsS0FBRyxFQUFFLFVBQVU7QUFDWixPQUFLLEVBQUU7QUFDTCxTQUFNLEVBQUU7QUFDTixlQUFXLEVBQUUsdUJBQXVCO0lBQ3JDO0FBQ0QsWUFBUyxFQUFFO0FBQ1QsZUFBVyxFQUFFLHFCQUFxQjtJQUNuQztHQUNGO0VBQ0osQ0FBQyxDQUFBOzs7Ozs7OztDQVVGLENBQUMsQ0FBQSIsImZpbGUiOiJzcmMvanMvbWFpbi5jb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnTm9ydGh3aW5kJywgWyd1aS5yb3V0ZXInLCdmb3VuZGF0aW9uJywgJ2ZvdW5kYXRpb24uY29tbW9uJywgJ25nQW5pbWF0ZScsICduZ0Nvb2tpZXMnLCAnbmdSZXNvdXJjZScsICduZ01lc3NhZ2VzJywgJ21tLmZvdW5kYXRpb24nXSlcblxuLmNvbmZpZyhmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIpIHtcblx0JHVybFJvdXRlclByb3ZpZGVyLndoZW4oJycsICcvJyk7XG5cdCR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9sYW5kaW5nJyk7XG5cblx0JGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHRydWUpO1xuXG5cdCRzdGF0ZVByb3ZpZGVyXG5cblx0LnN0YXRlKCdzdGFydCcsIHtcblx0ICAgIGFic3RyYWN0OiB0cnVlLFxuXHQgICAgdGVtcGxhdGVVcmw6ICdhc3NldHMvbGFuZGluZy5odG1sJyxcblx0ICAgXHRjb250cm9sbGVyOiAnZGFzaENvbnRyb2xsZXInLFxuXHQgICAgY29udHJvbGxlckFzOiAnQ3RybCdcbiAgXHR9KVxuXG4gIFx0Ly8gc3RhcnQuZGFzaCBpcyB0aGUgbGFuZGluZyBwYWdlIG9mIG91ciBhcHAsIGl0IGN1cnJlbnRseSBoYXMgdHdvIHZpZXdzIFxuICBcdC8vICh0cmlnZ2VyZWQgYnkgdGhlIHVpLXZpZXdzIG9mIHRoZSByZXNwZWN0aXZlIHZpZXcgbmFtZSBvbiBsYW5kaW5nKVxuICBcdC8vIGFzIHdlIHdhbnQgdG8gY3JlYXRlIG5ldyBkYXRhIGFic3RyYWN0aW9ucyB3ZSBjYW4gYWRkIHZpZXdzIG9yIG90aGVyIGNoaWxkIHN0YXRlcyBvZiBcbiAgXHQvLyBzdGFydCAoZS5nLiwgc3RhcnQucHJvZHVjdHMpIFxuICBcdFxuXHQuc3RhdGUoJ3N0YXJ0LmRhc2gnLCB7XG5cdFx0dXJsOiAnL2xhbmRpbmcnLFxuXHQgICAgdmlld3M6IHtcblx0ICAgICAgJ2Rhc2gnOiB7XG5cdCAgICAgICAgdGVtcGxhdGVVcmw6ICdhc3NldHMvZGFzaGJvYXJkLmh0bWwnXG5cdCAgICAgIH0sXG5cdCAgICAgICdkZXRhaWxzJzoge1xuXHQgICAgICAgIHRlbXBsYXRlVXJsOiAnYXNzZXRzL2RldGFpbHMuaHRtbCdcblx0ICAgICAgfVxuXHQgICAgfVxuXHR9KVxuXG5cdC8vIC5zdGF0ZSgnYWRkJywge1xuXHQvLyBcdHVybDogJy9hZGQnLFxuXHQvLyBcdHRlbXBsYXRlVXJsOiAnYXNzZXRzL2FkZGZvcm0uaHRtbCcsXG5cdC8vICAgIFx0Y29udHJvbGxlcjogJ2FkZEZvcm1Db250cm9sbGVyJyxcblx0Ly8gICAgIGNvbnRyb2xsZXJBczogJ2FkZEN0cmwnXG5cdC8vIH0pXG5cblxufSlcblxuXG4iXX0=
