let OS_on;
function runslide() {
    if (OS_on === true) {
      $('.OS-S').fadeIn(1500).fadeOut(1500, function() {
          runslide();
	    });
      $('.OS-O').delay(1500).fadeOut(1500).delay(1000).fadeIn(1500, function() {
          runslide();
	    });
    }
    else {
    	$('.OS-S').fadeIn(1500).delay(0);
    	return;
    }
};

$('.OS-S').on('mouseenter',function() {
	OS_on = true;
	console.log(true);
	runslide();
});
$('.OS-S').on('mouseleave', function(){
	OS_on = false;
	console.log(OS_on)
});

// $('.OS-S').hover(function() {
//     $(this).fadeTo("slow", 0);
//     $(this).fadeTo("slow", 1);
// 	}, 

// );