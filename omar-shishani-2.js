let OS_on;
let fadeCompleted = false;
function runslide_O() {
  $('.OS-O').delay(1500).fadeOut(1500).fadeIn(1500, function(){
  	fadeCompleted = true; 
  });
};
function runslide_S() {
	fadeCompleted = false;
  $('.OS-S').fadeOut(1500).fadeIn(1500);
};
function runslide_both() {
	if (fadeCompleted === true) {
	runslide_S();
	runslide_O();
	}
	else {
		return;
	}
}
$('.OS_css_container_div').on('mouseenter', runslide_both);
$('.OS_css_container_div').on('click', runslide_both);

document.onload = runslide_O_load(), runslide_S_load();
function runslide_O_load() {
  $('.OS-O').fadeIn(2000);
};
function runslide_S_load() {
  $('.OS-S').delay(1500).fadeIn(2000, function(){
  	fadeCompleted = true;
  });
};

$('#navbar-hamburger').on('click', function(){
	$('#mobile-navigation-main-content').slideToggle();
});
//Create a navbar that pops up when you click the hamburger. Probably just want to use rowdy's navbar and give it functionality. 