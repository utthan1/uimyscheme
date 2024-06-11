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

function toggleMenu() {
    const sideNavbar = document.getElementById('side-navbar');
    sideNavbar.classList.toggle('show');
}

function autoSwitchTabs() {
    // Get all the side tabs
    const sideTabs = document.querySelectorAll('.side-tabs');
    // Get the index of the currently active tab
    const currentIndex = Array.from(sideTabs).findIndex(tab => tab.classList.contains('active'));
    // Calculate the index of the next tab
    const nextIndex = (currentIndex + 1) % sideTabs.length;
    // Remove the 'active' class from the current tab
    sideTabs[currentIndex].classList.remove('active');
    // Add the 'active' class to the next tab
    sideTabs[nextIndex].classList.add('active');
    // Scroll the page to the top of the next tab
    sideTabs[nextIndex].scrollIntoView({ behavior: 'smooth' });
}

// Call the autoSwitchTabs function every 5 seconds (5000 milliseconds)
setInterval(autoSwitchTabs, 5000);