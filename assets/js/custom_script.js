document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-button');
    const body = document.body;

    const applyTheme = (theme) => {
        if (theme === 'dark-mode') {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    };

    const currentTheme = localStorage.getItem('theme') || 'light-mode';
    applyTheme(currentTheme);

    toggleButton.addEventListener('click', () => {
        const newTheme = body.classList.contains('dark-mode') ? 'light-mode' : 'dark-mode';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });

    
});
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const navbarToggler = document.querySelector('.navbar-toggler');

    const toggleFixedTopClass = () => {
        if (window.innerWidth < 992) { // Bootstrap's lg breakpoint is 992px
            navbar.classList.remove('fixed-top');
            navbar.classList.remove('shadow-lg');
            
        } else {
            navbar.classList.add('fixed-top ');
            navbar.classList.add('shadow-lg');

        }
    };

    window.addEventListener('resize', toggleFixedTopClass);
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    toggleFixedTopClass();

});
function toggleMenu() {
    const sideNavbar = document.getElementById('side-navbar');
    sideNavbar.classList.toggle('show');
}