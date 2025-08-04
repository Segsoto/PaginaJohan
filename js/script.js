/* ===== VARIABLES GLOBALES ===== */
let currentModalImage = 0;
const galleryImages = [];
let currentCarType = '';

/* ===== PRODUCTOS ORGANIZADOS POR MARCAS ===== */
const productosPorMarca = {
    // Marcas Chinas (solo las que tienen logos locales)
    byd: [
        {
            nombre: "Kit de Frenos BYD Tang",
            descripcion: "Sistema completo de frenos delanteros y traseros para BYD Tang",
            precio: "₡85,000",
            imagen: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            nombre: "Batería BYD Song",
            descripcion: "Batería de alta capacidad para modelos híbridos BYD Song",
            precio: "₡320,000",
            imagen: "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            nombre: "Amortiguadores BYD F3",
            descripcion: "Par de amortiguadores traseros para BYD F3",
            precio: "₡65,000",
            imagen: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        }
    ],
    chery: [
        {
            nombre: "Filtro de Aire Chery Tiggo",
            descripcion: "Filtro de aire de alta eficiencia para Chery Tiggo 2, 3 y 7",
            precio: "₡12,500",
            imagen: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            nombre: "Transmisión Chery QQ",
            descripcion: "Caja de cambios manual para Chery QQ",
            precio: "₡180,000",
            imagen: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            nombre: "Kit de Clutch Chery Arrizo",
            descripcion: "Kit completo de embrague para Chery Arrizo 5",
            precio: "₡95,000",
            imagen: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        }
    ],
    jac: [
        {
            nombre: "Amortiguadores JAC S3",
            descripcion: "Juego de amortiguadores delanteros para JAC S3",
            precio: "₡95,000",
            imagen: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            nombre: "Motor de Arranque JAC S5",
            descripcion: "Motor de arranque reforzado para JAC S5",
            precio: "₡75,000",
            imagen: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        }
    ],
    "great wall": [
        {
            nombre: "Kit de Clutch Great Wall Hover",
            descripcion: "Kit completo de clutch para Great Wall Hover H3 y H5",
            precio: "₡125,000",
            imagen: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            nombre: "Sistema de Iluminación Wingle",
            descripcion: "Kit de luces LED para Great Wall Wingle",
            precio: "₡65,000",
            imagen: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        }
    ],
    geely: [
        {
            nombre: "Bomba de Agua Geely CK",
            descripcion: "Bomba de agua original para Geely CK y MK",
            precio: "₡35,000",
            imagen: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            nombre: "Radiador Geely Emgrand",
            descripcion: "Radiador de aluminio para Geely Emgrand X7",
            precio: "₡85,000",
            imagen: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        }
    ],
    mg: [
        {
            nombre: "Sistema de Luces MG ZS",
            descripcion: "Kit de luces LED completo para MG ZS",
            precio: "₡65,000",
            imagen: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            nombre: "Pastillas de Freno MG HS",
            descripcion: "Pastillas de freno cerámicas para MG HS",
            precio: "₡45,000",
            imagen: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        }
    ],
    
    // Marcas Particulares (Top 10 con más mercado)
    toyota: [
        {
            nombre: "Kit de Filtros Toyota Corolla",
            descripcion: "Kit de filtros completo para Toyota Corolla (aire, aceite, combustible)",
            precio: "₡25,000",
            imagen: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            nombre: "Alternador Toyota Camry",
            descripcion: "Alternador de alta eficiencia para Toyota Camry",
            precio: "₡85,000",
            imagen: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            nombre: "Kit de Clutch Toyota Hilux",
            descripcion: "Kit de embrague reforzado para Toyota Hilux",
            precio: "₡135,000",
            imagen: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        }
    ],
    honda: [
        {
            nombre: "Amortiguadores Honda Civic",
            descripcion: "Sistema de suspensión para Honda Civic",
            precio: "₡95,000",
            imagen: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            nombre: "Radiador Honda Accord",
            descripcion: "Radiador de aluminio para Honda Accord",
            precio: "₡75,000",
            imagen: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            nombre: "Kit de Frenos Honda CR-V",
            descripcion: "Kit completo de frenos para Honda CR-V",
            precio: "₡95,000",
            imagen: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        }
    ],
    nissan: [
        {
            nombre: "Motor de Arranque Nissan Sentra",
            descripcion: "Motor de arranque para Nissan Sentra y Versa",
            precio: "₡75,000",
            imagen: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            nombre: "Bomba de Agua Nissan Altima",
            descripcion: "Bomba de agua con termostato para Nissan Altima",
            precio: "₡55,000",
            imagen: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        }
    ],
    hyundai: [
        {
            nombre: "Radiador Hyundai Elantra",
            descripcion: "Radiador de aluminio para Hyundai Elantra y Accent",
            precio: "₡65,000",
            imagen: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            nombre: "Kit de Distribución Hyundai Tucson",
            descripcion: "Kit completo de distribución para Hyundai Tucson",
            precio: "₡125,000",
            imagen: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        }
    ],
    mazda: [
        {
            nombre: "Kit de Clutch Mazda 3",
            descripcion: "Kit completo de clutch para Mazda 3",
            precio: "₡115,000",
            imagen: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            nombre: "Amortiguadores Mazda CX-5",
            descripcion: "Sistema de suspensión premium para Mazda CX-5",
            precio: "₡135,000",
            imagen: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        }
    ],
    bmw: [
        {
            nombre: "Pastillas de Freno BMW Serie 3",
            descripcion: "Pastillas de freno originales para BMW Serie 3 (E90, F30, G20)",
            precio: "₡45,000",
            imagen: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            nombre: "Filtro de Aceite BMW Serie 5",
            descripcion: "Filtro de aceite premium para BMW Serie 5",
            precio: "₡25,000",
            imagen: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            nombre: "Amortiguadores BMW X3",
            descripcion: "Sistema de suspensión deportiva para BMW X3",
            precio: "₡155,000",
            imagen: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        }
    ],
    "mercedes-benz": [
        {
            nombre: "Kit de Distribución Mercedes C-Class",
            descripcion: "Kit completo de distribución para Mercedes C-Class",
            precio: "₡185,000",
            imagen: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            nombre: "Bomba de Combustible Mercedes E-Class",
            descripcion: "Bomba de combustible eléctrica para Mercedes E-Class",
            precio: "₡95,000",
            imagen: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        }
    ],
    volkswagen: [
        {
            nombre: "Kit de Frenos Volkswagen Jetta",
            descripcion: "Sistema completo de frenos para Volkswagen Jetta",
            precio: "₡75,000",
            imagen: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            nombre: "Alternador Volkswagen Golf",
            descripcion: "Alternador de alta eficiencia para Volkswagen Golf",
            precio: "₡85,000",
            imagen: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        }
    ],
    ford: [
        {
            nombre: "Motor de Arranque Ford Focus",
            descripcion: "Motor de arranque para Ford Focus y Fiesta",
            precio: "₡65,000",
            imagen: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            nombre: "Kit de Clutch Ford Escape",
            descripcion: "Kit completo de clutch para Ford Escape",
            precio: "₡115,000",
            imagen: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        }
    ],
    chevrolet: [
        {
            nombre: "Radiador Chevrolet Aveo",
            descripcion: "Radiador de aluminio para Chevrolet Aveo",
            precio: "₡55,000",
            imagen: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            nombre: "Amortiguadores Chevrolet Cruze",
            descripcion: "Sistema de suspensión para Chevrolet Cruze",
            precio: "₡85,000",
            imagen: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        }
    ]
};

