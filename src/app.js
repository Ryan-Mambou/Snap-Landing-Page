const company = document.querySelector('#company');
const feature = document.querySelector('#feature');
const companyContent = document.querySelector('#companyContent');
const featureContent = document.querySelector('#featureContent');

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