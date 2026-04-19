// mobile navbar enhancements and responsive functionality

function toggleNavbar() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('show');
}

window.addEventListener('resize', function() {
    const navbar = document.getElementById('navbar');
    if (window.innerWidth > 768) {
        navbar.classList.remove('show');
    }
});

document.getElementById('navbar-toggle').addEventListener('click', toggleNavbar);