/* ===== PRODUCTOS DE EJEMPLO ANTERIORES (mantenidos para compatibilidad) ===== */
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
        nombre: "Filtros Toyota",
        descripcion: "Kit de filtros completo para Toyota Corolla y Camry",
        precio: "₡25,000",
        imagen: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        nombre: "Amortiguadores Honda",
        descripcion: "Sistema de suspensión para Honda Civic y Accord",
        precio: "₡95,000",
        imagen: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        nombre: "Motor de Arranque Nissan",
        descripcion: "Motor de arranque para Nissan Sentra y Altima",
        precio: "₡75,000",
        imagen: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        nombre: "Radiador Hyundai",
        descripcion: "Radiador de aluminio para Hyundai Elantra y Accent",
        precio: "₡65,000",
        imagen: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        nombre: "Kit de Clutch Mazda",
        descripcion: "Kit completo de clutch para Mazda 3 y CX-5",
        precio: "₡115,000",
        imagen: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
];

/* ===== MARCAS POR TIPO DE CARRO ===== */
const marcasChinas = [
    { nombre: "BYD", logo: "img/BYD.png", info: "Líder en vehículos eléctricos" },
    { nombre: "Chery", logo: "img/CHERY.png", info: "Calidad y eficiencia" },
    { nombre: "JAC", logo: "img/JAC.png", info: "Innovación automotriz" },
    { nombre: "Great Wall", logo: "img/GREATWALL.png", info: "SUVs y pickups resistentes" },
    { nombre: "Geely", logo: "img/GEELY.png", info: "Tecnología avanzada" },
    { nombre: "MG", logo: "img/MG.png", info: "Deportividad y estilo" }
];

