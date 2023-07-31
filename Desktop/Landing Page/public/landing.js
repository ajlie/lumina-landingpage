window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


var body = document.body,
    canvas = document.getElementById('lumina');

function createStar() {
  var star = document.createElement('span');
  star.className = 'star';
  
  var width = canvas.scrollWidth,
      height = canvas.scrollHeight;
  
  star.style.left = Math.random() * width + 'px';
  star.style.top = Math.random() * height + 'px';
  
  star.style.width = star.style.height = 2 + Math.random() * 6 + 'px';
  
  var time = 5 + Math.random() * 10;
  
  star.style.animation = 'fade ' + time + 's'
  
  canvas.appendChild(star);
  
  setTimeout(function () {
    canvas.removeChild(star);
  }, 1000 * time);
  return star;
}

for (var i = 0; i < 50; i++) createStar();

setInterval(function () {
  for (var i = 0; i < 5; i++) createStar();
}, 250);