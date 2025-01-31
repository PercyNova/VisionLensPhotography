document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuToggle = document.querySelector('.menu-toggle');

    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    // Preload hero images
    const heroImages = [
        '/assets/img/hero/hero1.png',
        '/assets/img/hero/hero2.png',
        '/assets/img/hero/hero3.png',
        '/assets/img/hero/hero4.png',
        '/assets/img/hero/hero5.png',
        '/assets/img/hero/hero6.png'
    ];

    function preloadImages(images) {
        images.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }

    preloadImages(heroImages);

    // Set initial background images for each slide
    const slides = document.querySelectorAll('.slide');
    heroImages.forEach((image, index) => {
        slides[index].style.backgroundImage = `url(${image})`;
    });
});