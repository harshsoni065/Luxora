document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const closeMenu = document.getElementById("close-menu");
    const mobileMenu = document.getElementById("mobile-menu");

    menuToggle.addEventListener("click", function () {
        mobileMenu.classList.add("active");
    });

    closeMenu.addEventListener("click", function () {
        mobileMenu.classList.remove("active");
    });
});

window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) { 
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    /* Brand Carousel */
    document.addEventListener("DOMContentLoaded", function () {
        const track = document.querySelector(".carousel-track");
        const images = [...track.children];
    
        // Clone each image and append to track
        images.forEach(image => {
            let clone = image.cloneNode(true);
            track.appendChild(clone);
        });
    });

    /* Mobile Scroll */
    document.addEventListener("DOMContentLoaded", function () {
        const mobileMenu = document.getElementById("mobile-menu");
        const openMenuBtn = document.querySelector(".hamburger-menu");
        const closeMenuBtn = document.getElementById("close-menu");
        const body = document.body;
        let scrollPosition = 0; // Store the scroll position
    
        // Function to disable scrolling & lock position
        function disableScroll() {
            scrollPosition = window.scrollY; // Save current scroll position
            body.style.position = "fixed";
            body.style.top = `-${scrollPosition}px`; // Keep the page at the same scroll position
            body.style.width = "100%";
        }
    
        // Function to enable scrolling & restore position
        function enableScroll() {
            body.style.position = "";
            body.style.top = "";
            window.scrollTo(0, scrollPosition); // Restore the previous scroll position
        }
    
        // Open Menu
        openMenuBtn.addEventListener("click", function () {
            mobileMenu.classList.add("active");
            disableScroll(); // Lock scroll position
        });
    
        // Close Menu
        closeMenuBtn.addEventListener("click", function () {
            mobileMenu.classList.remove("active");
            enableScroll(); // Restore scroll position
        });
    });

    document.addEventListener("scroll", function () {
        let scrollPosition = window.scrollY;
        document.querySelector(".parallax-bg").style.transform = `translateY(${scrollPosition * 0.5}px)`;
    });
    