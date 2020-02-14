let OS_on;
let fadeCompleted = true;
function runslide_O() {
  $('.OS-O').delay(1500).fadeOut(1500).fadeIn(1500, function(){
  	fadeCompleted = true; 
  	console.log('fadeCompleted is true')
  });
};
function runslide_S() {
	fadeCompleted = false;
	console.log('fadeCompleted is false');
  $('.OS-S').fadeOut(1500).fadeIn(1500);
};
$('.OS_css_container_div').on('mouseenter', function() {
	if (fadeCompleted === true) {
	runslide_S();
	runslide_O();
	}

});

document.onload = runslide_O_load(), runslide_S_load();
function runslide_O_load() {
  $('.OS-O').fadeIn(2000);
};
function runslide_S_load() {
  $('.OS-S').delay(1500).fadeIn(2000);
};

//make an if else statement for the fade function. You can use booleans, and make it so, at the end of the O fadeIn, it changes a variable to true, so that the function only runs on mouse enter if the variable is true. 