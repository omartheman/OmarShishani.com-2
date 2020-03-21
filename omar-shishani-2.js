let fadeCompleted = false;
function runslide_O() {
  $('.o-plain').delay(1500).fadeOut(1500).fadeIn(1500, function(){
  	fadeCompleted = true; 
  });
};
function runslide_S() {
	fadeCompleted = false;
  $('.s-plain').fadeOut(1500).fadeIn(1500);
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
$('.os-v2-svg').on('mouseenter', runslide_both);
$('.os-v2-svg').on('click', runslide_both);

document.onload = runslide_O_load(), runslide_S_load();
function runslide_O_load() {
  $('.o-plain').fadeIn(2000);
};
function runslide_S_load() {
  $('.s-plain').delay(1500).fadeIn(2000, function(){
  	fadeCompleted = true;
  });
};

$('#navbar-hamburger').on('click', function(){
	$('#mobile-navigation-main-content').slideToggle();
});
//Create a navbar that pops up when you click the hamburger. Probably just want to use rowdy's navbar and give it functionality. 

// Scroll down button dissapears:
const button_scroll_down = document.querySelector(".button--scroll-down");
let scroll_opa_default = 1;
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
	let currentScrollPos = window.pageYOffset;
	if (window.pageYOffset == 0) {
		let id = setInterval(frame_scroll_zero, 5);
		function frame_scroll_zero() {
			if(scroll_opa_default <= 1) {
				scroll_opa_default += 0.005;
				button_scroll_down.style.opacity = scroll_opa_default;
			} else if (scroll_opa_default >=1) {
				clearInterval(id);
			}
		}
		frame_scroll_zero();
		}
  else if (window.pageYOffset !== 0) {
		let id = setInterval(frame_scroll_down, 5);
		function frame_scroll_down() {
			if(scroll_opa_default >= 0) {
				scroll_opa_default -= 0.005;
				button_scroll_down.style.opacity = scroll_opa_default;
			} else if (scroll_opa_default <= 0) {
				clearInterval(id);
			}
		}
		frame_scroll_down();
  }
	prevScrollpos = currentScrollPos;
}