const marcasParticulares = [
    { nombre: "Toyota", logo: "img/Toyota.png", info: "Calidad que perdura" },
    { nombre: "Honda", logo: "img/Honda.png", info: "Potencia de los sueños" },
    { nombre: "Nissan", logo: "img/Nissan.png", info: "Innovación que emociona" },
    { nombre: "Hyundai", logo: "img/Hyundai.png", info: "Nuevas posibilidades" },
    { nombre: "Mazda", logo: "img/Mazda.png", info: "Zoom-Zoom" },
    { nombre: "BMW", logo: "img/BMW.png", info: "El placer de conducir" },
    { nombre: "Mercedes-Benz", logo: "img/mercedes.png", info: "Lo mejor o nada" },
    { nombre: "Volkswagen", logo: "img/Volkswagen.png", info: "Das Auto" },
    { nombre: "Ford", logo: "img/Ford.png", info: "Go Further" },
    { nombre: "Chevrolet", logo: "img/Chevrolet.png", info: "Find New Roads" }
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
    initializeKeyboardEvents();
});

/* ===== EVENTOS DE TECLADO ===== */
function initializeKeyboardEvents() {
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Cerrar modales con tecla Escape
            const brandModal = document.getElementById('brand-modal');
            const galleryModal = document.getElementById('modal-gallery');
            const successModal = document.getElementById('success-modal');
            
            if (brandModal && brandModal.style.display === 'flex') {
                hideBrandModal();
            } else if (galleryModal && galleryModal.style.display === 'flex') {
                closeModal();
            } else if (successModal && successModal.style.display === 'flex') {
                closeSuccessModal();
            }
        }
    });
}

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
    console.log('Mostrando productos para tipo:', tipo); // Debug
    currentCarType = tipo;
    showBrandModal();
}

function showBrandModal() {
    console.log('showBrandModal - currentCarType:', currentCarType); // Debug
    
    // Si no hay tipo de carro definido, no podemos mostrar el modal
    if (!currentCarType) {
        console.error('Tipo de carro no definido');
        alert('Error: Tipo de vehículo no seleccionado. Por favor, selecciona primero el tipo de vehículo.');
        return;
    }
    
    // CERRAR TODOS LOS MODALES PRIMERO
    const productsModal = document.getElementById('products-modal');
    if (productsModal) {
        productsModal.style.display = 'none';
    }
    
    const brandModal = document.getElementById('brand-modal');
    const brandModalTitle = document.getElementById('brand-modal-title');
    const brandsGrid = document.getElementById('brands-grid');
    
    if (!brandModal || !brandModalTitle || !brandsGrid) return;
    
    const marcas = currentCarType === 'chino' ? marcasChinas : marcasParticulares;
    const titulo = currentCarType === 'chino' ? 'Selecciona una Marca China' : 'Selecciona una Marca';
    const cardClass = currentCarType === 'chino' ? 'chinese' : 'european';
    
    brandModalTitle.textContent = titulo;
    brandsGrid.innerHTML = '';
    
    marcas.forEach(marca => {
        const brandCard = document.createElement('div');
        brandCard.className = `brand-card ${cardClass}`;
        brandCard.onclick = () => showProductsByBrandModal(marca.nombre);
        
        brandCard.innerHTML = `
            <div class="brand-logo">
                <img src="${marca.logo}" alt="${marca.nombre}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <div style="display: none; font-size: 2rem;">${marca.nombre.charAt(0)}</div>
            </div>
            <div class="brand-name">${marca.nombre}</div>
            <div class="brand-info">${marca.info}</div>
        `;
        
        // Agregar animación de entrada
        brandCard.style.opacity = '0';
        brandCard.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            brandCard.style.transition = 'all 0.3s ease';
            brandCard.style.opacity = '1';
            brandCard.style.transform = 'scale(1)';
        }, Math.random() * 200);
        
        brandsGrid.appendChild(brandCard);
    });
    
    brandModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    console.log('Modal de marcas abierto');
}

