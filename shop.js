const navToggle=document.querySelector(".nav-toggle")
const mobileLogo=document.querySelector(".mobile-logo")
const lapNavBar=document.querySelector(".nav-lap-header")
const sideBar=document.querySelector(".sidebar")
const sidebarTabs =document.querySelectorAll('[data-tab-target]')
const sidebarContents=document.querySelectorAll('[data-tab-content]')
navToggle.addEventListener("click",showSideBar)
mobileLogo.addEventListener("click",showSideBar)
function showSideBar(){
navToggle.lastElementChild.classList.toggle("hind-toggle-last-line")
sideBar.classList.toggle("show-sidebar")
}
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
sidebarTabs.forEach(tab=>{
  tab.addEventListener("click",()=>{
    const target=document.querySelector(tab.dataset.tabTarget)
    sidebarContents.forEach(tabContent=>{
      tabContent.classList.remove("active")
    })
    sidebarTabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
    window.scrollTo(0,0)
  })
})