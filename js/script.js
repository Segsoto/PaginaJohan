/* ===== VARIABLES GLOBALES ===== */
let currentModalImage = 0;
const galleryImages = [];

/* ===== PRODUCTOS DE EJEMPLO ===== */
const productosChinos = [
    {
        nombre: "Kit de Frenos BYD",
        descripcion: "Sistema completo de frenos para modelos BYD Tang, Song y F3",
        precio: "₡85,000",
        imagen: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        nombre: "Filtro de Aire Chery",
        descripcion: "Filtro de aire de alta eficiencia para Chery Tiggo y QQ",
        precio: "₡12,500",
        imagen: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        nombre: "Amortiguadores JAC",
        descripcion: "Juego de amortiguadores delanteros para JAC S3 y S5",
        precio: "₡95,000",
        imagen: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        nombre: "Kit de Clutch Great Wall",
        descripcion: "Kit completo de clutch para Great Wall Hover y Wingle",
        precio: "₡125,000",
        imagen: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        nombre: "Bomba de Agua Geely",
        descripcion: "Bomba de agua original para Geely CK y MK",
        precio: "₡35,000",
        imagen: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        nombre: "Sistema de Luces MG",
        descripción: "Kit de luces LED completo para MG ZS y HS",
        precio: "₡65,000",
        imagen: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
];

const productosEuropeos = [
    {
        nombre: "Pastillas de Freno BMW",
        descripcion: "Pastillas de freno originales para BMW Serie 3 y 5",
        precio: "₡45,000",
        imagen: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        nombre: "Filtros Mercedes-Benz",
        descripcion: "Kit de filtros completo para Mercedes-Benz Clase C y E",
        precio: "₡35,000",
        imagen: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        nombre: "Suspensión Audi",
        descripcion: "Sistema de suspensión deportiva para Audi A4 y A6",
        precio: "₡185,000",
        imagen: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        nombre: "Motor de Arranque VW",
        descripcion: "Motor de arranque para Volkswagen Golf y Passat",
        precio: "₡85,000",
        imagen: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        nombre: "Radiador Peugeot",
        descripcion: "Radiador de aluminio para Peugeot 206 y 208",
        precio: "₡75,000",
        imagen: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        nombre: "Turbo Renault",
        descripcion: "Turbocompresor para Renault Megane y Scenic",
        precio: "₡225,000",
        imagen: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
];

/* ===== MARCAS POR TIPO DE CARRO ===== */
const marcasChinas = [
    "BYD", "Chery", "JAC", "Great Wall", "Geely", "MG", "Dongfeng", "Foton", "Lifan", "Changan"
];

const marcasEuropeas = [
    "BMW", "Mercedes-Benz", "Audi", "Volkswagen", "Peugeot", "Renault", "Volvo", "SEAT", "Skoda", "Opel"
];

/* ===== IMÁGENES DE GALERÍA ===== */
const galleryData = [
    {
        src: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Kit de Frenos BYD",
        description: "Sistema completo de frenos para modelos BYD"
    },
    {
        src: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Repuestos BMW",
        description: "Piezas originales para motores BMW"
    },
    {
        src: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Instalación Mercedes-Benz",
        description: "Cambio de sistema de suspensión completo"
    },
    {
        src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Transmisión Chery",
        description: "Caja de cambios automática para Chery Tiggo"
    },
    {
        src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Nuestro Taller",
        description: "Instalaciones modernas y equipadas"
    },
    {
        src: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Filtros Volkswagen",
        description: "Kit completo de filtros para mantenimiento"
    },
    {
        src: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Diagnóstico JAC",
        description: "Servicio de diagnóstico computarizado"
    },
    {
        src: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Amortiguadores Audi",
        description: "Sistema de suspensión deportiva para Audi"
    },
    {
        src: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Sistema de Iluminación",
        description: "Luces LED para Great Wall"
    },
    {
        src: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Equipo de Diagnóstico",
        description: "Tecnología avanzada para diagnósticos precisos"
    },
    {
        src: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Kit de Clutch Peugeot",
        description: "Sistema completo de embrague para Peugeot"
    },
    {
        src: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Instalación Geely",
        description: "Cambio completo de sistema eléctrico"
    }
];

/* ===== INICIALIZACIÓN ===== */
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeCarSelection();
    initializeContactForm();
    initializeGallery();
    initializeFAQ();
    initializeScrollAnimations();
    initializeHeader();
});

/* ===== NAVEGACIÓN ===== */
function initializeNavigation() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    
    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Cerrar menú al hacer click en un enlace
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Cerrar menú al hacer click fuera
        document.addEventListener('click', function(event) {
            if (!mobileMenu.contains(event.target) && !navMenu.contains(event.target)) {
                mobileMenu.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

/* ===== HEADER CON SCROLL ===== */
function initializeHeader() {
    const header = document.querySelector('.header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.background = '#ffffff';
                header.style.backdropFilter = 'none';
            }
        });
    }
}

