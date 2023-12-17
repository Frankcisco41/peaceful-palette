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
var chatModal = document.getElementById('chatModal');
var messageInput = document.getElementById('message-input');
var chatBody = document.getElementById('chat-body');

document.getElementById('asistente-virtual').addEventListener('click', function () {
    chatModal.classList.add('visible');
});

function cerrarChat() {
    chatModal.classList.remove('visible');
}

function enviarMensaje() {
    var mensaje = messageInput.value.trim();
    if (mensaje !== '') {
        chatBody.innerHTML += '<p class="sent">' + mensaje + '</p>';
        messageInput.value = '';

        // Agrega aquí la lógica para la respuesta del asistente virtual si es necesario
        // Ejemplo de respuesta automática después de 1 segundo
        setTimeout(function () {
            chatBody.innerHTML += '<p class="received">¿En qué puedo ayudarte hoy?</p>';
        }, 1000);
    }
}

// Cierra el chat si se hace clic fuera de la ventana modal
window.addEventListener('click', function (event) {
    if (event.target === chatModal) {
        cerrarChat();
    }
});