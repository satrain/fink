// navigation on scroll effect
const header = document.querySelector("header")
const upperHeader = document.querySelector(".upper-header")

// header navigation
const headerNav = document.querySelector("header nav")

let prevScrollpos = window.pageYOffset;
window.addEventListener("scroll", function () {
    let currentScrollPos = window.pageYOffset;
    if (currentScrollPos < 50) {
        headerNav.style.display = "block"
        header.style.height = "180px"
        header.style.paddingTop = "10px"
        header.style.paddingBottom = "31px"
        header.style.background = "transparent"
    } else {
        headerNav.style.display = "none"
        header.style.height = "130px"
        header.style.paddingTop = "20px"
        header.style.paddingBottom = "20px"
        header.style.background = "rgba(0, 0, 0, .9)"
        header.style.transition = ".3s"
    }
    prevScrollpos = currentScrollPos;
})

var images = ["assets/images/centar-fink-hero-background-1.jpeg", "assets/images/centar-fink-hero-background-2.jpeg"]

$(function () {
    var i = 0;
    $(".hero").css("background-image", "url(" + images[i] + ")");
    setInterval(function () {
        i++;
        if (i == images.length) {
            i = 0;
        }
        $(".hero").fadeOut("slow", function () {
            $(this).css("background-image", "url(" + images[i] + ")");
            $(this).fadeIn("slow");
        });
    }, 5000);
});