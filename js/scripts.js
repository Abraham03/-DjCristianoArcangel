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

    // --- LÓGICA PARA LA GALERÍA SLIDESHOW DEL PORTAFOLIO ---

    // Define aquí la lista de imágenes para la galería.
    // ¡Solo necesitas modificar este array para añadir o quitar fotos!
    const galleryImages = [
        { src: 'assets/img/about/1.jpg', alt: 'Evento social animado' },
        { src: 'assets/img/about/2.jpg', alt: 'Pista de baile llena' },
        { src: 'assets/img/about/3.jpg', alt: 'Luces y ambiente de fiesta' },
        { src: 'assets/img/about/4.jpg', alt: 'Invitados disfrutando' },
        { src: 'assets/img/about/5.jpg', alt: 'Equipo de sonido profesional' },
        { src: 'assets/img/about/6.jpg', alt: 'Decoración del evento' },
        { src: 'assets/img/about/7.jpg', alt: 'Evento social animado' },
        { src: 'assets/img/about/8.jpg', alt: 'Pista de baile llena' },
        { src: 'assets/img/about/9.jpg', alt: 'Luces y ambiente de fiesta' },
        { src: 'assets/img/about/10.jpg', alt: 'Invitados disfrutando' },
        { src: 'assets/img/about/11.jpg', alt: 'Equipo de sonido profesional' },
        { src: 'assets/img/about/12.jpg', alt: 'Decoración del evento' }  ,  
        { src: 'assets/img/about/13.jpg', alt: 'Equipo de sonido profesional' },
        { src: 'assets/img/about/14.jpg', alt: 'Decoración del evento' }        
    ];

    const slideshowContainer = document.getElementById('slideshow-container');
    const thumbnailContainer = document.getElementById('thumbnail-container');
    const prevBtn = document.getElementById('slideshow-prev');
    const nextBtn = document.getElementById('slideshow-next');

    if (slideshowContainer && thumbnailContainer && galleryImages.length > 0) {
        // Generar dinámicamente los slides y las miniaturas
        galleryImages.forEach((image, index) => {
            // Crear el slide
            const slideDiv = document.createElement('div');
            slideDiv.className = 'slide fade';
            slideDiv.innerHTML = `<img src="${image.src}" alt="${image.alt}">`;
            slideshowContainer.insertBefore(slideDiv, prevBtn); // Insertar antes del botón 'prev'

            // Crear la miniatura
            const thumbImg = document.createElement('img');
            thumbImg.className = 'thumbnail';
            thumbImg.src = image.src;
            thumbImg.alt = `Thumbnail ${index + 1}`;
            thumbImg.addEventListener('click', () => showSlide(index));
            thumbnailContainer.appendChild(thumbImg);
        });

        let currentSlideIndex = 0;
        const slides = document.querySelectorAll('.slide');
        const thumbnails = document.querySelectorAll('.thumbnail');

        // Función para mostrar un slide específico
        function showSlide(index) {
            // Validar límites del índice
            if (index >= slides.length) { currentSlideIndex = 0; }
            else if (index < 0) { currentSlideIndex = slides.length - 1; }
            else { currentSlideIndex = index; }

            // Ocultar todos los slides
            slides.forEach(slide => slide.style.display = 'none');
            
            // Quitar la clase 'active' de todas las miniaturas
            thumbnails.forEach(thumb => thumb.classList.remove('active'));

            // Mostrar el slide actual y marcar su miniatura como activa
            slides[currentSlideIndex].style.display = 'block';
            thumbnails[currentSlideIndex].classList.add('active');
        }

        // Función para cambiar de slide
        function changeSlide(direction) {
            showSlide(currentSlideIndex + direction);
        }

        // Event listeners para los botones de navegación
        if (prevBtn) prevBtn.addEventListener('click', () => changeSlide(-1));
        if (nextBtn) nextBtn.addEventListener('click', () => changeSlide(1));

        // Mostrar el primer slide al cargar la página
        showSlide(currentSlideIndex);
    }
});
