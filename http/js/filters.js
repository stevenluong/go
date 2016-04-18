'use strict'

/* Filters */

angular.module('rssReaderFilters',[]).filter('sourcesFilter', function(){
	return function(news,scope){
		var filteredNews = []
		news.forEach(function(n){
			if(scope.checkboxModel[n.source]){
				filteredNews.push(n)
			}
		});
		return filteredNews;
	};
}).filter('rowFilter', function(){
	return function(locations,x){
		var filteredLocations = []
		locations.forEach(function(l){
			if(l.x==x){
				filteredLocations.push(l)
			}
		});
		return filteredLocations;
	};
}).filter('columnFilter', function(){
	return function(locations,y){
		var filteredLocations = []
		locations.forEach(function(l){
			if(l.y==y){
				filteredLocations.push(l)
			}
		});
		return filteredLocations;
	};
});
