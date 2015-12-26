window.addEventListener( 'load', function(){

	// check if a style sheet is specified
	var name = location.hash.substr(1);
	// if present, dynamically append style sheet
	if( name.length > 0 ) {
		var link = document.createElement('link');
		// set attributes
		link.setAttribute( 'rel', 'stylesheet' );
		link.setAttribute( 'href', '_css/_users/'+name+'.css' );
		// append to body
		document.body.appendChild( link );
	}

});

// TODO:
// add an 'onhashchange' function
// to remove previous stylesheet
// and add the new one 