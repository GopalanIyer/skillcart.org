var barIcon = document.querySelector(".fa-bars");
var timesIcon = document.querySelector(".fa-times");
var navList = document.querySelector(".navbar-nav");

barIcon.addEventListener("click",()=>{
    timesIcon.style.display="block";
    barIcon.style.display="none";
    navList.style.display ="block";
});

timesIcon.addEventListener('click',()=>{
    timesIcon.style.display="none";
    barIcon.style.display="block";
    navList.style.display ="none";
})