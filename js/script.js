document.addEventListener('DOMContentLoaded', function() {
    let teacher1Button = document.querySelector(".photo1"); 
    let images = document.querySelector(".BigPhoto");
    let teacher2Button = document.querySelector(".photo2");
    let teacher3Button = document.querySelector(".photo3");
    let teacher4Button = document.querySelector(".photo4");
    let teacher5Button = document.querySelector(".photo5");

    function resetImages() {
        images.classList.remove('room1Images', 'room2Images', 'room3Images', 'room4Images', 'room5Images');
        images.classList.add('images');
    }
        teacher1Button.addEventListener('click', function() {
            resetImages();
            images.classList.add('room1Images');
            console.log("фдффдід;gk")
        });

        teacher2Button.addEventListener('click', function() {
            resetImages();
            images.classList.add('room2Images');
        });

        teacher3Button.addEventListener('click', function() {
            resetImages();
            images.classList.add('room3Images');
        });

        teacher4Button.addEventListener('click', function() {
            resetImages();
            images.classList.add('room4Images');
        });

        teacher5Button.addEventListener('click', function() {
            resetImages();
            images.classList.add('room5Images');
        });

});
