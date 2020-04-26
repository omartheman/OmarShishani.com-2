// // Scroll down button dissapears:
// const button_scroll_down = document.querySelector(".button--scroll-down");
// let scroll_opa_default = 1;
// let prevScrollpos = window.pageYOffset;
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
