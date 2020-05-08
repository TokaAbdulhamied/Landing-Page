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

// scrolling function 

function isInViewPort (item){
    let bounding = item.getBoundingClientRect();
    if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= window.innerWidth && bounding.bottom <= window.innerHeight) {
        return 1;
    }
    else return 0;      
}
function Isactive (){
    for ( let i = 0; i < len; i++) {
        if(isInViewPort(sections[i])){
            sections[i].classList.add("my-active-class");
            menu.children[i].classList.add("my-active-menu");
        }
        if(!isInViewPort(sections[i])){
            sections[i].classList.remove("my-active-class");
            menu.children[i].classList.remove("my-active-menu");
        }
        
    }

}
window.addEventListener("scroll" , Isactive);
