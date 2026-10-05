console.log('Project in process!!')

const body = document.querySelector('body');
// console.log(body)

const h1 = document.createElement('h1');
body.appendChild(h1);
h1.textContent = 'Project in process!!! Sorry!! I need a little more time!!'

const div_Img = document.createElement('div');
body.append(div_Img);
div_Img.classList.add('box-img')