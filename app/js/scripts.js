
/* ==========================================================================
   Javascript function library
   ========================================================================== */


/*
 * A series of simple JavaScript functions that toggle our top menus on and off.
 */

(function () {

  /* Variable declarations */
  var imageTop = document.getElementById('imageBox_top');
  var imageBottom = document.getElementById('imageBox_bottom');
  var burger = document.getElementById('topNav_burger');
  var linkList = document.getElementById('topNav_linkList');
  var shoppingCart = document.getElementById('topNav_shoppingCart');
  var buyList = document.getElementById('topNav_buyList');
  var openClass = 'linkList--open';
  var scrolltop;
  var mediaQuery = '(min-width: 768px)';

  /* Parallax function
     ========================================================================== */

  /* Cross-browser compatible requestAnimationFrame method */
  window.requestAnimationFrame = window.requestAnimationFrame
   || window.mozRequestAnimationFrame
   || window.webkitRequestAnimationFrame
   || window.msRequestAnimationFrame
   || function(f) {setTimeout(f, 1000/60)};

  /*
   * Simulate parallax by updating the images' y position everytime the
   * we scroll the website and the browser paints a new screen.
   *
   */
  function parallax() {
   scrolltop = window.pageYOffset;

   /* Adjust the background scroll formula depending on the viewport */
   if (window.matchMedia(mediaQuery).matches) {
      /* Viewport is over 768 pixels */
      imageTop.style.backgroundPosition = '0 ' + -scrolltop * .2 + 'px';
      imageBottom.style.backgroundPosition = '0 ' + (-scrolltop/4) * .6 + 'px';

   } else {
      /* Viewport is under 768 pixels, the formula changes slightly */
      imageTop.style.backgroundPosition = '0 ' + (-scrolltop) * .2 + 'px';
      imageBottom.style.backgroundPosition = '0 ' + (((-scrolltop/4) * .6)+300) + 'px';
    }
  }

  window.addEventListener('scroll', function() {
   /* Call the parallax function everytime the screen is painted */
   requestAnimationFrame(parallax);
 }, false);


  /* Menu animation function
    ========================================================================== */

  /* On click event for the burger icon */
  burger.onclick = function() {
    linkList.classList.toggle(openClass);
    isOpened(buyList);
  }

  /* On click event for the shopping cart icon */
  shoppingCart.onclick = function() {
    buyList.classList.toggle(openClass);
    isOpened(linkList);
  }

  /*
   * Close an open menu if we're clicking open another one.
   *
   * @param otherMenu - the other menu element that is being clicked.
   */
  function isOpened(otherMenu) {
    if (otherMenu.classList.contains(openClass)) {
      otherMenu.classList.toggle(openClass);
    }
  }

})();
