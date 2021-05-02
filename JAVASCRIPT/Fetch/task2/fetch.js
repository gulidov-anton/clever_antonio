'use strict'

const button = document.querySelector('#submit');
const number = document.querySelector('#number');

const getPost = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    document.body.insertAdjacentHTML("beforeend", '<div class="load">LOADING...</div>');

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        document.body.querySelector(".load").hidden = true;
        data.foreEach( (item) =>
            document.body.insertAdjacentHTML('beforeend', `<div class="data">${item.name}</div>`)
        );
    } catch (e) {
        console.log(e);
    }
};

button.addEventListener("click", getPost);