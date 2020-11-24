jQuery(function() {

         $("#apple").hover(function(){
           $(this).css("background-color", "white");
           $(this).css("color", "#242526");
           $("#change").attr("src", "images/dark_apple_logo.png");
           }, function(){
           $(this).css("background-color", "transparent");
           $(this).css("color", "white");
           $("#change").attr("src", "images/apple_logo.png");
         });
});
