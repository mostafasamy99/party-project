$(" a").click(function(){
    let ourlink=$(this).attr("href");
  
    var ourOffset =$(ourlink).offset().top;
    $("body,html").animate({scrollTop:ourOffset},2000)
})



$(".navBar-box span").click(function(){
    var widthbox=$(".navBar-box").css("left")
    
    if(widthbox=="0px")
        {
            $(".navBar-box").animate({left:"-160px"},1000)
        }
    else
        {
        
         $(".navBar-box").animate({left:"0px"},1000)
        }
})




$(".one").css("display","block")

$(".MYaccordion h3").click(function(){
    
    $(this).next().slideToggle();
    $(".MYaccordion p").not($(this).next()).slideUp(1000)
})




var countDownDate = new Date("Apr 15, 2020 15:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
   
  var distance = countDownDate - now;
 
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
 /*   document.getElementById("timerDemo").innerHTML='<div class="timerDay">'+days+'d</div><div class="timerHours">'+hours+'h</div><div class="timerMin">'+minutes+'m</div><div class="timerSec">'+seconds+'s</div>'*/
    document.getElementById("day").innerHTML=days+"d";
    document.getElementById("hours").innerHTML=hours+"h";
    document.getElementById("min").innerHTML=minutes+"m";
    document.getElementById("sec").innerHTML=seconds+"s";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);




$(document).ready(function() {
        var max = 100;
        $('#feedback').html(max + 'characters remaining');

        $('#textarea').keyup(function() {
            var text_length = $('#textarea').val().length;
            var text_remaining = max - text_length;

            $('#feedback').html(text_remaining + ' characters remaining');
            if(text_remaining<0)
                {
                    $('#feedback').html('your available character finished')
                }
        });
    });
