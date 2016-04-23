$(document).ready(function(){
	$("#button").click(function() {
		var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?tags="
		+ $("#search").val() + "&tagmode=any&format=json&jsoncallback=?";
		$.getJSON( flickerAPI, {
			tagmode: "any",
			format: "json"
		})
		.done(function( data ) {
			$.each( data.items, function( i, item ) {
				$( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
				if ( i === 4 ) {
			        return false;
				}
	      	});
	    });
	});
});
