(function($){
  $(function(){

    $('#burger').sideNav({
    	menuWidth: 400,
    	edge: 'right'
    });

    window_size = $(window).height();
	$('#left_collection').height(window_size);
	// $('.row').height(window_size);

  }); // end of document ready
})(jQuery); // end of jQuery name space