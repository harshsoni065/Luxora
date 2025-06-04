document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const logo = document.getElementById("logo");
    const cartIcon = document.getElementById("cart-icon");
    const header = document.querySelector(".desktop-header");
    const mobileHeader = document.querySelector(".mobile-header");
    const navLinks = document.querySelectorAll(".mobile-menu a"); // Mobile menu links

    // Function to check if the user is on a mobile device
    function isMobile() {
        return window.innerWidth <= 1024; // Adjust based on your design breakpoint
    }

    // Scroll event for adding scrolled class (Desktop & Mobile)
    function handleScroll() {
        if (!mobileMenu.classList.contains("open")) { 
            if (header) header.classList.toggle("scrolled", window.scrollY > 50);
            if (mobileHeader) mobileHeader.classList.toggle("scrolled", window.scrollY > 50);
        }
    }

    window.addEventListener("scroll", handleScroll);

    // Mobile Menu Toggle
    if (menuBtn) {
        menuBtn.addEventListener("click", () => {
            if (isMobile()) {
                const isOpen = mobileMenu.classList.contains("open");

                menuBtn.classList.toggle("active");
                mobileMenu.classList.toggle("open");
                logo.classList.toggle("hide");
                cartIcon.classList.toggle("hide");

                // Remove 'scrolled' class when the menu is open
                if (isOpen) {
                    handleScroll(); // Reapply scroll effect if needed
                } else {
                    if (mobileHeader) mobileHeader.classList.remove("scrolled");
                }
            }
        });
    }

    // Close mobile menu when clicking a link (Only for Mobile)
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            if (isMobile()) { 
                mobileMenu.classList.remove("open");
                menuBtn.classList.remove("active");
                logo.classList.remove("hide");
                cartIcon.classList.remove("hide");

                // Restore 'scrolled' class if needed
                handleScroll();
            }

            // Smooth scrolling for internal links
            if (link.getAttribute("href").startsWith("#")) {
                event.preventDefault();
                const sectionId = link.getAttribute("href").substring(1);
                const section = document.getElementById(sectionId);

                if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });

    // Ensure menu resets when resizing back to desktop
    window.addEventListener("resize", () => {
        if (!isMobile()) {
            mobileMenu.classList.remove("open");
            menuBtn.classList.remove("active");
            logo.classList.remove("hide");
            cartIcon.classList.remove("hide");

            // Restore 'scrolled' class if needed
            handleScroll();
        }
    });
});

// Video play functionality
document.addEventListener("DOMContentLoaded", () => {
    const playButton = document.getElementById("play-button");
    const video = document.getElementById("banner-video");

    if (playButton && video) {
        playButton.addEventListener("click", () => {
            playButton.style.display = "none"; // Hide play button
            video.style.display = "block"; // Show video
            video.play(); // Play video
        });
    }
});

// Blog fade in sliding animation on page scroll
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM Loaded");

    const blogSections = document.querySelectorAll(".blog-content, .why-pink, .latest-news, .main-banner, .blog_banner_main");

    blogSections.forEach((section, index) => {
        section.classList.add("fade-in");
    });

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add("show");
                    }, index * 150);

                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.3 }
    );

    blogSections.forEach(section => observer.observe(section));
});
