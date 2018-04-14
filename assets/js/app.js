var hamburger = document.querySelector('.hamburger-icon');
var nav = document.querySelector('.main-nav');
var lang = document.querySelector('.language-picker');
var bar = document.getElementsByClassName('bar');

hamburger.onclick=function(){
  nav.classList.toggle('js-remove-top-position');
  lang.classList.toggle('js-remove-top-position');
  var i;
  for (i = 0; i< bar.length; i++){
    bar[i].classList.toggle('open');
  }
};
