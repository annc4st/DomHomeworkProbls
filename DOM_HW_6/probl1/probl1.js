/* У модальному вікні необхідно послідовно вивести вміст:
     1) першого елемента списку
     2) останнього елемента списку
     3) другого елемента списку
     4) четвертого елемента списку
     5) третього елемента списку 
     
*/

alert(`Результат виводу: ${document.getElementsByTagName("li")[0].innerHTML}, ${document.getElementsByTagName("li")[4].innerHTML}, ${document.getElementsByTagName("li")[1].innerHTML}, ${document.getElementsByTagName("li")[3].innerHTML}, ${document.getElementsByTagName("li")[2].innerHTML}`);