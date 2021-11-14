const navToggle=document.querySelector(".nav-toggle")
const mobileLogo=document.querySelector(".mobile-logo")
const lapNavBar=document.querySelector(".nav-lap-header")
const sideBar=document.querySelector(".sidebar")
navToggle.addEventListener("click",showSideBar)
mobileLogo.addEventListener("click",showSideBar)
function showSideBar(){
navToggle.lastElementChild.classList.toggle("hind-toggle-last-line")
sideBar.classList.toggle("show-sidebar")
}
window.addEventListener("scroll",function(){
    lapLogo.classList.toggle("sticky-logo", window.scrollY >0)
    lapNavBar.classList.toggle("sticky", window.scrollY >30)
})
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
   lapNavBar.style.top = "0";
  } else {
    lapNavBar.style.top = "-300px";
  }
  prevScrollpos = currentScrollPos;
}
let isDown = false;
let startX;
let scrollLeft;
const slider = document.querySelector('.items');

const end = () => {
	isDown = false;
  slider.classList.remove('active');
}

const start = (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;	
}

const move = (e) => {
	if(!isDown) return;

  e.preventDefault();
  const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  const dist = (x - startX);
  slider.scrollLeft = scrollLeft - dist;
}

(() => {
	slider.addEventListener('mousedown', start);
	slider.addEventListener('touchstart', start);

	slider.addEventListener('mousemove', move);
	slider.addEventListener('touchmove', move);

	slider.addEventListener('mouseleave', end);
	slider.addEventListener('mouseup', end);
	slider.addEventListener('touchend', end);
})();
