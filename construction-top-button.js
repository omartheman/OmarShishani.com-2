let scroll_opa_default_2 = 0;
const button_top = document.querySelector(".navbar--contracting__button--back-to-top");
window.onscroll = function() {
	let currentScrollPos = window.pageYOffset;
	if (window.pageYOffset == 0) {

		
		let id = setInterval(frame_scroll_down, 5);
		function frame_scroll_down() {
			if(scroll_opa_default_2 >= 0) {
				scroll_opa_default_2 -= 0.005;
				button_top.style.opacity = scroll_opa_default_2;
			} else if (scroll_opa_default_2 <= 0) {
				clearInterval(id);
			}
		}
		frame_scroll_down();

		}
  else if (window.pageYOffset !== 0) {
    
		let id = setInterval(frame_scroll_zero, 5);
		function frame_scroll_zero() {
			if(scroll_opa_default_2 <= 1) {
				scroll_opa_default_2 += 0.005;
				button_top.style.opacity = scroll_opa_default_2;
			} else if (scroll_opa_default_2 >=1) {
				clearInterval(id);
			}
		}
		frame_scroll_zero();
  }
	prevScrollpos = currentScrollPos;
}