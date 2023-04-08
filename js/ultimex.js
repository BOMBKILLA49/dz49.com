$(function() {
    "use strict";
	
    // Preloader
    $(window).on("load", function() {
        $("#preloader").fadeOut(600);
        $(".preloader-bg").delay(400).fadeOut(600);
    });
	
    // Lifting Control
    $(".navbar-collapse ul li a").on("click", function(e) {
        e.preventDefault();
        animateSlider(this.hash);
    });
	
    function animateSlider(hash) {
        if (!$("#containerOT div.open").length) {
            if (hash == "#about" || hash == "#services" || hash == "#works" || hash == "#news" || hash == "#contact") {
                openPopup(hash);
            }
        } else {
            if (hash == "#home") {
                openAndClose(hash);
                $("#overlay").fadeOut(600);
            }
            else if (hash == "#about" || hash == "#services" || hash == "#works" || hash == "#news" || hash == "#contact") {
                openAndClose(hash);
            }
        }
    }
	
    function openPopup(hash) {
        $(hash + "-lifting").slideToggle().addClass("open");
        $("#overlay").fadeIn(600);
    }
	
    function openAndClose(hash) {
        if ($(hash + "-lifting").hasClass("open")) {
            $($(hash + "-lifting")).slideToggle().removeClass();
            $("#overlay").fadeOut(600);
        } else {
            $("#containerOT div.open").slideToggle().removeClass();
            $(hash + "-lifting").slideToggle().addClass("open");
        }
    }
	
    $("#overlay").on("click", function() {
        $("#containerOT div.open").slideToggle().removeClass();
        $("#overlay").fadeOut(600);
    });
	
    // Mobile Menu Closer
    $(".navbar-collapse ul li a").on("click", function() {
        $(".navbar-toggle:visible").click();
    });
	
    // Owl Carousel
    // 4.1. Owl About Carousel
    $("#about-carousel").owlCarousel({
        loop: true,
        center: false,
        items: 1,
        margin: 20,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 4000,
        autoHeight: true,
        smartSpeed: 450,
        nav: true,
        navText: ["<i class='owl-custom ion-chevron-left'></i>", "<i class='owl-custom ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-about',
        autoplayHoverPause: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    // 4.2. Owl Services Carousel
    $("#services-carousel").owlCarousel({
        loop: true,
        center: false,
        items: 1,
        margin: 20,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 4000,
        autoHeight: true,
        smartSpeed: 450,
        nav: true,
        navText: ["<i class='owl-custom ion-chevron-left'></i>", "<i class='owl-custom ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-services',
        autoplayHoverPause: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000:
function printMessage(msg) {
  console.log(msg);
}

let num1 = 5;
let num2 = 10;

if (num1 < num2) {
  printMessage("num1 is less than num2");
} else if (num1 > num2) {
  printMessage("num1 is greater than num2");
} else {
  printMessage("num1 is equal to num2");
}
