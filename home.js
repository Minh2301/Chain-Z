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
