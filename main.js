document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    const links = document.querySelectorAll('.nav-links li a'); // Doorashada dhammaan link-iyada

    // Event listener-ka hamburger-ka
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        body.classList.toggle('no-scroll');
    });

    // Event listener-ka link-iyada
    links.forEach(link => {
        link.addEventListener('click', () => {
            // Ka saar 'active' class-ka si uu menu-gu u xirmo
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            body.classList.remove('no-scroll');
        });
    });
});
