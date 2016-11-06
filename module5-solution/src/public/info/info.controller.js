(function() {
  'use strict';

  angular.module('public')
  .controller('InfoController', InfoController);

  InfoController.$inject=['MenuService', 'ApiPath'];
  function InfoController(MenuService, ApiPath){
    var info = this;
    info.basePath = ApiPath;
    info.msg="";
    info.user = MenuService.getUser();
    if(info.user == null)
      info.msg = "Not Signed Up Yet";
    }
})();
