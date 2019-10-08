$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
          $("header").css("background" , "blue");
        }
  
        else{
            $("header").css("background" , "#333");  	
        }
    })
  })