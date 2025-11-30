// Funcionalidad del menú móvil
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Cerrar menú al hacer clic en un enlace
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    applyServiceImageConfig();
    // Sobrescribir imágenes de servicios si existen archivos locales con el nombre del servicio
    applyServiceImageOverrides();
});

// Efecto de scroll en el header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header') || document.querySelector('.header');
    if (!header) return;
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Smooth scrolling para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerEl = document.querySelector('header') || document.querySelector('.header');
            const headerHeight = headerEl ? headerEl.offsetHeight : 0;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Animaciones al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animaciones
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.service-card, .gallery-item, .contact-form, .feature');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Funcionalidad del formulario de contacto
const contactFormEl = document.querySelector('.contact-form');
if (contactFormEl) {
    contactFormEl.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener datos del formulario
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Validación básica
        if (!data.nombre || !data.email || !data.servicio) {
            showNotification('Por favor, completa todos los campos obligatorios.', 'error');
            return;
        }
        
        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showNotification('Por favor, ingresa un email válido.', 'error');
            return;
        }
        
        // Simular envío del formulario
        showNotification('¡Mensaje enviado correctamente! Te contactaremos pronto.', 'success');
        this.reset();
        
        // Aquí podrías agregar la lógica para enviar el formulario a un servidor
        console.log('Datos del formulario:', data);
    });
}

