let first = document.getElementById('first');
first.style.background = 'red';

let second = document.getElementById('second');
second.style.background = 'blue';

let groupOfClass = document.getElementsByClassName('yellow');//Найти все элементы с классом yellow. Для первого и последнего class - желтый цвет фона.
groupOfClass[0].style.background = 'yellow';
groupOfClass[groupOfClass.length - 1].style.background = 'yellow';

let groupOfDiv = document.getElementsByTagName('div');//Найти все  элементы div на странице. Для четвертого div’a сделать  зеленый фон
groupOfDiv[3].style.background = 'green';