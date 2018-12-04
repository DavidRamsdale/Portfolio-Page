// Menu Toggle
function toogleNavListOpen () {
    let navlist = document.getElementById("nav-list");
    navlist.classList.toggle("open");
}

document.getElementById("hamburger").addEventListener("click", toogleNavListOpen);

let navlistitems = document.querySelectorAll("#nav-list li");
navlistitems.forEach(item => item.addEventListener("click", toogleNavListOpen));

//Scrolling effect

$window.on("scroll", function(){
    if($window).scrollTop()) {
        $("nav").addClass('black');
    } 
    else{
        $("nav").removeClass('black');
    }
})