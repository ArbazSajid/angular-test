(function() {
  'use strict';

  angular.module('public')
  .controller('InfoController', InfoController);

  InfoController.$inject=['SignUpService', 'ApiPath'];
  function InfoController(SignUpService, ApiPath){
    var info = this;
    info.basePath = ApiPath;
    info.msg="";
    info.user = SignUpService.getUser();
    if(info.user == null)
      info.msg = "Not Signed Up Yet";
    }
})();