function hideBrandModal() {
    const brandModal = document.getElementById('brand-modal');
    if (brandModal) {
        brandModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function showProductsByBrandModal(marcaNombre) {
    // Asegurar que el modal de marcas esté cerrado
    hideBrandModal();
    
    const productsModal = document.getElementById('products-modal');
    const productsModalGrid = document.getElementById('products-modal-grid');
    const productsModalTitle = document.getElementById('products-modal-title');
    
    if (!productsModal || !productsModalGrid || !productsModalTitle) return;
    
    const marcaKey = marcaNombre.toLowerCase().replace('-', '');
    const productos = productosPorMarca[marcaKey] || [];
    
    productsModalTitle.textContent = `Productos para ${marcaNombre}`;
    productsModalGrid.innerHTML = '';
    
    if (productos.length === 0) {
        // Si no hay productos específicos para esa marca, mostrar mensaje
        productsModalGrid.innerHTML = `
            <div class="no-products-message">
                <i class="fas fa-search"></i>
                <h3>Productos en consulta</h3>
                <p>Estamos actualizando nuestro inventario para ${marcaNombre}.</p>
                <p>Contáctanos para consultar disponibilidad de piezas específicas.</p>
                <a href="https://wa.me/50622223333?text=Hola,%20necesito%20información%20sobre%20piezas%20para%20${marcaNombre}" target="_blank" class="btn btn-contact btn-whatsapp">
                    <i class="fab fa-whatsapp"></i> Consultar por WhatsApp
                </a>
                <a href="contacto.html" class="btn btn-contact">
                    <i class="fas fa-phone"></i> Contactar
                </a>
            </div>
        `;
    } else {
        productos.forEach(producto => {
            const productCard = createProductModalCard(producto, marcaNombre);
            productsModalGrid.appendChild(productCard);
        });
    }
    
    productsModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function goBackToBrands() {
    console.log('goBackToBrands - currentCarType:', currentCarType); // Debug
    
    // Función específica para el botón "Cambiar Marca"
    // PASO 1: Cerrar TODOS los modales primero
    closeAllModals();
    
    // PASO 2: Verificar que tenemos el tipo de carro
    if (!currentCarType) {
        console.error('currentCarType no está definido, volviendo a selección inicial');
        return;
    }
    
    // PASO 3: Abrir modal de marcas después de una pausa
    setTimeout(() => {
        console.log('Abriendo modal de marcas...');
        showBrandModal();
    }, 200);
}

function createProductModalCard(producto, marca) {
    const card = document.createElement('div');
    card.className = 'product-modal-card';
    
    const whatsappMessage = encodeURIComponent(`Hola, me interesa el ${producto.nombre} para ${marca}. ¿Podrían darme más información sobre disponibilidad y precio?`);
    
    card.innerHTML = `
        <div class="product-modal-image" style="background-image: url('${producto.imagen}')"></div>
        <div class="product-modal-info">
            <h4>${producto.nombre}</h4>
            <p>${producto.descripcion}</p>
            <div class="product-modal-price">${producto.precio}</div>
            <div class="product-modal-actions">
                <a href="https://wa.me/50622223333?text=${whatsappMessage}" target="_blank" class="btn-contact btn-whatsapp">
                    <i class="fab fa-whatsapp"></i> WhatsApp
                </a>
                <a href="contacto.html" class="btn-contact">
                    <i class="fas fa-phone"></i> Contactar
                </a>
            </div>
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

function hideProductsModal() {
    const productsModal = document.getElementById('products-modal');
    if (productsModal) {
        productsModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        console.log('Modal de productos cerrado');
    }
}

function closeAllModals() {
    // Función de utilidad para cerrar todos los modales
    const modals = ['products-modal', 'brand-modal', 'modal-gallery', 'success-modal'];
    
    modals.forEach(modalId => {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'none';
        }
    });
    
    document.body.style.overflow = 'auto';
    console.log('Todos los modales cerrados');
}

function showProductsByBrand(marcaNombre) {
    hideBrandModal();
    
    const productsSection = document.getElementById('products-section');
    const productsGrid = document.getElementById('products-grid');
    const productsTitle = document.getElementById('products-title');
    
    if (!productsSection || !productsGrid || !productsTitle) return;
    
    const marcaKey = marcaNombre.toLowerCase().replace('-', '');
    const productos = productosPorMarca[marcaKey] || [];
    
    if (productos.length === 0) {
        // Si no hay productos específicos para esa marca, mostrar mensaje
        productsTitle.textContent = `Productos para ${marcaNombre}`;
        productsGrid.innerHTML = `
            <div class="no-products-message">
                <div style="text-align: center; padding: 60px 20px; color: #7f8c8d;">
                    <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 20px; color: #bdc3c7;"></i>
                    <h3 style="margin-bottom: 15px; color: #2c3e50;">Productos en consulta</h3>
                    <p style="margin-bottom: 25px;">Estamos actualizando nuestro inventario para ${marcaNombre}.</p>
                    <p style="margin-bottom: 25px;">Contáctanos para consultar disponibilidad de piezas específicas.</p>
                    <a href="contacto.html" class="btn btn-primary">
                        <i class="fas fa-phone"></i> Contactar
                    </a>
                </div>
            </div>
        `;
    } else {
        productsTitle.textContent = `Productos para ${marcaNombre}`;
        productsGrid.innerHTML = '';
        
        productos.forEach(producto => {
            const productCard = createProductCard(producto);
            productsGrid.appendChild(productCard);
        });
    }
    
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
            
            if (valor === 'chino' || valor === 'particular') {
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
    const marcas = tipo === 'chino' ? marcasChinas : marcasParticulares;
    
    selectElement.innerHTML = '<option value="">Selecciona una marca</option>';
    
    marcas.forEach(marca => {
        const option = document.createElement('option');
        option.value = marca.nombre.toLowerCase();
        option.textContent = marca.nombre;
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
    const brandModal = document.getElementById('brand-modal');
    const productsModal = document.getElementById('products-modal');
    
    if (e.target === modal) {
        closeModal();
    }
    
    if (e.target === successModal) {
        closeSuccessModal();
    }
    
    if (e.target === brandModal) {
        hideBrandModal();
    }
    
    if (e.target === productsModal) {
        hideProductsModal();
    }
});

// Cerrar modales con la tecla Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const brandModal = document.getElementById('brand-modal');
        const productsModal = document.getElementById('products-modal');
        const galleryModal = document.getElementById('modal-gallery');
        const successModal = document.getElementById('success-modal');
        
        if (brandModal && brandModal.style.display === 'flex') {
            hideBrandModal();
        } else if (productsModal && productsModal.style.display === 'flex') {
            hideProductsModal();
        } else if (galleryModal && galleryModal.style.display === 'flex') {
            closeModal();
        } else if (successModal && successModal.style.display === 'flex') {
            closeSuccessModal();
        }
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
window.showBrandModal = showBrandModal;
window.hideBrandModal = hideBrandModal;
window.showProductsByBrand = showProductsByBrand;
window.showProductsByBrandModal = showProductsByBrandModal;
window.hideProductsModal = hideProductsModal;
window.closeAllModals = closeAllModals;
window.goBackToBrands = goBackToBrands;
window.openModal = openModal;
window.closeModal = closeModal;
window.nextImage = nextImage;
window.prevImage = prevImage;
window.closeSuccessModal = closeSuccessModal;
