burgerMenu = document.querySelector('.burger-menu');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list');
rightNav = document.querySelector('.right-nav');

burgerMenu.addEventListener('click', function () {
    navList.classList.toggle('visibility-class-responsive');
    rightNav.classList.toggle('visibility-class-responsive');
    navbar.classList.toggle('nav-height-responsive');
});