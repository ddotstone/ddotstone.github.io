
function changeColor(){
var header = document.getElementById('header');
var logo = document.getElementById('logo');
var navbar = document.getElementById('navbar');



var menu = document.getElementById('menu');
var scrollValue = window.scrollY;

if (scrollValue >= 5) {
    header.classList.add('active_nav');
    logo.classList.add('logo_scroll');
    navbar.classList.add('navbar_scroll');

} else {
    header.classList.remove('active_nav');
    logo.classList.remove('logo_scroll');
    navbar.classList.remove('navbar_scroll');

}
}

window.addEventListener('scroll', changeColor);