// Menu Toggle
function toogleNavListOpen () {
    let navlist = document.getElementById("nav-list");
    navlist.classList.toggle("open");
}

document.getElementById("hamburger").addEventListener("click", toogleNavListOpen);

let navlistitems = document.querySelectorAll("#nav-list li");
navlistitems.forEach(item => item.addEventListener("click", toogleNavListOpen));

//Scrolling effect

// document.getElementById("nav-list").classList.toggle("black")
// $(window).on("scroll", function() {
//     if($(window).scrollTop()) {
//           $('nav').addClass('black');
//     }

//     else {
//           $('nav').removeClass('black');
//     }
// })

function emailFunction() {
    const el = document.createElement('textarea');
    el.value = "davidramsdale1991@gmail.com";
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert("Copied to clipboard: davidramsdale1991@gmail.com");
}

let email = document.getElementById("email-button").addEventListener("click", emailFunction)
