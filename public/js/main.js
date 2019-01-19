// slider buttons
$( ".hover-btn" ).hover( 
	function() {
		$(this).attr("src", "images/prev-hover.svg");
		$(this).css("cursor", "pointer");
	}, function() {
		$(this).attr("src", "images/prev.svg");
	}
);

// hover gallery
$( ".images-bg" ).hover( 
	function() {
		$(this).find(".images-cell").css("opacity", ".5");
		$(this).append("<div class='cross-icon'></div>")
	}, function() {
		$(this).find(".cross-icon").remove("");
		$(this).find(".images-cell").css("opacity", "1");
	}
);


// nav-menu
$('.menu-btn').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('menu-btn_active');
  $('.nav-modal').toggleClass('active');
});

