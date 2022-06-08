
function changeColor(){
var nav = document.getElementById('navbar');
var scrollValue = window.scrolly;

if (window.scrollValue >= 5) {
    nav.classList.add('active_nav');
} else {
    nav.classList.remove('active_nav');

}
}

window.addEventListener('scroll', changeColor);