
"use strict";

      // Navbar color change

const nav = document.querySelector("nav");
window.addEventListener("scroll" , ()=>{
    let scrlTop = window.scrollY;
    if(scrlTop > 100){
        nav.classList.add("bgChange");
    }else{
        nav.classList.remove("bgChange");
    }
});

    // Navbar toggel

const ul = document.querySelector("ul");
const toggleBtn = document.querySelector(".toggleBtn");
toggleBtn.addEventListener("click" , ()=>{
    ul.classList.toggle("toggel");
});

   
        // Count No

$('.count').counterUp({
    delay: 5,
    time: 1500
});

        // Tours data

const Tours = [
    {   
        image:"nainital/tour1.jpg",
        name:"Paris",
        cost:"$1258.00",
        discount:"$1358.00",
        about:"Lorem ipsum dolor sit amet conse adipisicing elit. an  sunt."
    },
    {   
        image:"nainital/tour2.jpg",
        name:"France",
        cost:"$1640.00",
        discount:"$1840.00",
        about:"Lorem ipsum dolor sit amet conse adipisicing elit. an  sunt."
    },
    {   
        image:"nainital/tour3.jpg",
        name:"London",
        cost:"$1878.00",
        discount:"$1978.00",
        about:"Lorem ipsum dolor sit amet conse adipisicing elit. an  sunt."
    },
    {   
        image:"nainital/tour4.jpg",
        name:"Africa",
        cost:"$1166.00",
        discount:"$1266.00",
        about:"Lorem ipsum dolor sit amet conse adipisicing elit. an  sunt."
    },
    {   
        image:"nainital/tour5.jpg",
        name:"Taj India",
        cost:"$1710.00",
        discount:"$1810.00",
        about:"Lorem ipsum dolor sit amet conse adipisicing elit. an  sunt."
    },
    {   
        image:"nainital/tour6.jpg",
        name:"Rajasthan India",
        cost:"$1799.00",
        discount:"$1890.00",
        about:"Lorem ipsum dolor sit amet conse adipisicing elit. an  sunt."
    },
    {   
        image:"nainital/tour7.jpg",
        name:"Switezerland",
        cost:"$1578.00",
        discount:"$1678.00",
        about:"Lorem ipsum dolor sit amet conse adipisicing elit. an  sunt."
    },
    {   
        image:"nainital/tour8.jpg",
        name:"Switezerland",
        cost:"$1550.00",
        discount:"$1650.00",
        about:"Lorem ipsum dolor sit amet conse adipisicing elit. an  sunt."
    },
    {   
        image:"nainital/tour9.jpg",
        name:"Indian Temples",
        cost:"$2036.00",
        discount:"$2136.00",
        about:"Lorem ipsum dolor sit amet conse adipisicing elit. an  sunt."
    }

];

let allTour = document.querySelector(".allTours");
const toursData = ()=>{
    let data = Tours.map((all)=>{

        return`
        <div class="col-md-6 col-lg-4 col-12 gy-4">
        <div class="tourExplore">
            <div class="tourImg">
                <img src=${all.image} alt="an imagetourImg" class="img-fluid">
            </div>
            <div class="tourContent mt-3">
                <h4 class="tourName">${all.name}</h4>
                <h5><span class="tourCost">${all.cost}</span>  <span class="tourLine">${all.discount}</span></h5>
                <p class="tourText">${all.about}</p>
            </div>
        </div>
    </div>
     `; 
    });

    data = data.join("");
    allTour.innerHTML = data;
};

toursData();



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
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
