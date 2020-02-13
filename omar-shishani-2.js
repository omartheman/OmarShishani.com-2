let OS_on;
function runslide_O() {
    if (OS_on === true) {
      $('.OS-O').delay(1500).fadeOut(1500).fadeIn(1500,
      function() {
        runslide_O();
	    });
	  }
    else {
    	$('.OS-S').fadeIn(1500);
    	$('.OS-O').fadeIn(1500);
    	return;
    }
};
function runslide_S() {
    if (OS_on === true) {
      $('.OS-S').fadeOut(1500).fadeIn(1500,
      function() {
        runslide_S();
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
	runslide_O();
	runslide_S();
});
$('.OS_css_container_div').on('mouseleave', function() {
	OS_on = false;
});

document.onload = runslide_O_load(), runslide_S_load();
function runslide_O_load() {
  $('.OS-O').delay(1500).fadeOut(1500).fadeIn(1500);
};
function runslide_S_load() {
  $('.OS-S').fadeOut(1500).fadeIn(1500);
};