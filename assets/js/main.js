const selectElement = (selector) => {
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error(`Something went wrong! Make sure that ${selector} exists/is typed correctly.`);  
};

//Nav styles on scroll
const scrollHeader = () =>{
    const navbarElement = selectElement('#header');
    if(this.scrollY >= 15) {
        navbarElement.classList.add('activated');
    } else {
        navbarElement.classList.remove('activated');
    }
}

window.addEventListener('scroll', scrollHeader);

// Open menu & search pop-up
const menuToggleIcon = selectElement('#menu-toggle-icon');
const formOpenBtn = selectElement('#search-icon');
const formCloseBtn = selectElement('#form-close-btn');
const searchContainer = selectElement('#search-form-container');

const toggleMenu = () =>{
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
}

menuToggleIcon.addEventListener('click', toggleMenu);

// Open/Close search form popup
formOpenBtn.addEventListener('click', () => searchContainer.classList.add('activated'));
formCloseBtn.addEventListener('click', () => searchContainer.classList.remove('activated'));
// -- Close the search form popup on ESC keypress
window.addEventListener('keyup', (event) => {
    if(event.key === 'Escape') searchContainer.classList.remove('activated');
});

// Switch theme/add to local storage
const body = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');
if (currentTheme) {
    body.classList.add('light-theme');
}

themeToggleBtn.addEventListener('click', function () {
    body.classList.toggle('light-theme');
    if (body.classList.contains('light-theme')) {
        localStorage.setItem('currentTheme', 'themeActive');
    } else {
        localStorage.removeItem('currentTheme');
    }
});

//Parallax
let bg = document.getElementById('bg');
let moon = document.getElementById('moon');
let mountain = document.getElementById('mountain');
let road = document.getElementById('road');
let text = document.getElementById('text');
window.addEventListener('scroll', () => {
    let value = window.scrollY;
    bg.style.top = value*0.5 + 'px';
    moon.style.left = -value*0.5 + 'px';
    mountain.style.top = -value*0.15 + 'px';
    road.style.top = value*0.15 + 'px';
    text.style.top = value + 'px';
})

// Swiper
const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination'
    },
    breakpoints: {
        700: {
          slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        }
    }   
});