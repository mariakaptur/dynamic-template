'use strict';

var i;
var current;
var slides;

current = 0;
slides = document.getElementsByClassName("gallery-img");

setInterval(function() {
  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }
  current = (current != slides.length - 1) ? current + 1 : 0;
  slides[current].style.opacity = 1;
}, 4000);