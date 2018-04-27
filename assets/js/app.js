window.onload=function(){
  smoothScrollInit();
}
var hamburger = document.querySelector('.hamburger-icon');

hamburger.onclick=function(){
  var nav = document.querySelector('.main-nav');
  var lang = document.querySelector('.language-picker');
  var bar = document.getElementsByClassName('bar');
  nav.classList.toggle('js-remove-top-position');
  lang.classList.toggle('js-remove-top-position');
  var i;
  for (i = 0; i< bar.length; i++){
    bar[i].classList.toggle('open');
  }
};
var pagePosition = document.pageYOffset;

function smoothScrollInit(){
  var smoothScrollLinks = document.querySelectorAll('.smoothscrolllink');
  for(var i=0; i<smoothScrollLinks.length; i++){
    smoothScrollLinks[i].addEventListener("click", function(event){
      event.preventDefault();
      var cleanedLink = event.target.innerText.replace(/[\W_]/g,'').toLowerCase();

      var link = document.querySelector("#" + cleanedLink + "");
      var linkDistance = link.offsetTop;
  
      window.scrollTo({
          top: linkDistance,
          behavior: "smooth"
      });
    });

  }
}



// var btn = document.querySelector('.btn');
// btn.onmouseover=function(){
//   var arrow = document.querySelector('.arrow');
//   arrow.classList.add('js-arrow-grow');
//   window.setTimeout(function(){
//     arrow.classList.remove('js-arrow-grow');
//   },3000);
//
// };
