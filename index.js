document.addEventListener('DOMContentLoaded', function () {
    const projects = document.querySelectorAll('.swiper-slide');
    
    projects.forEach(project => {
        project.addEventListener('click', () => {
            project.classList.toggle('flipped');
        });
    });

    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });

    // Initialize Swiper
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
        },
    });
});
