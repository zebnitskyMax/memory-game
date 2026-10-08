console.log('Project in process!!')




// Создаем блок
function createBlock(elem, parent, nameClass = '') {
    const parentEl = document.querySelector(parent);
    const innerEl = document.createElement(elem);
    parentEl.append(innerEl);
    innerEl.classList.add(nameClass);
}
// Создаем элементы
function createElements(elem, parent, n, nameClass) {
    for (let i = 0; i < n; i++) {
        const parentEl = document.querySelector(parent);
        const innerEl = document.createElement(elem);
        parentEl.append(innerEl);
        innerEl.classList.add(nameClass);

    }
}

createBlock('header', 'body', 'header');
createBlock('main', 'body', 'main');
createBlock('section', 'main', 'main-cards');
createElements('button', 'header', 2, 'header-btn');
createElements('div', 'section', 16, 'card');



createBlock('div_Img', 'body', 'box-img');

// Добавляем класс
function addClassName(findElem, nameClass) {
    const elem = document.querySelector(findElem);
    elem.classList.add(nameClass)
}

function addFewClasses(nameClass, addNewClass) {
    const elements = document.querySelectorAll(nameClass)
    elements.forEach((elem, i) => elem.classList.add(addNewClass + i))
}
addFewClasses('.header-btn', 'btn')

const btnStart = document.querySelector('.btn0');
console.log(btnStart)
btnStart.addEventListener('click', () => {
    window.location.reload()
})

// Добавляем текст
function addText(elem, text) {
    const elemText = document.querySelector(elem)
    elemText.textContent = text
}
addText('.header-btn', 'Start')
addText('.btn1', 'Leaders table')

// создаем элементы для блока
const cardsAllFront = document.querySelectorAll('.card');
cardsAllFront.forEach(el => {
    const elem = document.createElement('div');
    el.append(elem);
    elem.classList.add('card-front');
})

addFewClasses('.card-front', 'front')

const cardsAllBack = document.querySelectorAll('.card');
cardsAllBack.forEach(el => {
    const elem = document.createElement('div');
    el.append(elem);
    elem.classList.add('card-back');
})

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('card-back')) {
        const card = e.target.parentElement
        card.classList.toggle('flipped')
    }
})