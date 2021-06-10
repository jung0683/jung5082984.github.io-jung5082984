$("nav>ul>li").mouseenter(function(){
   $(this).children(".submenu").show(); 
});

$("nav>ul>li").mouseleave(function(){
   $(this).children(".submenu").hide();
});

setInterval(function(){
$(".slide").delay("2500");
$(".slide").animate({marginLeft:"-1000px"},"500")    

$(".slide").delay("2500");
$(".slide").animate({marginLeft:"-2000px"},"500") 

$(".slide").delay("2500");
$(".slide").animate({marginLeft:"0px"},"500") 

});

$(".gal-button").click(function(){
    $(".notice").hide();
    $(".gal").show();
 });
$(".not-button").click(function(){
    $(".gal").hide();
    $(".notice").show();
 });
