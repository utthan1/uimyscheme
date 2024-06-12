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

document.addEventListener('DOMContentLoaded', function() {
    const containers = document.querySelectorAll('.facet__value-container');

    containers.forEach(container => {
        const placeholder = container.querySelector('.facet__placeholder');
        const dropdownItems = container.querySelectorAll('.custom-dropdown-item');

        placeholder.addEventListener('click', function() {
            container.classList.toggle('open');
        });

        dropdownItems.forEach(item => {
            item.addEventListener('click', function() {
                placeholder.textContent = item.textContent;
                container.classList.remove('open');
            });
        });
    });

    document.addEventListener('click', function(event) {
        containers.forEach(container => {
            if (!container.contains(event.target)) {
                container.classList.remove('open');
            }
        });
    });

    
});

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.filter-button');

    sections.forEach(section => {
        const toggle = section.querySelector('.filter-toggle');
        const options = section.querySelector('.filter-options');

        toggle.addEventListener('click', function() {
            if (options.classList.contains('show')) {
                options.style.height = '0';
            } else {
                options.style.height = `${options.scrollHeight}px`;
            }
            options.classList.toggle('show');
        });
    });

    // Handle click outside to close dropdowns
    document.addEventListener('click', function(event) {
        sections.forEach(section => {
            const toggle = section.querySelector('.filter-toggle');
            const options = section.querySelector('.filter-options');
            if (!toggle.contains(event.target) && !options.contains(event.target)) {
                options.style.height = '0';
                options.classList.remove('show');
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('#details-page .nav-item');
    const sections = document.querySelectorAll('#details-page .nav-content');

    // Add click event to each nav item
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all nav items
            navItems.forEach(nav => nav.classList.remove('active'));
            // Add active class to the clicked nav item
            this.classList.add('active');

            // Scroll to the corresponding section
            const targetId = this.getAttribute('data-target');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });

            // Ensure the nav item is visible in the viewport
            const scrollContainer = this.closest('.overflow-x-auto');
            if (scrollContainer) {
                const offsetLeft = this.offsetLeft;
                scrollContainer.scrollTo({
                    left: offsetLeft - 20, // Adjust as necessary
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll event to window
    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 50 && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-target') === `#${current}`) {
                item.classList.add('active');
                // Ensure the nav item is visible in the viewport
                const scrollContainer = item.closest('.overflow-x-auto');
                if (scrollContainer) {
                    const offsetLeft = item.offsetLeft;
                    scrollContainer.scrollTo({
                        left: offsetLeft - 20, // Adjust as necessary
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});



