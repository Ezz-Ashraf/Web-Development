//creating canvas variable
let thecanvas = document.getElementById("can"),
//creating context
thecontext = thecanvas.getContext('2d'),
w = thecanvas.clientWidth,
h =thecanvas.height;
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

//set font
thecontext.font = "30px tahoma";
//chart making
thecontext.fillStyle = "orange";
thecontext.fillRect (50,25,60,h-25);
thecontext.fillStyle = "white";
thecontext.fillText ("1",70,h-20);
thecontext.fillText ("95%",50,h-50);
//chart making
thecontext.fillStyle = "purple";
thecontext.fillRect (150,30,60,h-30);
thecontext.fillStyle = "white";
thecontext.fillText ("2",170,h-20);
thecontext.fillText ("90%",150,h-50);
//chart making
thecontext.fillStyle = "blue";
thecontext.fillRect (250,50,60,h-50);
thecontext.fillStyle = "white";
thecontext.fillText ("3",270,h-20);
thecontext.fillText ("75%",250,h-50);
//chart making
thecontext.fillStyle = "black";
thecontext.fillRect (350,100,60,h-100);
thecontext.fillStyle = "white";
thecontext.fillText ("4",370,h-20);
thecontext.fillText ("60%",350,h-50);
//chart making
thecontext.fillStyle = "pink";
thecontext.fillRect (450,150,60,h-150);
thecontext.fillStyle = "white";
thecontext.fillText ("5",470,h-20);
thecontext.fillText ("50%",450,h-50);
//chart making
thecontext.fillStyle = "green";
thecontext.fillRect (550,200,60,h-200);
thecontext.fillStyle = "white";
thecontext.fillText ("6",570,h-20);
thecontext.fillText ("33%",550,h-50);