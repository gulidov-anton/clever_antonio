form.onsubmit = async (e) => {
    e.preventDefault();
    try {
      let formData = new FormData(form);
      let formDataObj = Array.from(formData.entries()).reduce(
        (prev, [name, value]) => ({
          ...prev,
          [name]: value,
        }),
        {}
      );
      let formDataJSON = JSON.stringify(formDataObj);

      let response = await fetch('https://httpbin.org/post', {
        method: 'POST',
        body: formDataJSON
      });
    
        let result = await response.json();
        alert(`Данные, переданные на сервер: ${result.data}`);
        form.hidden = true;
        document.body.insertAdjacentHTML('afterbegin','<div class="success">Данные загрузились!</div>');
    } catch {
      email.insertAdjacentHTML('afterend', '<div class="error">ОШИБКА</div>')
      pass.insertAdjacentHTML('afterend', '<div class="error">ОШИБКА</div>')
    };
};