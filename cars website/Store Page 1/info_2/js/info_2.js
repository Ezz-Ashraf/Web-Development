var c1 = document.getElementById("can");
var circle1 = c1.getContext("2d");
var c2 = document.getElementById("can");
var circle2 = c2.getContext("2d");
var slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
//basic circle
circle2.beginPath();
circle2.arc(400, 150, 120, 0, 2 * Math.PI);
circle2.lineWidth =20;
circle2.strokeStyle = 'black';
circle2.stroke();
//drawn statistic
circle1.beginPath();
circle1.arc(400, 150, 120, 0, 1.5 * Math.PI);
circle1.lineWidth =20;
circle1.strokeStyle = 'red';
circle1.font = "30px tahoma";
circle1.fillText ("75%",380,150);
circle1.stroke();