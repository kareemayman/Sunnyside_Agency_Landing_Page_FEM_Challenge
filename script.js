const mobileMenu = document.querySelector(".mobile-menu")
const arrowDown = document.querySelector("#arrow-down")
const header = document.querySelector("header")
const burgerIcon = document.querySelector("#burger")
const homeHeader = document.querySelector(".home > h1")

const aboutSection = document.getElementById('about')
const scrollToTopButton = document.querySelector('.scroll-to-top')

document.body.addEventListener('click', e => {

    // Hide menu if user clicks on anything else 
    if (!(e.target.matches(".mobile-menu")) && !(mobileMenu.classList.contains('invisible'))) {
        mobileMenu.classList.toggle('invisible')
        arrowDown.classList.toggle('invisible')
        homeHeader.classList.toggle('invisible')
        header.classList.toggle('show-before')
        burgerIcon.classList.toggle("opacity-change")
        return
    }

    // Show or hide menu
    if (e.target.matches("#burger") || e.target.matches(".mobile-link")) {
        mobileMenu.classList.toggle('invisible')
        arrowDown.classList.toggle('invisible')
        homeHeader.classList.toggle('invisible')
        header.classList.toggle('show-before')
        burgerIcon.classList.toggle("opacity-change")
    }
})

// Scroll-To-Top Event Listener
document.addEventListener('scroll', e => {

    let scrollPos = window.scrollY

    if (scrollPos >= (aboutSection.offsetTop - 50)) {
        scrollToTopButton.classList.remove('invisible')
    } else {
        scrollToTopButton.classList.add('invisible')
    }
})

// Scroll Button Click Event
scrollToTopButton.addEventListener('click', e => {

    window.scroll({
        top: 0,
        behavior: "smooth",
    })
})