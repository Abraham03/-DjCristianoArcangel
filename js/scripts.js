/*
    Script Principal para la página de DJ Cristiano Arcangel
    ---------------------------------------------------------
    Este archivo maneja toda la interactividad de la página,
    incluyendo el menú, el formulario de contacto y la galería.
*/

document.addEventListener('DOMContentLoaded', function() {

    // --- MANEJO DEL MENÚ MÓVIL ---
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });


    // --- EFECTO DEL HEADER AL HACER SCROLL ---
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('bg-gray-900', 'shadow-lg');
            } else {
                header.classList.remove('bg-gray-900', 'shadow-lg');
            }
        });
    }

    // --- ACTUALIZACIÓN AUTOMÁTICA DEL AÑO EN EL FOOTER ---
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    // --- LÓGICA DEL FORMULARIO DE CONTACTO PARA WHATSAPP ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const evento = document.getElementById('evento').value;
            const mensaje = document.getElementById('mensaje').value;

            if (!nombre || !evento || !mensaje) {
                alert('Por favor, completa todos los campos requeridos.');
                return;
            }

            const telefono = '18643465168';
            let mensajeWhatsApp = `¡Hola! 👋 Me gustaría solicitar una cotización.\n\n`;
            mensajeWhatsApp += `*👤 Nombre:* ${nombre}\n`;
            mensajeWhatsApp += `*🎉 Tipo de Evento:* ${evento}\n`;
            if (email) {
                mensajeWhatsApp += `*📧 Correo:* ${email}\n`;
            }
            mensajeWhatsApp += `*📝 Detalles:* ${mensaje}\n\n`;
            mensajeWhatsApp += `¡Espero tu pronta respuesta!`;

            const mensajeCodificado = encodeURIComponent(mensajeWhatsApp);
            const url = `https://wa.me/${telefono}?text=${mensajeCodificado}`;
            window.open(url, '_blank').focus();
            contactForm.reset();
        });
    }

    // --- LÓGICA PARA EL CARRUSEL SWIPER ---

    // ¡Modifica este array para añadir o quitar fotos!
    const galleryImages = [
        { src: 'assets/img/about/8.jpg', alt: 'Evento social animado' },
        { src: 'assets/img/about/5.jpg', alt: 'Pista de baile llena' },
        { src: 'assets/img/about/3.jpg', alt: 'Luces y ambiente de fiesta' },
        { src: 'assets/img/about/4.jpg', alt: 'Invitados disfrutando' },
        { src: 'assets/img/about/9.jpg', alt: 'Equipo de sonido profesional' },
        { src: 'assets/img/about/6.jpg', alt: 'Decoración del evento' },
        { src: 'assets/img/about/1.jpg', alt: 'Evento social animado' },
        { src: 'assets/img/about/12.jpg', alt: 'Decoración del evento' }
    ];

    const swiperWrapper = document.getElementById('swiper-gallery-wrapper');

    if (swiperWrapper) {
        // Generar los slides dinámicamente
        galleryImages.forEach(image => {
            const slide = document.createElement('div');
            slide.className = 'swiper-slide';
            slide.innerHTML = `<img src="${image.src}" alt="${image.alt}">`;
            swiperWrapper.appendChild(slide);
        });

        // Inicializar Swiper
        const swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: true,
            loop: true,
            grabCursor: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                640: { slidesPerView: 1.5, spaceBetween: 20 },
                768: { slidesPerView: 2.5, spaceBetween: 30 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
            },
        });
    }

    // --- INICIALIZACIÓN DE LA LIBRERÍA DE ANIMACIONES (AOS) ---
    AOS.init({
        duration: 800, // Duración de la animación en milisegundos
        once: true, // La animación solo ocurre una vez
        offset: 50, // Activa la animación un poco antes de que el elemento sea visible
    });
});