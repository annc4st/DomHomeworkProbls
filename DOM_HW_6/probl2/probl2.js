
document.querySelector('h1').style.backgroundColor = 'rgba(0, 128, 0, 0.5)';
let elemMyDiv = document.querySelector('#myDiv');
console.log(elemMyDiv);
let paragrapf1 = elemMyDiv.children[0];
console.log(paragrapf1);
paragrapf1.style.fontWeight = 'bold';

let paragrapf2 = elemMyDiv.children[1];
paragrapf2.style.color = 'red';

let paragrapf3 = elemMyDiv.children[2];
paragrapf3.style.textDecoration = 'underline';

let paragrapf4 = elemMyDiv.children[3];
paragrapf4.style.fontStyle = 'italic';

// list in one horizontal line
let horizontList = document.querySelector('#myList');

// to make a loop
let listElem = document.querySelector('#myList').children;
for (let i = 0; i < listElem.length; i++) {
   
    listElem[i].style.display = 'inline-block';
}

// let il1 = horizontList.children[0];
// let il2 = horizontList.children[1];
// let il3 = horizontList.children[2];
// il1.style.display = 'inline-block';
// il2.style.display = 'inline-block';
// il3.style.display = 'inline-block';

// invisible element span
document.querySelector('span').style.display = 'none';




