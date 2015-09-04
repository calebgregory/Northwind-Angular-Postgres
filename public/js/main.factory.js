'use strict';

angular.module('Northwind').factory('Add', function ($http, $location, $rootScope) {
	return {

		addBundle: function addBundle(data) {
			console.log('DATA COMING IN FROM ADD FORM');
			console.log(data);
			return $http.post('/api/bundle', data).success(function (data) {
				console.log('DATA RETURNED BY ENDPOINT');
				console.log(data);
			}).error(function () {
				console.log('no dice on the scrape');
			});
		},

		addStory: function addStory(data) {
			console.log('DATA COMING IN FROM ADD STORY FORM');
			console.log(data);
			return $http.post('/api/story', data).success(function (data) {
				console.log('DATA RETURNED BY ENDPOINT');
				console.log(data);
			}).error(function () {
				console.log('Error, story not added');
			});
		}

	};
}).factory('Bundles', function ($http, $location, $resource) {
	return {
		getAll: function getAll() {
			return $resource('/api/bundle');
		},

		deleteOne: function deleteOne() {
			return $resource('/api/bundle/:id', { id: '@id' });
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9qcy9tYWluLmZhY3RvcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUUxQixPQUFPLENBQUMsS0FBSyxFQUFFLFVBQVMsS0FBSyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUU7QUFDdEQsUUFBTzs7QUFFTixXQUFTLEVBQUUsbUJBQVMsSUFBSSxFQUFFO0FBQ3pCLFVBQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQTtBQUMzQyxVQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ2pCLFVBQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQ3BDLE9BQU8sQ0FBQyxVQUFTLElBQUksRUFBRTtBQUN2QixXQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUE7QUFDeEMsV0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNqQixDQUFDLENBQ0QsS0FBSyxDQUFDLFlBQVc7QUFDakIsV0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO0lBQ3BDLENBQUMsQ0FBQztHQUNKOztBQUVELFVBQVEsRUFBRSxrQkFBUyxJQUFJLEVBQUU7QUFDeEIsVUFBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFBO0FBQ2pELFVBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDakIsVUFBTyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FDbkMsT0FBTyxDQUFDLFVBQVMsSUFBSSxFQUFFO0FBQ3ZCLFdBQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQTtBQUN4QyxXQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ2pCLENBQUMsQ0FDRCxLQUFLLENBQUMsWUFBVztBQUNqQixXQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUE7SUFDckMsQ0FBQyxDQUFDO0dBQ0o7O0VBRUQsQ0FBQTtDQUNELENBQUMsQ0FFRCxPQUFPLENBQUMsU0FBUyxFQUFFLFVBQVMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUU7QUFDeEQsUUFBTztBQUNOLFFBQU0sRUFBRSxrQkFBVztBQUNsQixVQUFPLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQTtHQUMvQjs7QUFHRCxXQUFTLEVBQUUscUJBQVc7QUFDckIsVUFBTyxTQUFTLENBQUMsaUJBQWlCLEVBQUUsRUFBQyxFQUFFLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQTtHQUNoRDtFQUNELENBQUE7Q0FDRixDQUFDLENBQUEiLCJmaWxlIjoic3JjL2pzL21haW4uZmFjdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdOb3J0aHdpbmQnKVxuXG4uZmFjdG9yeSgnQWRkJywgZnVuY3Rpb24oJGh0dHAsICRsb2NhdGlvbiwgJHJvb3RTY29wZSkge1xuXHRyZXR1cm4ge1xuXG5cdFx0YWRkQnVuZGxlOiBmdW5jdGlvbihkYXRhKSB7IFxuXHRcdFx0Y29uc29sZS5sb2coJ0RBVEEgQ09NSU5HIElOIEZST00gQUREIEZPUk0nKVxuXHRcdFx0Y29uc29sZS5sb2coZGF0YSlcblx0XHRcdHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL2J1bmRsZScsIGRhdGEpXG5cdFx0XHRcdC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnREFUQSBSRVRVUk5FRCBCWSBFTkRQT0lOVCcpXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSlcblx0XHRcdFx0fSlcblx0XHRcdFx0LmVycm9yKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdubyBkaWNlIG9uIHRoZSBzY3JhcGUnKVxuXHRcdFx0XHR9KTtcblx0XHR9LFxuXG5cdFx0YWRkU3Rvcnk6IGZ1bmN0aW9uKGRhdGEpIHsgXG5cdFx0XHRjb25zb2xlLmxvZygnREFUQSBDT01JTkcgSU4gRlJPTSBBREQgU1RPUlkgRk9STScpXG5cdFx0XHRjb25zb2xlLmxvZyhkYXRhKVxuXHRcdFx0cmV0dXJuICRodHRwLnBvc3QoJy9hcGkvc3RvcnknLCBkYXRhKVxuXHRcdFx0XHQuc3VjY2VzcyhmdW5jdGlvbihkYXRhKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ0RBVEEgUkVUVVJORUQgQlkgRU5EUE9JTlQnKVxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5lcnJvcihmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnRXJyb3IsIHN0b3J5IG5vdCBhZGRlZCcpXG5cdFx0XHRcdH0pO1xuXHRcdH1cblxuXHR9XG59KVxuXG4uZmFjdG9yeSgnQnVuZGxlcycsIGZ1bmN0aW9uKCRodHRwLCAkbG9jYXRpb24sICRyZXNvdXJjZSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRnZXRBbGw6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gJHJlc291cmNlKCcvYXBpL2J1bmRsZScpXG5cdFx0XHR9LFxuXG5cblx0XHRcdGRlbGV0ZU9uZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiAkcmVzb3VyY2UoJy9hcGkvYnVuZGxlLzppZCcsIHtpZDogJ0BpZCd9KVxuXHRcdFx0fVxuXHRcdH1cbn0pXG5cbiJdfQ==
