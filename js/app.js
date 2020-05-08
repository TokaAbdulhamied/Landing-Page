// global variables 

const navbar = document.getElementsByClassName("navbar__menu"); 
const menu = document.getElementById("navbar__list"); 
const sections = document.querySelectorAll('section'); 
len = sections.length;

// build navbar 

for ( section of sections ){
    let newItem = document.createElement("li");
    newItem.innerHTML =
    `<a href="#${section.id}" class="menu__link">${section.getAttribute("data-nav")}</a>` ; 
    menu.appendChild(newItem);
}

// viewport function detection 

function isInViewPort (){
    for (let i = 0; i < len; i++) {
        let bounding = sections[i].getBoundingClientRect();
        if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= window.innerWidth && bounding.bottom <= window.innerHeight) {
            isActive(sections[i].getAttribute("id")) ;
        } 
    }         
}

// active funtion 

function isActive (item){
    let menuLink = document.getElementsByClassName("menu__link");
    for (let i = 0; i < len; i++) {
        if(menuLink[i].getAttribute("href")==`#${item}`){
            menuLink[i].classList.add("active-item");
            sections[i].classList.add("your-active-class");
        }    
        else { 
            menuLink[i].classList.remove("active-item");
            sections[i].classList.remove("your-active-class");
        }    
    }
}

window.addEventListener("scroll" , isInViewPort);
