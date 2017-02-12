
$( () => {

	////////////////////////////////////////////////////////7
	// Lift topic menu up
	var topicAnimating = null;
	$( ".device-mockup .oneword li" ).hover( function() {
		var topic = $( this ).parents( ".topic" ),
				height = $( ".description", topic ).outerHeight()+10,
				isUp = topic.hasClass( "up");

		topicAnimating = topic.attr( "tid" );

		if( isUp ) {
			$( ".device-mockup .up" ).each( function() {
				if( $(this).attr( "tid") !== topicAnimating ) {
					$(this).stop().animate( {
						"margin-top": "40px",
					}, 300);
				}
			});

			topic.stop().animate( {
				"margin-top": -(height+40)+"px",
			}, 300);			

		} else {
			$( ".device-mockup .down" ).each( function() {
				if( $(this).attr( "tid") !== topicAnimating ) {
					$(this).stop().animate( {
						"margin-bottom": "40px",
					}, 300);
				}
			});

			topic.stop().animate( {
				"margin-bottom": "-"+(height+40)+"px",
			}, 300);						
		}

	}, null);

	////////////////////////////////////////////////////////7
	// Let topic menu slide back to where it was
	$( ".device-mockup .topic" ).hover( null, function() {
		$( ".device-mockup .up" ).stop().animate( {
			"margin-top": "0px",
		}, 300);

		$( ".device-mockup .down" ).stop().animate( {
			"margin-bottom": "0px",
		}, 300);
	});


	////////////////////////////////////////////////////////7
	// Correct right margins of all topic titles
	var lefts = [];

	$( "#just-for-width .topic" ).each( function() {
		var $this = $( this ),
				elem = $( ".oneword li", $this ),
				width = $( ".oneword li", $this ).outerWidth(),
				attr = $this.attr( "padding" ),
				padding = parseInt( $this.attr( "padding" ) );
		
		var a = $this.hasClass( "cr" );
		if( $this.hasClass( "cr" )) left = 0;
				
		lefts.push( left );
		left += width + padding;
	});

	$( "#just-for-width" ).remove();
	
	$( ".topic" ).each( function() {
		$( this ).css( "left", lefts.shift()+"px" );
	});

	console.assert( !lefts.length, "lefts array should be empty." )
});