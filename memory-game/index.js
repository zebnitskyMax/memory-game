console.log('Project in process!!')

// const body = document.querySelector('body');
// console.log(body)

// const h1 = document.createElement('h1');
// body.appendChild(h1);
// h1.textContent = 'Project in process!!! Sorry!! I need a little more time!!'

// const div_Img = document.createElement('div');
// body.append(div_Img);
// div_Img.classList.add('box-img');




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
createElements('div', 'section', 15, 'card');

createBlock('div_Img', 'body', 'box-img');
createBlock('h1', 'body', 'h1-text');

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

// Добавляем текст
function addText(elem, text) {
    const elemText = document.querySelector(elem)
    elemText.textContent = text
}
addText('.header-btn', 'Start')
addText('.btn1', 'Leaders table')
addText('.h1-text', 'Project in process!!! Sorry!! I need a little more time!!')