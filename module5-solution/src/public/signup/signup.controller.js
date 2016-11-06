(function() {
'use strict';

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject=['MenuService', 'SignUpService'];
function SignUpController(MenuService, SignUpService){
  var signUpController = this;
  signUpController.error_msg="";
  signUpController.save_msg="";
  signUpController.user = {
  firstname: "",
  lastname: "",
  phone: "",
  email: "",
  short_name: "",
  description: "",
  title: ""
  };

  signUpController.submit = function(){
    signUpController.error_msg="";
    signUpController.save_msg="";
    MenuService.getMenuItem(signUpController.user.short_name).then(function(response){
         signUpController.user.description=response.data.description;
         signUpController.user.title=response.data.name;
           SignUpService.saveUser(signUpController.user);
           signUpController.save_msg = "Your information has been saved";
    }).catch(function(error){
        signUpController.error_msg = "No such menu number exists";
    });
  }
}

})();
