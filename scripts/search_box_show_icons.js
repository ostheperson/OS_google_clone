let searchBox = document.querySelector('.search-bar');
let input = document.querySelector('input[type="text"]');
let searchIcon = document.querySelector('.search-bar-icons--search');
let micIcon = document.querySelector('.search-bar-icons--mic');

searchBox.addEventListener('mouseover', showIcons)
input.addEventListener('mouseleave', hideIcons)

function showIcons() {
    searchIcon.classList.add('icons-animated');
    micIcon.classList.add('icons-animated')
}

function hideIcons() {
    searchIcon.classList.remove('icons-animated');
    micIcon.classList.remove('icons-animated');
}