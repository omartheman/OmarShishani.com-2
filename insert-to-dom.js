const sidebar = String.raw`
<aside class="sidebar">
  <div class="os-v2-container">
    <a class="sidebar__link sidebar__link--home" href="index.html">
      <svg class="os-v2-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 48" height="48mm" width="75mm">
        <path class="s-plain" d="M66.21 18.326c6.386.824 6.763 4.935 6.772 7.428v13.649c-.563 4.867-3.649 6.296-6.763 6.628h-29.92c6.444-3.336 9.927-7.608 11.911-12.352h13.595c3.106-.138 2.755-4.405-.007-4.412H49.446c2.426-7.987-.96-21.887-12.706-26.823h31.5c7.181.686 6.388 10.998.001 11.559H56.593c-1.98.018-2.725 3.889 0 4.323z" fill="#818181" stroke="#000" stroke-width="1.058"/><path class="o-plain" d="M24.696 1.67A22.362 22.362 0 002.334 24.03a22.362 22.362 0 0022.362 22.363A22.362 22.362 0 0047.057 24.03 22.362 22.362 0 0024.696 1.669zm.168 18.589a3.618 3.618 0 013.617 3.617 3.618 3.618 0 01-3.617 3.618 3.618 3.618 0 01-3.618-3.618 3.618 3.618 0 013.618-3.617z" fill="#fe0000" stroke="#000" stroke-width="1.058" stroke-linecap="round"/>
      </svg>
      <div class="sidebar__link sidebar__link--home sidebar__link--home-div">
        Home
      </div>
    </a>
  </div> <!-- <div class="os-v2-container"> -->

  <a class="sidebar__link sidebar__link--animations" href="animations.html">
    <svg class="sidebar__button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.458 26.458" height="100" width="100">
      <g transform="translate(0 -270.542)"><circle r="12.548" cy="283.817" cx="13.245" stroke="#000" stroke-width=".864" stroke-linecap="round" fill="none"/><path class="star-big-upper-right" d="M15.38 281.58c2.176-1.054 1.979-3.528 2.77-5.543.697 2.267.792 4.638 2.77 5.543-2.459 1.781-1.998 3.311-2.77 5.543-.838-2.703-.285-4.14-2.77-5.543z" fill="#fc0" fill-opacity=".834" stroke="#000" stroke-width=".249"/><path class="star-big-lower" d="M13.69 285.324c-.446 1.821-.214 2.768-2.303 4.254 2.21 1.487 1.508 2.515 2.303 4.253.893-1.778.458-3.253 2.303-4.253-2.09-1.327-1.727-2.557-2.303-4.254z" fill="#ff0080" stroke="#000" stroke-width=".249"/><path class="star-small-lower-left" d="M6.95 287.107c.803-.388.73-1.3 1.021-2.043.258.835.293 1.71 1.022 2.043-.907.657-.737 1.221-1.022 2.044-.308-.996-.104-1.526-1.02-2.044z" fill="#f0f" fill-opacity=".451" stroke="#000" stroke-width=".249"/><path class="star-small-upper-right" d="M13.79 275.74c.803-.389.73-1.301 1.022-2.044.257.836.292 1.71 1.02 2.044-.905.656-.736 1.22-1.02 2.043-.31-.996-.105-1.526-1.022-2.043z" fill="#f0f" fill-opacity=".451" stroke="#000" stroke-width=".249"/><path class="star-small-lower-right" d="M18.103 288.952c.667-.323.607-1.082.85-1.7.213.695.242 1.422.85 1.7-.755.546-.614 1.016-.85 1.7-.258-.829-.088-1.27-.85-1.7z" fill="#ff0052" stroke="#000" stroke-width=".249"/><path class="star-small-upper-left" d="M5.189 280.293c-.192.712-.107 1.05-1.104 1.637 1.155.618.753.982 1.104 1.636.44-.693.258-1.282 1.104-1.636-1.002-.51-.828-.984-1.104-1.637z" fill="#fc0" fill-opacity=".834" stroke="#000" stroke-width=".249"/></g><path class="star-big-upper-left" d="M12.464 9.06c-1.539-1.184-1.642-2.847-2.147-4.376C9.95 6.54 9.423 8.214 8.17 9.06c1.597.966 1.481 2.89 2.147 4.376.702-1.462.48-3.141 2.147-4.376z" fill="#ff0052" stroke="#000" stroke-width=".249"/>
    </svg>
    <div>
      Animations
    </div>
  </a>	

	<a class="sidebar__link sidebar__link--vid" href="articles">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.458 26.458" height="100" width="100"><circle r="12.548" cy="283.817" cx="13.245" stroke="#000" stroke-width=".864" stroke-linecap="round" fill="none" transform="translate(0 -270.542)"/><rect ry="2.442" y="5.086" x="7.01" height="16.379" width="12.472" fill="#fff" stroke="#000" stroke-width=".486" stroke-linecap="round"/><g stroke="#000"><rect ry=".651" y="8.903" x="8.603" height="3.581" width="5.047" fill="#0072ff" fill-opacity=".897" stroke-width=".531" stroke-linecap="round"/><path d="M8.886 14.525c.278-.135.45-.296.76-.163.115.05.223.207.38.163.147-.042.18-.277.325-.326.155-.052.275.222.325.271.083.084.253.182.38.109.079-.045.09-.165.163-.217.021-.015.323-.092.38-.054.075.05.099.153.163.217.126.126.205.133.38.108.241-.034.36-.258.596-.325.285-.082.086.059.217.217.095.113.314.155.435.054.062-.052.045-.167.108-.217.042-.034.11-.008.163 0 .074.01.16.006.217.054.062.052.051.16.108.217.103.103.258.157.38.054.07-.057.109-.144.163-.217M15.614 14.525c.109-.036.213-.128.326-.109.053.01-.038.125 0 .163.111.111.356-.153.38-.163.298-.128.032.167.38.109.064-.011.054-.127.108-.163.204-.136.2-.026.38 0 .072.01.145 0 .217 0" fill="none" stroke-width=".304" stroke-linecap="round"/><path d="M8.797 15.936c.118-.019.237-.03.353-.055.127-.026.272-.119.413-.054.035.016-.033.089 0 .109.049.03.118 0 .177 0 .078 0 .167.035.235 0 .214-.113.091-.331.413-.272.043.008.02.09.059.109.052.024.118 0 .176 0 .079 0 .16.02.236 0 .05-.013.41-.272.413-.272.059 0-.033.118 0 .163.054.075.16.104.235.163.177.14.146.233.413.163.068-.018.115-.076.177-.109.206-.108.404-.195.648-.162a.53.53 0 01.177.054c.137.072.225.237.412.163.452-.179.018-.152.472-.272.249-.065.146.074.412.109.066.008.396-.154.413-.163.061-.032.106-.12.176-.109.083.013.113.114.177.163.065.05.343.208.413.217.061.008.117-.038.176-.054.078-.02.16-.028.236-.054.082-.029.151-.087.236-.109.056-.015.118 0 .177 0 .058 0 .12-.015.176 0 .24.063.207.178.472.109.265-.07.08-.196.412-.109.068.018.209.05.177.109-.035.064-.157 0-.236 0" fill="none" stroke-width=".317" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.8 9.594c.055-.109.077-.24.163-.326.039-.038.109 0 .163 0h.163c.072 0 .15-.028.217 0 .07.03.1.119.163.163.077.055.319.185.434.109.153-.102.027-.368.325-.326.076.011.1.118.163.163.066.047.151.061.217.108.21.15.105.203.38.272.07.017.157.04.217 0 .098-.065.096-.32.217-.38.272-.136.217.03.217.163M14.909 10.964c.108-.09.196-.214.326-.272.052-.023.11.032.162.055.075.032.147.068.217.108.057.033.099.118.163.109.14-.02.374-.42.597-.272.16.107.011.375.326.217.058-.029.05-.133.108-.162.148-.074.249.035.38.054.072.01.145 0 .217 0 .054 0 .11-.015.163 0 .078.022.145.072.217.108M15.01 12.467c.079-.155.073-.271.272-.271.075 0 .143.044.217.054.054.008.113-.021.163 0 .083.036.13.138.217.163.055.016.11-.032.163-.054.086-.037.32-.186.434-.163.04.008.026.08.054.108.048.049.33.21.38.218.13.018.306-.18.38-.218.135-.067.24-.054.38-.054" fill="none" stroke-width=".304" stroke-linecap="round"/><rect ry=".499" y="6.43" x="8.546" height="1.151" width="9.209" fill="#c700ff" stroke-width=".531" stroke-linecap="round"/><rect ry=".188" y="16.944" x="8.968" height=".883" width="8.442" fill="#00ff5f" stroke-width=".531" stroke-linejoin="round"/><rect ry=".109" y="18.765" x="8.984" height=".921" width="3.722" opacity=".99" fill="#ffac00" stroke-width=".531" stroke-linejoin="round"/><rect ry=".353" y="18.79" x="13.534" height=".883" width="3.837" fill="#ff0092" stroke-width=".531" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.674 9.876c.026.028-.144.318-.14.357.004.038.233.284.214.318-.02.033-.348-.04-.383-.024-.035.016-.199.31-.236.302-.038-.008-.07-.343-.096-.371-.026-.029-.356-.094-.36-.132-.004-.038.304-.172.323-.206.02-.033-.02-.367.014-.383.035-.015.258.236.296.244.037.008.343-.133.368-.105z" opacity=".99" fill="#ff00b7" stroke-width=".163" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.15 12.187v-.95s.617.352.608.314c-.01-.038-.608-.93-.608-.93l.532.227-.599-1.016-.484.94.541-.17-.588.93.55-.342" fill="#00ff30" fill-opacity=".897" stroke-width=".19" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
		<div>
			Articles
		</div>
	</a>

  <a class="sidebar__link sidebar__link--vid" href="videos.html">
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 26.458 26.458"><circle cx="13.245" cy="283.817" r="12.548" stroke="#000" stroke-width=".864" stroke-linecap="round" fill="none" transform="translate(0 -270.542)"/><g stroke="#000" stroke-linecap="round">
      <path class="sidebar__vid-rec" d="M7.976 7.046A2.537 2.537 0 005.434 9.59v7.373a2.537 2.537 0 002.542 2.542h10.54a2.537 2.537 0 002.542-2.542V9.589a2.537 2.537 0 00-2.543-2.543z" fill="#f90080" stroke-width=".46195667999999995"/>
      <path class="sidebar__vid-tri" d="M11.713 10.549c.859.03 4.64 2.152 4.65 2.664.01.546-4.2 3.083-4.678 2.819-.478-.265-.57-5.179-.102-5.46a.243.243 0 01.13-.023z" fill="#fff" stroke-width=".462"/></g>
    </svg>
    <div>
      Videos
    </div>
  </a>
</aside>
`;
const footer = String.raw`
<footer class="footer">
  <span><a href="https://www.linkedin.com/in/omar-shishani-school/" target="_blank">LinkedIn</a></span>
  <span><a href="https://www.instructables.com/member/omarshishanischool/" target="_blank">Instructables</a></span>
  <span><a href="https://github.com/crazy-hobo" target="_blank">Github</a></span>
</footer>
`;

const mobileNav = String.raw`
<div id="mobile-navigation-main-content">
  <!-- $ navbar elementet och mobile navigation kommer sist i HTML, för semantik $ -->
  <nav id="navbar-mobile">
    <a href="index.html">
      Home
    </a>
    <a href="animations.html">
      Animations
    </a>
    <a href="videos.html">
      Videos
    </a>
  </nav> <!-- <nav id="navbar-3"> -->
</div> <!-- <div id="mobile-navigation-main-content"> -->
<div id="navbar-hamburger"> 
  <div class="navbar-hamburger-bun"></div>
  <div class="navbar-hamburger-bun"></div>
  <div class="navbar-hamburger-bun"></div>
</div>
`;

document.querySelector('header').insertAdjacentHTML('afterend', sidebar);
document.querySelector('main').insertAdjacentHTML('afterend', footer);

const main = document.querySelector('main');
main.insertAdjacentHTML('beforeend', mobileNav);
