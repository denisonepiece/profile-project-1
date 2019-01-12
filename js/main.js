$( "li" ).hover( 
	function() {
		$(this).css("color", "black");
		$( this ).find( ".line" ).css("background-color", "black");
	}, function() {
		$(this).css("color", "grey");
		$( this ).find( ".line" ).css("background-color", "white");
	}
);

$( ".hover-btn" ).hover( 
	function() {
		$(this).attr("src", "images/prev-hover.svg");
		$(this).css("cursor", "pointer");
	}, function() {
		$(this).attr("src", "images/prev.svg");

	}
);