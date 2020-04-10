<?php

  include "settings.php";
  $Instagram = new InstagramAPI($settings);
  
  class InstagramAPI {
     var $clientID = "" ;
     var $clientSecret = "";
     var $redirectURL = "";
     
     public function __construct($settings = array()) {
       $this->clientID = $settings['clientID'];
       $this->clientSecret = $settings['clientSecret'];
       $this->redirectURL = $settings['redirectURL'];
     }

     public function getLoginURL() {
      
       return "https://api.instagram.com/oauth/authorize
  ?client_id=.$this->clientID.
  &redirect_uri=.$this->redirectURL.
  &scope=user_profile,user_media
  &response_type=code"
     }
       


}
?>
