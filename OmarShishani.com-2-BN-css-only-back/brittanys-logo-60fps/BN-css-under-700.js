
  function getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }

  function getHeight() {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.documentElement.clientHeight
    );
  }

  console.log('Width:  ' +  getWidth() );
  console.log('Height: ' + getHeight() );
  let browserWidth = getWidth();
  let browserHeight = getHeight();
  const htmlTag = document.querySelector('html');
  const BN_css_version_JS = String.raw(`
    <script src="BN.js"></script>
  `);
  const headTag = document.querySelector('head');
  const linkFullCSSAnimation = String.raw(`
  <link rel="stylesheet" type="text/css" href="BN-css-only.css">`);
  const linkJS_CSSAnimation = String.raw(`<link rel="stylesheet" type="text/css" href="BN.css">`)
  if (parseInt(browserWidth, 10) >= 700) {
    htmlTag.insertAdjacentHTML('beforeend', BN_css_version_JS);
    headTag.insertAdjacentHTML('beforeend', )
  else {
    headTag.insertAdjacentHTML('beforeend', linkFullCSSAnimation);
  }
  }
