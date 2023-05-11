let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector('.navbar-bg').style.top = '0';
  } else {
    document.querySelector('.navbar-bg').style.top = '-100%';
  }
  prevScrollpos = currentScrollPos;
}
