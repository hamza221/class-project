const burger=document.querySelector(".burger");
const burgerIcon=document.querySelector(".burger i");
const navbar=document.querySelector(".nav-wrapper");
const navbar1=document.querySelector(".navbar");
const container=document.querySelector(".container");
burger.addEventListener('click',()=>{
    navbar.classList.toggle("active");
    if(burgerIcon.classList.contains("bx-x")){
        burgerIcon.className="bx bx-menu";
        navbar1.style.height="10%";
        container.style.overflowY="visible";
    }
    else{
        burgerIcon.className="bx bx-x";
        navbar1.style.height="100%";
        container.style.overflowY="hidden";
        

    }
    
})