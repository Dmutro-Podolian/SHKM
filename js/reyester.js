
const form = document.querySelector('.forms');
const nameInput = document.querySelector('.name');
const phoneInput = document.querySelector('.phone');
const cityInput = document.querySelector('.city');
const checkbox = document.querySelector('input[type="checkbox"]');
const sendButton = document.querySelector('.sendForm');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!nameInput.value || !phoneInput.value || !cityInput.value) {
        alert('Будь ласка, заповніть всі поля форми.');
        return;
    }

    const formData = {
        name: nameInput.value,
        phone: phoneInput.value,
        city: cityInput.value,
        digitalHygiene: checkbox.checked
    };

    localStorage.setItem('userFormData', JSON.stringify(formData));

    nameInput.value = '';
    phoneInput.value = '';
    cityInput.value = '';
    checkbox.checked = false;

    alert('Дані успішно збережено!');

});
