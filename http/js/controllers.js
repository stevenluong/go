'use strict';

/* Controllers */

var rssReaderControllers = angular.module('rssReaderControllers', []);
rssReaderControllers.controller('GoCtrl', ['$scope','Sources','News',
		function($scope, Sources, News) {
			$scope.locations = [];
			for(var i=1;i<=19;i++){
				for(var j=1;j<=19;j++){
					var location = {};
					location.x = i;
					location.y = j;
					location.id = location.x + "-"+location.y;
					location.color = "E";
					$scope.locations.push(location);
				}
			}	
			$scope.changeColor = function(location){
				console.log(location);
				//TODO change according to move color
				if(location.color=="E"){
					location.color="W";
				}
				else if(location.color=="W"){
					location.color="B";
				}
				else if(location.color=="B"){
					location.color="E";
				}

			}
			/*
			Sources.getSources().success(function(response){
				$scope.checkboxModel=[];
				$scope.sources=[];
				response.forEach(function(source){
					$scope.checkboxModel[source.name]= source.display;
					$scope.sources.push(source);
				});
			});

			$scope.news = [];
			$scope.orderProp= "date";
			News.getLastNews().success(function(response){
				response.forEach(function(item){
					var news = {};
					news.date = item.date;
					news.source= item.source;
					news.img= item.image;
					news.title= item.title;
					news.link= item.title;
					$scope.news.push(news);
				})
			});
			*/
		}]);

