document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.backgroundColor = '#575757';
            link.style.color = '#fff';
        });

        link.addEventListener('mouseout', () => {
            link.style.backgroundColor = '';
            link.style.color = '';
        });
    });
});