/* ===== SELECCIÓN DE TIPO DE CARRO ===== */
function initializeCarSelection() {
    // Inicializar productos si estamos en la página principal
    if (document.getElementById('products-grid')) {
        populateGalleryImages();
    }
}

function showProducts(tipo) {
    const productsSection = document.getElementById('products-section');
    const productsGrid = document.getElementById('products-grid');
    const productsTitle = document.getElementById('products-title');
    
    if (!productsSection || !productsGrid || !productsTitle) return;
    
    const productos = tipo === 'chino' ? productosChinos : productosEuropeos;
    const titulo = tipo === 'chino' ? 'Productos para Carros Chinos' : 'Productos para Carros Europeos';
    
    productsTitle.textContent = titulo;
    productsGrid.innerHTML = '';
    
    productos.forEach(producto => {
        const productCard = createProductCard(producto);
        productsGrid.appendChild(productCard);
    });
    
    productsSection.style.display = 'block';
    productsSection.scrollIntoView({ behavior: 'smooth' });
}

function createProductCard(producto) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    card.innerHTML = `
        <div class="product-image" style="background-image: url('${producto.imagen}')"></div>
        <div class="product-info">
            <h4>${producto.nombre}</h4>
            <p>${producto.descripcion}</p>
            <div class="product-price">${producto.precio}</div>
        </div>
    `;
    
    // Agregar animación de entrada
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        card.style.transition = 'all 0.5s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, Math.random() * 300);
    
    return card;
}

function hideProducts() {
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
        productsSection.style.display = 'none';
    }
}

/* ===== FORMULARIO DE CONTACTO ===== */
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    const tipoCarroSelect = document.getElementById('tipo-carro');
    const marcaGroup = document.getElementById('marca-group');
    const marcaSelect = document.getElementById('marca');
    
    // Mostrar/ocultar selector de marca
    if (tipoCarroSelect && marcaGroup && marcaSelect) {
        tipoCarroSelect.addEventListener('change', function() {
            const valor = this.value;
            
            if (valor === 'chino' || valor === 'europeo') {
                marcaGroup.style.display = 'block';
                populateMarcas(valor, marcaSelect);
            } else {
                marcaGroup.style.display = 'none';
                marcaSelect.innerHTML = '<option value="">Selecciona una marca</option>';
            }
        });
    }
    
    // Validación y envío del formulario
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateContactForm()) {
                // Simular envío del formulario
                const submitBtn = contactForm.querySelector('.btn-submit');
                const originalText = submitBtn.innerHTML;
                
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    showSuccessModal();
                    contactForm.reset();
                    marcaGroup.style.display = 'none';
                    clearErrors();
                }, 2000);
            }
        });
    }
}

function populateMarcas(tipo, selectElement) {
    const marcas = tipo === 'chino' ? marcasChinas : marcasEuropeas;
    
    selectElement.innerHTML = '<option value="">Selecciona una marca</option>';
    
    marcas.forEach(marca => {
        const option = document.createElement('option');
        option.value = marca.toLowerCase();
        option.textContent = marca;
        selectElement.appendChild(option);
    });
}

function validateContactForm() {
    const requiredFields = [
        { id: 'nombre', message: 'El nombre es requerido' },
        { id: 'email', message: 'El correo electrónico es requerido' },
        { id: 'telefono', message: 'El teléfono es requerido' },
        { id: 'tipo-carro', message: 'Debe seleccionar un tipo de vehículo' },
        { id: 'mensaje', message: 'El mensaje es requerido' },
        { id: 'terminos', message: 'Debe aceptar los términos y condiciones' }
    ];
    
    let isValid = true;
    clearErrors();
    
    requiredFields.forEach(field => {
        const element = document.getElementById(field.id);
        const errorElement = document.getElementById(field.id + '-error');
        
        if (!element) return;
        
        let fieldValid = true;
        
        if (field.id === 'terminos') {
            fieldValid = element.checked;
        } else if (field.id === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            fieldValid = element.value.trim() !== '' && emailRegex.test(element.value);
            if (!fieldValid && element.value.trim() !== '') {
                field.message = 'El correo electrónico no es válido';
            }
        } else if (field.id === 'telefono') {
            const phoneRegex = /^[\+]?[0-9\s\-\(\)]{8,}$/;
            fieldValid = element.value.trim() !== '' && phoneRegex.test(element.value);
            if (!fieldValid && element.value.trim() !== '') {
                field.message = 'El teléfono no es válido';
            }
        } else {
            fieldValid = element.value.trim() !== '';
        }
        
        if (!fieldValid) {
            if (errorElement) {
                errorElement.textContent = field.message;
            }
            element.style.borderColor = '#e31e24';
            isValid = false;
        } else {
            element.style.borderColor = '#ddd';
        }
    });
    
    return isValid;
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => {
        element.textContent = '';
    });
    
    const formElements = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');
    formElements.forEach(element => {
        element.style.borderColor = '#ddd';
    });
}

