const items = document.getElementById("items")
const toggle = document.getElementById("toggle")
const nav = document.getElementById("nav")
document.onclick=function(e){
  if(e.target.id !== "items" && e.target.id !== "toggle" && e.target.id !== "nav"){
    toggle.classList.remove("active")
      items.classList.remove("active")
      nav.classList.remove("active")
  }
}

toggle.onclick= function(){
  toggle.classList.toggle("active")
  items.classList.toggle("active")
  nav.classList.toggle("active")
}
window.addEventListener("scroll", function(){
  var sticky = document.querySelector("nav")
  sticky.classList.toggle("sticky", window.scrollY > 0)
})

const itemGalery = document.querySelectorAll(".imgGalleryBox")
itemGalery.forEach(item =>{
  item.addEventListener("mouseenter", ()=>{
    itemGalery.forEach(item => item.classList.remove("active"))
    item.classList.add("active")
  })
})
// progresupader
function updateProgerss (){
  const{scrollTop, scrollHeight}= document.documentElement
  const scrollProcent = `${scrollTop / (scrollHeight - window.innerHeight) * 100 + "%"}`
  const progressBar = document.getElementById("progres-bar")
  console.log(progressBar);
  progressBar.style.setProperty("--progres", scrollProcent)
}

document.addEventListener("scroll", updateProgerss)

const time = (document.getElementById("time").innerHTML = new Date ().getFullYear())