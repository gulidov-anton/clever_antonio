const openSubmit = () => {
  let password = $('#password').val();
  let email = $('#email').val();

  if (password.length != 0 && email.length != 0) {
    $('#submit').removeAttr('disabled');
  } else {
    $('#submit').attr('disabled', 'disabled');
  }
}

form.onsubmit = async (e) => {
  e.preventDefault();

  try {

    const formData = new FormData(form);
    const formDataObj = Array.from(formData.entries()).reduce(
      (prev, [name, value]) => ({
        ...prev,
        [name]: value,
      }),
      {}
    );
    const formDataJSON = JSON.stringify(formDataObj);

    const response = await fetch('https://httpbin.org/post', {
      method: 'POST',
      body: formDataJSON
    });

    const result = await response.json();
    alert(`Данные, переданные на сервер: ${result.data}`);
    form.hidden = true;
    document.body.insertAdjacentHTML('afterbegin', '<div class="success">Данные загрузились!</div>');
  } catch {
    email.insertAdjacentHTML('afterend', '<div class="error">ОШИБКА</div>');
    pass.insertAdjacentHTML('afterend', '<div class="error">ОШИБКА</div>');
  };
};