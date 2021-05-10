const submit = document.querySelector('#submit');
const button = document.querySelector('#button');
const table = document.querySelector('#table');

const getPost = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users';

    try {
        document.body.insertAdjacentHTML("beforeend", '<div class="load">LOADING...</div>');
        const response = await fetch(url);
        const data = await response.json();
        if (data) {
            document.body.querySelector("#no-data").hidden = true;
            document.body.querySelector(".load").hidden = true;
            document.body.querySelector("#table").hidden = false;
        }
        document.body.insertAdjacentHTML("beforeend", '<table><tr></tr></table>');
        data.forEach((item) =>
            table.insertAdjacentHTML('beforeend', `<tr><td>${item.name}</td></tr>`)
        );
    } catch (e) {
        console.log(e);
    }
};

const sendForm = async (e) => {
    e.preventDefault();
    try {
        const formData = new FormData(form);
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: formData,
        });
        const result = await response.json();
        form.hidden = true;
        document.body.querySelector("#yes-send").hidden = false;
    } catch (e) {
        console.log(e);
    }
}

button.addEventListener("click", getPost);
submit.addEventListener("click", sendForm);