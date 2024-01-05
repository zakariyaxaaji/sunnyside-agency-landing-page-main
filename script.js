const hamburger =  document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobileNav');
console.log(hamburger)

hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});

// Close the mobileNav when the window is resized to a width greater than 900px
window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
        mobileNav.classList.remove('active');
    }
});