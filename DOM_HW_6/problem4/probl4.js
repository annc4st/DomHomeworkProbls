
const btnSubmit = document.getElementsByClassName('btn')[0];
const outDisplay = document.getElementsByClassName('out')[0];


const childParagraph = document.createElement("p");
outDisplay.appendChild(childParagraph);


function displayFunc() {
    const input = document.getElementsByClassName('arr');
    
    const inputArr = [];
    for (let i = 0; i < input.length; i++) {
        inputArr.push(input[i].value);
    }
    // add array into out block
    childParagraph.innerHTML = `${inputArr.join(', ')}`;
}

btnSubmit.addEventListener("click", displayFunc);
 


