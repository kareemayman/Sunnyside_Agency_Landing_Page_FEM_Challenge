const mobileMenu = document.querySelector(".mobile-menu")
const arrowDown = document.querySelector("#arrow-down")
const header = document.querySelector("header")
const burgerIcon = document.querySelector("#burger")
const homeHeader = document.querySelector(".home > h1")

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