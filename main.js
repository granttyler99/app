$(document).ready(function(event){

	$(".dropdown > a").on("click", function(event){
    event.preventDefault();
    event.stopPropagation();
    $(this).toggleClass("active");
    $(this).siblings(".dropdown-container").slideToggle("fast");
  });

  $(document).on("click", function(){
    $(".dropdown > a").removeClass("active");
    $(".dropdown-container").hide();
  });

	$('.nav-toggle').click(function(event){
		event.preventDefault();
		$(this).find('i').toggleClass('icon-cancel icon-menu');
		$('.nav').slideToggle().toggleClass('block');
  });
  
  $(window).on("scroll", function(){
		var offsetTop = $(this).scrollTop();
		if(offsetTop > 100){
			$(".goup").fadeIn(300);
		} else {
			$(".goup").fadeOut(300);
		}
  });
  
  $(document).on("click", ".goup", function(event){
		event.preventDefault();
		$("body, html").animate({scrollTop: 0}, 800);
	});

});