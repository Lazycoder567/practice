$("h1").css("color","red");

$(document).keypress(function(event){
	$("h1").text(event.key)
});


$("button").on("click", function(){
	$("h1").fadeToggle();
});

$(".big-title").on("click",function(){
	$("h1").animate({opacity:0.5})
});