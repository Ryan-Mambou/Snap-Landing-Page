const company = document.querySelector('#company');
const feature = document.querySelector('#feature');
const companyContent = document.querySelector('#companyContent');
const featureContent = document.querySelector('#featureContent');
const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const closeIcon = document.querySelector('#closeIcon');
const dropdowns = document.querySelectorAll('#dropdown');
const backdrop = document.querySelector('#backdrop');

function dropdown(element){
    let caret = element.previousElementSibling
    if (element.classList.contains('block')){
        element.classList.remove('block')
        caret.classList.remove('rotate-180')
        element.classList.add('hidden')
    }
    else {
        element.classList.remove('hidden')
        caret.classList.add('rotate-180')
        element.classList.add('block')
    }
}

company.addEventListener('click', () => {
    dropdown(companyContent)
})

feature.addEventListener('click', () => {
    dropdown(featureContent)
})

hamburger.addEventListener('click', () => {
    menu.classList.remove('translate-x-96')
    menu.classList.add('translate-x-0')
})

closeIcon.addEventListener('click', () => {
    menu.classList.add('translate-x-96')
    menu.classList.remove('translate-x-0');
})

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', () => {
        dropdown.classList.toggle('active');
        const caret = dropdown.firstElementChild;
        const panel = dropdown.nextElementSibling;
        if(dropdown.classList.contains('active')){
            panel.classList.add('max-h-28')
            caret.classList.add('transform', 'rotate-180')
        }
        else {
            panel.classList.remove('max-h-28')
            caret.classList.remove('transform', 'rotate-180')
        }
    })
})