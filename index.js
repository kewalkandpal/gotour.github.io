
"use strict";

      // Navbar color change

const navbars = document.querySelector(".navbars");
window.onscroll  = ()=>{
    let top = window.scrollY;
    if(top >= 200){
        navbars.classList.add("navClr");

    }else{
        navbars.classList.remove("navClr");
    }
};

    // Navbar toggel

const toggleBtn = document.querySelector(".toggleBtn");
const navbarLinks = document.querySelector(".navbarLinks");
toggleBtn.addEventListener("click" , ()=>{
    navbarLinks.classList.toggle("active");
});



$('.count').counterUp({
    delay: 5,
    time: 1500
});


            // Back to top btn 

const backToTop = document.querySelector(".backToTop");

window.addEventListener("scroll" , ()=>{
    let scrollTop = window.scrollY;
    if(scrollTop >= 200){
        backToTop.style.display = "block";
    }else{
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click" , ()=>{
    console.log("clicked");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
