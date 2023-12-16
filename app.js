document.addEventListener('DOMContentLoaded', function () {
    var container = document.querySelector('.video-container');
    var videos = document.querySelectorAll('.video');
    var currentIndex = 0;

    document.getElementById('next-btn').addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % videos.length;
        updateCarousel();
    });

    document.getElementById('prev-btn').addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + videos.length) % videos.length;
        updateCarousel();
    });

    function updateCarousel() {
        videos.forEach(function(video, index) {
            video.classList.remove('active');
            if (index === currentIndex) {
                video.classList.add('active');
            }
        });

        container.style.transition = 'transform 0.5s ease-in-out';
        container.style.transform = 'translateX(' + -currentIndex * videos[0].offsetWidth + 'px)';
    }

    container.addEventListener('transitionend', function () {
        container.style.transition = 'none';
    });
});