(function(){


angular.module('ShoppingListCheckOff',[])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.items = ShoppingListCheckOffService.getToBuyItems();

  toBuy.buyItem = function (itemName, itemQuantity, itemIndex) {
    ShoppingListCheckOffService.addItem(itemName, itemQuantity);
    ShoppingListCheckOffService.removeItem(itemIndex);
  }
}

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var bought = this;

  bought.items = ShoppingListCheckOffService.getBoughtItems();
}




function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyItems = [
  {name: "Cookies", quantity: 10},
  {name: "Milk", quantity: 3},
  {name: "Bread", quantity: 6},
  {name: "Honey", quantity: 5},
  {name: "Juice", quantity: 2}];
  var boughtItems = [];

  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    boughtItems.push(item);
  };

  service.removeItem = function (itemIdex) {
    toBuyItems.splice(itemIdex, 1);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };
  service.getBoughtItems = function () {
    return boughtItems;
  };
}
	

})();