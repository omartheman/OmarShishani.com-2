let OS_on;
function runslide_O() {
  $('.OS-O').delay(1500).fadeOut(1500).fadeIn(1500);
};
function runslide_S() {
  $('.OS-S').fadeOut(1500).fadeIn(1500);
};
$('.OS_css_container_div').on('mouseenter', function() {
	runslide_S();
	runslide_O();
});

document.onload = runslide_O_load(), runslide_S_load();
function runslide_O_load() {
  $('.OS-O').fadeIn(2000);
};
function runslide_S_load() {
  $('.OS-S').delay(1500).fadeIn(2000);
};