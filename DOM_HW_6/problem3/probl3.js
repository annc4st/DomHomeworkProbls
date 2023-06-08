/*
<body>
  main class="mainClass check item">         
     <div id="myDiv">
         <p>First paragraph</p>           
     </div>
 </main> 
</body>
*/

let body = document.querySelector('body');

let mainTag = document.createElement('main');
mainTag.className = 'mainClass check item';

let div1 = document.createElement('div');
div1.id = 'myDiv';

let pFirst = document.createElement('p');
pFirst.innerHTML = 'First paragraph';

body.appendChild(mainTag);
mainTag.appendChild(div1);
div1.appendChild(pFirst);