function showSuccessModal() {
    const modal = document.getElementById('success-modal');
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeSuccessModal() {
    const modal = document.getElementById('success-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

/* ===== GALERÍA ===== */
function initializeGallery() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Inicializar datos de galería
    populateGalleryImages();
    
    // Filtros de galería
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Actualizar botón activo
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filtrar elementos
            galleryItems.forEach(item => {
                const categories = item.getAttribute('data-category');
                
                if (filter === 'all' || categories.includes(filter)) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeInUp 0.5s ease';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

function populateGalleryImages() {
    galleryImages.length = 0; // Limpiar array
    galleryData.forEach(item => {
        galleryImages.push(item);
    });
}

function openModal(index) {
    const modal = document.getElementById('modal-gallery');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    
    if (!modal || !modalImg || !modalTitle || !modalDescription) return;
    
    currentModalImage = index;
    const imageData = galleryImages[index];
    
    modalImg.src = imageData.src;
    modalTitle.textContent = imageData.title;
    modalDescription.textContent = imageData.description;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('modal-gallery');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function nextImage() {
    currentModalImage = (currentModalImage + 1) % galleryImages.length;
    updateModalImage();
}

function prevImage() {
    currentModalImage = (currentModalImage - 1 + galleryImages.length) % galleryImages.length;
    updateModalImage();
}

function updateModalImage() {
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    
    if (!modalImg || !modalTitle || !modalDescription) return;
    
    const imageData = galleryImages[currentModalImage];
    
    modalImg.style.opacity = '0';
    
    setTimeout(() => {
        modalImg.src = imageData.src;
        modalTitle.textContent = imageData.title;
        modalDescription.textContent = imageData.description;
        modalImg.style.opacity = '1';
    }, 150);
}

// Cerrar modal con Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
        closeSuccessModal();
    }
});

// Cerrar modal haciendo click fuera
document.addEventListener('click', function(e) {
    const modal = document.getElementById('modal-gallery');
    const successModal = document.getElementById('success-modal');
    
    if (e.target === modal) {
        closeModal();
    }
    
    if (e.target === successModal) {
        closeSuccessModal();
    }
});

/* ===== FAQ ===== */
function initializeFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const faqAnswer = faqItem.querySelector('.faq-answer');
            const icon = this.querySelector('i');
            
            // Cerrar otros FAQ abiertos
            faqQuestions.forEach(otherQuestion => {
                const otherItem = otherQuestion.parentElement;
                const otherIcon = otherQuestion.querySelector('i');
                
                if (otherItem !== faqItem) {
                    otherItem.classList.remove('active');
                    otherIcon.style.transform = 'rotate(0deg)';
                }
            });
            
            // Toggle FAQ actual
            faqItem.classList.toggle('active');
            
            if (faqItem.classList.contains('active')) {
                icon.style.transform = 'rotate(45deg)';
            } else {
                icon.style.transform = 'rotate(0deg)';
            }
        });
    });
}

/* ===== ANIMACIONES DE SCROLL ===== */
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Animación especial para contadores
                if (entry.target.classList.contains('stat-item')) {
                    animateCounter(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observar elementos animables
    const animatableElements = document.querySelectorAll(`
        .feature-card,
        .service-card,
        .team-member,
        .value-card,
        .mv-card,
        .contact-card,
        .stat-item,
        .gallery-item
    `);
    
    animatableElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
        observer.observe(element);
    });
}

/* ===== ANIMACIÓN DE CONTADORES ===== */
function animateCounter(element) {
    const counter = element.querySelector('h3');
    if (!counter) return;
    
    const target = parseInt(counter.textContent);
    if (isNaN(target)) return;
    
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        
        if (current >= target) {
            counter.textContent = target + (counter.textContent.includes('+') ? '+' : '') + (counter.textContent.includes('%') ? '%' : '');
            clearInterval(timer);
        } else {
            counter.textContent = Math.floor(current);
        }
    }, 50);
}

/* ===== SCROLL SUAVE ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* ===== LAZY LOADING DE IMÁGENES ===== */
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

/* ===== UTILIDADES ===== */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

/* ===== PERFORMANCE MONITORING ===== */
function logPerformance() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const timing = performance.timing;
            const loadTime = timing.loadEventEnd - timing.navigationStart;
            console.log(`Página cargada en ${loadTime}ms`);
        });
    }
}

/* ===== ERROR HANDLING ===== */
window.addEventListener('error', function(e) {
    console.error('Error capturado:', e.error);
    // Aquí podrías enviar el error a un servicio de logging
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('Promise rechazada:', e.reason);
    // Aquí podrías enviar el error a un servicio de logging
});

/* ===== SERVICE WORKER (OPCIONAL) ===== */
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Descomentariar si se implementa service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registrado'))
        //     .catch(error => console.log('SW falló'));
    });
}

/* ===== INICIO DE PERFORMANCE ===== */
logPerformance();

/* ===== FUNCIONES GLOBALES PARA HTML ===== */
// Estas funciones deben estar disponibles globalmente para los onclick en HTML
window.showProducts = showProducts;
window.hideProducts = hideProducts;
window.openModal = openModal;
window.closeModal = closeModal;
window.nextImage = nextImage;
window.prevImage = prevImage;
window.closeSuccessModal = closeSuccessModal;
