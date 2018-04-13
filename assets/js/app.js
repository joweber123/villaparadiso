var el = document.querySelector('.hamburger-icon');
var nav = document.querySelector('.main-nav');
var lang = document.querySelector('.language-picker');

el.onclick=function(){
  nav.classList.toggle('js-remove-top-position');
  lang.classList.toggle('js-remove-top-position');
};
