const IMAGE_LINKS = [
    'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',

    'https://images.unsplash.com/photo-1512427691650-15fcce1dc7b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80',

    'https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80'
];

const IMAGE_TITLES = [
    'Pizza', 
    'Tacos', 
    'Burger'
];

// size body to fit window
const body = document.querySelector('body');
body.style.margin = 0;
body.style.maxHeight = '100vh';
body.style.maxWidth = '100vw';

// add color to nav header
const header = document.querySelector('.nav-header');
header.style.backgroundColor = 'dodgerblue';

// style unordered list
const ul = document.querySelector('ul');
ul.style.display = 'flex';
ul.style.justifyContent = 'space-around';
ul.style.margin = 0;
ul.style.listStyleType = 'none';

// style list items
const lis = document.querySelectorAll('li');
lis.forEach(el => {
    el.style.margin = '15px';
    el.style.fontSize = '18px';
    el.style.textDecoration = 'none';
});
// create nav link effect
lis.forEach(el => {
    el.addEventListener('mouseenter', () => {
        el.style.cursor = 'pointer';
    });
    el.addEventListener('mouseleave', () => {
        el.style.cursor = 'auto';
    });
});

const content = document.querySelector('.content-container');
for (let i = 0; i < 3; i++) {
    let nodeContainer = document.createElement('DIV');
    nodeContainer.style.display = 'flex';
    nodeContainer.style.padding = '10px';

    let newPar = document.createElement('P');
    newPar.innerHTML = 'Nostrud proident irure officia ex ex. Aliqua sint laborum veniam magna cupidatat do exercitation ullamco consectetur aliquip sunt laboris. Deserunt reprehenderit in laborum excepteur minim veniam. Aute velit reprehenderit Lorem dolor voluptate. Est ipsum nostrud aliqua excepteur amet incididunt incididunt excepteur laborum duis excepteur anim laboris dolor. Incididunt ipsum consequat aute excepteur incididunt Lorem nisi anim consequat est est eu laborum.';
    
    let newImg = document.createElement('IMG');
    newImg.setAttribute('src',  IMAGE_LINKS[i]);
    
    // append to parent node
    nodeContainer.appendChild(newImg);
    nodeContainer.appendChild(newPar);
    content.appendChild(nodeContainer);
}

let imgNodes = document.querySelectorAll('img');
imgNodes.forEach(el => {
    el.style.width = '250px';
});