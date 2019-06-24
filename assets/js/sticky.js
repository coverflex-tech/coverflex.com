
// sticky.js
//
// Controlls sticky bar on home page

const bar = document.querySelector('.top-bar'),
      scrollTarget = document.querySelector('.problems').offsetTop;

window.addEventListener('scroll', (e) => {  
  window.scrollY >= (scrollTarget + 100) ? showBar() : hideBar();
});

function showBar() {
  bar.classList.add('visible');
}

function hideBar() {
  bar.classList.remove('visible');
}