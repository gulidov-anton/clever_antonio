'use strict'

const button = document.querySelector('#submit');
const number = document.querySelector('#number');

const getPost = async () => {
    const url = `https://reqres.in/api/users/${number.value}`;
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
};

button.addEventListener("click", getPost);