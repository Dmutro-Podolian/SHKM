let teacher1Button = document.querySelector(".teachertab1"); 
let images = document.querySelector(".images");
let teacher2Button = document.querySelector(".teachertab2");
let teacher3Button = document.querySelector(".teachertab3");
let teacher4Button = document.querySelector(".teachertab4");
let teacher5Button = document.querySelector(".teachertab5");
let teacher6Button = document.querySelector(".teachertab6");
let h1_text = document.querySelector(".h1_text");
let quotes = document.querySelector(".quotes");
let experience = document.querySelector(".experience");
let firstLi = document.querySelector(".firstLi");
let secLi = document.querySelector(".secLi");

function resetImages() {
    images.classList.remove('teacher1Images', 'teacher1Images2', 'teacher1Images3', 'teacher1Images4', 'teacher1Images6','teacher1Images5');
    images.classList.add('images');
}



teacher1Button.addEventListener('click', function() {
    h1_text.innerText = "Гут Олеся Петрівна";
    quotes.innerText = "Процес пізнання - це найцікавіше, що може бути в житті. Я люблю вчитись та вмію навчити цьому інших. А готовність до постійних змін є запорукою успіху в житті людини.";
    experience.innerText = "Досвід роботи 21 рік";
    firstLi.innerText = "Криворізький державний педагогічний університет";
    secLi.innerText = "Факультет інформаційного дизайну та реклами";
    resetImages();
    images.classList.add('teacher1Images');
});

teacher2Button.addEventListener('click', function() {
    h1_text.innerText = "Перегінець Тетяна Ярославівна";
    quotes.innerText = "Геніями не народжуються, а стають через плідну працю";
    experience.innerText = "Досвід роботи 11 років";
    firstLi.innerText = "Прикарпатський національний університет ім. В. Стефаника";
    secLi.innerText = "Факультет математики та інформатики";
    resetImages();
    images.classList.add('teacher1Images2');
});

teacher3Button.addEventListener('click', function() {
    h1_text.innerText = "Маротчак Святослава Іванів";
    quotes.innerText = "Варто тільки повірити, що ви можете - і ви вже на півдороги до цілі";
    experience.innerText = "Досвід роботи 2 роки";
    firstLi.innerText = "Прикарпатський національний університет ім. В. Стефаника";
    secLi.innerText = "Факультет математики та інформатики";
    resetImages();
    images.classList.add('teacher1Images3');
});

teacher4Button.addEventListener('click', function() {
    h1_text.innerText = "Мажинська Олена Анатоліївна";
    quotes.innerText = "Постійно в пошуку вдосконалення, адже навчаючи інших, я навчаюся сама";
    experience.innerText = "Досвід роботи 2 роки";
    firstLi.innerText = "Харківський національний університет радіотехніки";
    secLi.innerText = "Факультет комп'ютерних наук";
    resetImages();
    images.classList.add('teacher1Images4');
});
teacher5Button.addEventListener('click', function() {
    h1_text.innerText = "ЗАДОРОЖНЯ ГАННА ОЛЕКСАНДРІВНА";
    quotes.innerText = "Якщо проблему можна вирішити, не варто про неї турбуватися. Якщо проблема нерозв'язна, турбуватися про неї безглуздо.";
    experience.innerText = "Досвідроботи:6 років";
    firstLi.innerText = "Державний університетекономіки і технологій";
    secLi.innerText = "Криворізькийнаціональний університет ";
    resetImages();
    images.classList.add('teacher1Images5');
});
teacher6Button.addEventListener('click', function() {
    h1_text.innerText = "СТАВЦЕВ МАКСИМ ГЕННАДІЙОВИЧ";
    quotes.innerText = "Ставтеся до помилок як шансу для зростання і самовдосконалення.";
    experience.innerText = "Досвід роботи 2 роки";
    firstLi.innerText = "Гірничо-електромеханічний фаховийколедж";
    secLi.innerText = "Криворізький національний університет";
    resetImages();
    images.classList.add('teacher1Images6');
});