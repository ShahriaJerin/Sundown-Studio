// SCROLLTRIGGER BASED NAHI HAI ISLIYE YE H
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// PAge3- hover imageanimation
function imageHover(){
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    
    elemC.addEventListener("mouseenter",function(){
        fixed.style.display = "block"
    })
    
    elemC.addEventListener("mouseleave",function(){
        fixed.style.display = "none"
    })
    
    fixed.addEventListener("mousemove",function(){
        fixed.style.display = "block"
    })
    
    /*Ab image ko fixed me dene ke liye*/
    
    var elems = document.querySelectorAll(".elem")
    elems.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            var image = elem.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}

imageHover();

function imagery(){
    var titles = document.querySelectorAll("#con-name h3")
    var imagery = document.querySelector("#content-right")
    var para = document.querySelector("#con-bot p")
    
    titles[0].style.color = "#fff"; 
    
    titles.forEach(function(title){
        title.addEventListener("click",function(){
            titles.forEach(t => t.style.color = "#8a8987");
            title.style.color = "#fff"
            titles.forEach(t => t.style.transform = "translateX(0%)");
            title.style.transform = "translateX(-10%)"
    
            var newImg = title.getAttribute("con-image")
            imagery.style.backgroundImage = `url(${newImg})`
    
            var newPara = title.getAttribute("con-data")
            para.textContent = `${newPara}`
        })
    })
}

imagery();

function swiperAnimation(){
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
  });   
}

swiperAnimation();

var menu = document.querySelector("nav h3")
var full = document.querySelector("#full-scr")
var navimg = document.querySelector("nav img")
var flag = 0
menu.addEventListener("click",function(){
    if(flag == 0){
        full.style.top=0
        navimg.style.opacity = 0
        flag = 1
    }
    else{
        full.style.top= "-100%"
        navimg.style.opacity = 1
        flag = 0
    }
})
