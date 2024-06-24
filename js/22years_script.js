let currentSlide = 0;
const slides = document.querySelectorAll('.carousel img');
const indicators = document.querySelectorAll('.indicator');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        indicators[i].classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}




let currentComment = 0;
const comments = document.querySelectorAll('.comment-slider .comment');
const sliderInner = document.querySelector('.slider-inner');
const commentIndicators = document.querySelectorAll('.comments-indicators .indicator');

function showComment(index) {
    sliderInner.style.transform = `translateX(-${index * 100}%)`;
    commentIndicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
}

function nextComment() {
    currentComment = (currentComment + 1) % comments.length;
    showComment(currentComment);
}

function prevComment() {
    currentComment = (currentComment - 1 + comments.length) % comments.length;
    showComment(currentComment);
}

function goToComment(index) {
    currentComment = index;
    showComment(currentComment);
}







let currentProfile = 0;
const profiles = document.querySelectorAll('.profile-slider .profile');
const profilesToShow = 3; // Кількість профілів, які відображаються одночасно
const profileSliderInner = document.querySelector('.profile-slider-inner');

if (profileSliderInner) {
    function showProfile(index) {
        profileSliderInner.style.transform = `translateX(-${index * (100 / profilesToShow)}%)`;
    }

    function nextProfile() {
        if (currentProfile < profiles.length - profilesToShow) {
            currentProfile++;
        } else {
            currentProfile = 0;
        }
        showProfile(currentProfile);
    }

    function prevProfile() {
        if (currentProfile > 0) {
            currentProfile--;
        } else {
            currentProfile = profiles.length - profilesToShow;
        }
        showProfile(currentProfile);
    }
} else {
    console.error('Element with class "profile-slider-inner" not found.');
}