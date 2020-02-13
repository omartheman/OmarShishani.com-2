let OS_on;
function runslide() {
    if (OS_on === true) {
      $('.OS-S').fadeIn(1500).fadeOut(1500,
      function() {
        runslide();
	    });
      $('.OS-O').delay(1500).fadeOut(1500).fadeIn(1500, function() {
        runslide();
	    });
    }
    else {
    	$('.OS-S').fadeIn(1500).delay(0);
    	$('.OS-O').fadeIn(1500).delay(0);
    	return;
    }
};

$('.OS_css_container_div').on('mouseenter', function() {
	OS_on = true;
	runslide();
});
$('.OS_css_container_div').on('mouseleave', function() {
	OS_on = false;
});

// $('.OS-S').hover(function() {
//     $(this).fadeTo("slow", 0);
//     $(this).fadeTo("slow", 1);
// 	}, 

// );