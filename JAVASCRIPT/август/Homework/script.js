window.addEventListener('DOMContentLoaded', (event) => {
    const buttonClassName = document.querySelector('#className');
    const buttonClassList = document.querySelector('#classList');
    const buttonClear = document.querySelector('#clear');
    const menuButton = document.querySelector('.menu-button');
    const plate = document.querySelector('.plate');
    const textString = document.querySelector('.content');

    buttonClassName.addEventListener('click', () => {
        const div = document.querySelector('.some_classes');
        div.append(div.className);
    });
    buttonClassList.addEventListener('click', () => {
        const div = document.querySelector('.some_classes');
        div.append(div.classList);
    });
    buttonClear.addEventListener('click', () => {
        const div = document.querySelector('.some_classes');
        div.innerHTML = '';
    });

    buttonClear.addEventListener('mouseenter', () => {
        buttonClear.classList.add('red-button');
    });
    buttonClear.addEventListener('mouseleave', () => {
        buttonClear.classList.remove('red-button');
    });

    menuButton.addEventListener('click', () => {
        menuButton.classList.toggle('opened');
    });

    plate.addEventListener('click', () => {
        if (textString.hidden === true) {
            textString.hidden = false;
            plate.textContent = 'Закрыть';
        } else {
            textString.hidden = true;
            plate.textContent = 'Раскрыть';
        }
    })
});