const responsive_close_btn = () => {
    let nav_responsive_dropdown_container = document.querySelector('.nav_responsive_dropdown_container')
    nav_responsive_dropdown_container.style.display = 'none'
}

const responsive_close_open_check = () => {
    let nav_responsive_dropdown_container = document.querySelector('.nav_responsive_dropdown_container')
    nav_responsive_dropdown_container.style.display = 'grid'
}

let first_main_quick_virtual_teaching_first_carousel_container = document.getElementsByClassName('first_main_quick_virtual_teaching_first_carousel_container')

const first_carousel_display = () => {
    let i = 0
    for (i; i < first_main_quick_virtual_teaching_first_carousel_container.length; i++) {
        first_main_quick_virtual_teaching_first_carousel_container[i].style.display = 'none'
    }
    first_main_quick_virtual_teaching_first_carousel_container[0].style.display = 'grid'
}

const second_carousel_display = () => {
    let i = 0
    for (i; i < first_main_quick_virtual_teaching_first_carousel_container.length; i++) {
        first_main_quick_virtual_teaching_first_carousel_container[i].style.display = 'none'
    }
    first_main_quick_virtual_teaching_first_carousel_container[1].style.display = 'grid'
}

const third_carousel_display = () => {
    let i = 0
    for (i; i < first_main_quick_virtual_teaching_first_carousel_container.length; i++) {
        first_main_quick_virtual_teaching_first_carousel_container[i].style.display = 'none'
    }
    first_main_quick_virtual_teaching_first_carousel_container[2].style.display = 'grid'
}

const fourth_carousel_display = () => {
    let i = 0
    for (i; i < first_main_quick_virtual_teaching_first_carousel_container.length; i++) {
        first_main_quick_virtual_teaching_first_carousel_container[i].style.display = 'none'
    }
    first_main_quick_virtual_teaching_first_carousel_container[3].style.display = 'grid'
}

window.onload = () => {
    let main = document.querySelector('.main')
    main.style.animationName = 'elements_appear'
    main.style.animationDuration = '4s'
}
