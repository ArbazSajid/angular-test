(function(){
'use strict';

angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController', NarrowItDownController)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.service('MenuSearchService',  MenuSearchService)
.directive('foundItems', FoundItems);


function FoundItems() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&'
    },
    controller: FoundItemsController,
    controllerAs: 'menu',
    bindToController: true
  };
  return ddo;
}

function FoundItemsController() {
  var menu = this;
}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;
  menu.items = [];

  menu.getItems = function(searchTerm){
    if(!!menu.searchTerm && menu.searchTerm.length>0){
      menu.items = MenuSearchService.getMatchedMenuItems(searchTerm);
      console.log(menu.items);
    }else{
      menu.items.length = 0;
    } 
  }

  menu.removeItem = function(index) {
    menu.items.splice(index, 1);
  };

}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function  MenuSearchService($http, ApiBasePath) {
  var service = this;
  var foundItems=[];
  service.getMatchedMenuItems = function(searchTerm){
      var response =  $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
      }).then(function (result) {
          // process result and only keep items that match
          foundItems.length = 0;
          for (var i = 0; i < result.data.menu_items.length; i++) {
            if ((result.data.menu_items[i].description.toLowerCase()).indexOf(searchTerm.toLowerCase()) !== -1) {
              foundItems.push(result.data.menu_items[i]);
            }
          }
          // return processed items
      });

      return foundItems;
  };
}
	

})();