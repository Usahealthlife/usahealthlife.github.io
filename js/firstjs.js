$(document).ready(function(){
    $("#animate-button").click(function(){
      $("h1").css('color','blue','font-size','50px');

      $(".image-class").hover(function() {
        $(this).animate({
          width: "120%",  // increase the width by 20%
          height: "120%"  // increase the height by 20%
        }, "slow");
        $(this).css("border", "5px solid red");  // add a red border
      }, function() {
        $(this).animate({
          width: "100%",  // restore original width
          height: "100%"  // restore original height
        }, "slow");
        $(this).css("border", "none");  // remove the border
      });
    });
  });