// Función para mostrar notificaciones
function showNotification(message, type = 'info') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Agregar estilos
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        max-width: 400px;
        animation: slideIn 0.3s ease;
    `;
    
    // Agregar al DOM
    document.body.appendChild(notification);
    
    // Función para cerrar
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto-remover después de 5 segundos
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Lazy loading para imágenes (cuando se agreguen imágenes reales)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Contador animado para estadísticas (opcional)
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.dataset.target);
        const duration = 2000; // 2 segundos
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// Efecto parallax sutil en el hero
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.5;
    
    if (hero) {
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Galería de imágenes (funcionalidad básica)
function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Aquí podrías implementar un lightbox o modal
            console.log('Galería item clicked');
        });
    });
}

// Reemplazo de imágenes de servicios con fotos temáticas de Picsum

// Cargar imágenes por nombre de servicio si existen en /images
function applyServiceImageOverrides() {
    const imgs = document.querySelectorAll('img[data-service]');
    imgs.forEach(img => {
        if (img.dataset.imgLocked === 'true') return;
        const service = img.dataset.service;
        if (!service) return;

        const variations = {
            'esmaltado-semipermanente': [
                'images/esmaltado semipermanente.webp',
                'images/esmaltado semipermanente.jpg',
                'images/esmaltado semipermanente.png',
                'images/esmaltado semi.jpg.jpg'
            ],
            'kapping': [
                'images/kapping.webp',
                'images/kapping.jpg',
                'images/kapping.png',
                'images/kapping.jpg.jpg'
            ],
            'unas-esculpidas': [
                'images/unas esculpidas.webp',
                'images/unas esculpidas.jpg',
                'images/unas esculpidas.png',
                'images/esculpidas.jpg',
                'images/esculpidasjpg.jpg',
                'images/esculpidas.jpg.jpg'
            ],
            'pedicura': [
                'images/pedicura.webp',
                'images/pedicura.jpg',
                'images/pedicura.png',
                'images/pedicura.jpg.jpg'
            ],
            'estetica-mantenimiento': [
                'images/estetica mantenimiento.webp',
                'images/estetica mantenimiento.jpg',
                'images/estetica mantenimiento.png',
                'images/estetica-mantenimiento.webp',
                'images/estetica-mantenimiento.jpg',
                'images/estetica-mantenimiento.png',
                'images/estetica y mantenimiento.jpg.jpg',
                'images/estetica y mantenimiento 2.jpg'
            ],
            'pelo-color': [
                'images/pelo-color.jpg',
                'images/color y mechas.jpg.jpg',
                'images/photo_2025-10-15_15-04-31.jpg'
            ],
            'pelo-corte': [
                'images/pelo-corte.jpg',
                'images/corte y forma.jpg.jpg',
                'images/corte y forma 2.jpg.jpg',
                'images/photo_2025-10-15_15-04-22.jpg'
            ],
            'pelo-peinado': [
                'images/pelo-peinado.jpg',
                'images/peinados.jpg',
                'images/peinados 1.jpg.jpg',
                'images/peinados 2.jpg',
                'images/peinados 3.jpg',
                'images/peinados 4.jpg',
                'images/peinados 5.jpg',
                'images/photo_2025-10-15_15-04-28.jpg'
            ],
            'depilacion-delicadas': [
                'images/depilacion-delicadas.jpg',
                'images/depilacion.jpg.jpg',
                'images/depilacion-delicadas.svg'
            ]
        };

        const baseCandidates = [
            `images/${service}.webp`,
            `images/${service}.jpg`,
            `images/${service}.png`
        ];
        const candidates = [...baseCandidates, ...(variations[service] || [])];

        const tryLoad = (i) => {
            if (i >= candidates.length) return; // sin override, mantiene src original
            const test = new Image();
            test.onload = () => {
                // Si la imagen existe, usarla como fuente
                img.src = candidates[i];
            };
            test.onerror = () => tryLoad(i + 1);
            // Evitar caché agresivo en algunos navegadores
            test.src = candidates[i] + `?v=${Date.now()}`;
        };

        tryLoad(0);
    });
}

function applyServiceImageConfig() {
    fetch('images-config.json', { cache: 'no-store' })
        .then(r => r.ok ? r.json() : null)
        .then(cfg => {
            if (!cfg) return;
            const imgs = document.querySelectorAll('img[data-service]');
            imgs.forEach(img => {
                const key = img.dataset.service;
                const path = cfg[key];
                if (!path) return;
                const test = new Image();
                test.onload = () => {
                    img.src = path;
                    img.dataset.imgLocked = 'true';
                };
                if (/^data:/i.test(path)) {
                    test.src = path;
                } else {
                    test.src = path + `?v=${Date.now()}`;
                }
            });
        })
        .catch(() => {});
}

// Funcionalidad de reserva de citas (básica)
function initBookingSystem() {
    const bookingButtons = document.querySelectorAll('.btn[href="#contacto"]');
    
    bookingButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // Scroll al formulario de contacto
            const contactSection = document.getElementById('contacto');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
                
                // Destacar el formulario
                setTimeout(() => {
                    const form = contactSection.querySelector('.contact-form');
                    if (form) {
                        form.style.animation = 'pulse 2s ease-in-out';
                    }
                }, 500);
            }
        });
    });
}

// Validación en tiempo real del formulario
function initFormValidation() {
    const form = document.querySelector('.contact-form');
    if (!form) return;
    const inputs = form.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            clearFieldError(this);
        });
    });
}

function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    // Validaciones específicas por tipo de campo
    switch(field.type) {
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (value && !emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Email inválido';
            }
            break;
        case 'tel':
            const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
            if (value && !phoneRegex.test(value.replace(/\s/g, ''))) {
                isValid = false;
                errorMessage = 'Teléfono inválido';
            }
            break;
        default:
            if (field.hasAttribute('required') && !value) {
                isValid = false;
                errorMessage = 'Este campo es obligatorio';
            }
    }
    
    if (!isValid) {
        showFieldError(field, errorMessage);
    } else {
        clearFieldError(field);
    }
    
    return isValid;
}

function showFieldError(field, message) {
    clearFieldError(field);
    
    field.style.borderColor = '#f44336';
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
        color: #f44336;
        font-size: 0.8rem;
        margin-top: 0.25rem;
    `;
    
    field.parentNode.appendChild(errorDiv);
}

function clearFieldError(field) {
    field.style.borderColor = '#e0e0e0';
    
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
}

// Inicializar todas las funcionalidades
document.addEventListener('DOMContentLoaded', function() {
    lazyLoadImages();
    initGallery();
    initBookingSystem();
    initFormValidation();
    
    // Agregar estilos CSS para animaciones
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.02); }
            100% { transform: scale(1); }
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .notification-close:hover {
            opacity: 0.8;
        }
    `;
    document.head.appendChild(style);
});

// Funcionalidad de búsqueda (para futuras expansiones)
function initSearch() {
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            // Implementar lógica de búsqueda
            console.log('Búsqueda:', query);
        });
    }
}

// Funcionalidad de favoritos (para futuras expansiones)
function initFavorites() {
    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    
    favoriteButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
            // Implementar lógica de favoritos
        });
    });
}

// Optimización de rendimiento
function optimizePerformance() {
    // Throttle para eventos de scroll
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(function() {
                scrollTimeout = null;
                // Lógica de scroll aquí
            }, 16); // ~60fps
        }
    });
    
    // Debounce para resize
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            // Lógica de resize aquí
        }, 250);
    });
}

// Inicializar optimizaciones
optimizePerformance();
