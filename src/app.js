const company = document.querySelector('#company');
const feature = document.querySelector('#feature');
const companyContent = document.querySelector('#companyContent');
const featureContent = document.querySelector('#featureContent');
const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const closeIcon = document.querySelector('#closeIcon');

function dropdown(element){
    if (element.classList.contains('block')){
        element.classList.remove('block')
        element.classList.add('hidden')
    }
    else {
        element.classList.remove('hidden')
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
    console.log('click')
    menu.classList.add('translate-x-0')
})

closeIcon.addEventListener('click', () => {
    menu.classList.remove('translate-x-0');
})