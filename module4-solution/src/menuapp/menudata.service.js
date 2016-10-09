(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$q', '$http', 'ApiBasePath']
function MenuDataService($q, $http, ApiBasePath) {
  var service = this;

  service.getAllCategories = function(){
    var deferred = $q.defer();
    var  response =   $http({
        method: "GET",
        url: (ApiBasePath + "/categories.json")
      }).then(function (response) {
      var items = response.data;
      deferred.resolve(items);
    })
    return deferred.promise;
  };

  service.getItemsForCategory = function(categoryShortName){
  	var deferred = $q.defer();
    var  response =   $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json"),
        params: {
          category: categoryShortName
        }
      }).then(function (response) {
      var items = response.data.menu_items;
      deferred.resolve(items);
    })
    return deferred.promise;
  };

}

})();
