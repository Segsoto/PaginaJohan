# AutoParts Pro - Página Web de Repuestos Automotrices

## 📋 Descripción del Proyecto

AutoParts Pro es una página web moderna y responsiva diseñada para un negocio especializado en la venta de piezas de repuesto para carros chinos y europeos. El sitio web ofrece una experiencia de usuario optimizada con funcionalidades interactivas y un diseño profesional.

## 🚀 Características Principales

### ✨ Funcionalidades
- **Diseño Totalmente Responsivo**: Adaptable a móviles, tablets y escritorio
- **Módulo de Selección de Vehículos**: Sistema interactivo para filtrar productos por tipo de carro
- **Formulario de Contacto Avanzado**: Con validación en tiempo real y opciones específicas
- **Galería Interactiva**: Sistema de filtros y modal de visualización de imágenes
- **Mapa de Google Integrado**: Ubicación del negocio con información de contacto
- **Botón Flotante de WhatsApp**: Acceso directo a comunicación
- **SEO Optimizado**: Meta tags, títulos y descripciones optimizadas
- **Animaciones Suaves**: Transiciones y efectos visuales modernos

### 📱 Páginas Incluidas
1. **Inicio** (`index.html`) - Página principal con hero, selección de productos y características
2. **Nosotros** (`nosotros.html`) - Historia de la empresa, misión, visión y equipo
3. **Servicios** (`servicios.html`) - Descripción detallada de todos los servicios
4. **Galería** (`galeria.html`) - Showcase de productos y trabajos realizados
5. **Contacto** (`contacto.html`) - Formulario de contacto, mapa y información

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Diseño moderno con Flexbox y Grid
- **JavaScript (Vanilla)**: Interactividad sin dependencias externas
- **Font Awesome**: Iconografía profesional
- **Google Maps**: Integración de mapas
- **Imágenes de Unsplash**: Placeholders de alta calidad

## 📁 Estructura del Proyecto

```
PaginaJohan/
├── index.html              # Página principal
├── nosotros.html           # Página sobre la empresa
├── servicios.html          # Página de servicios
├── galeria.html            # Galería de productos
├── contacto.html           # Página de contacto
├── css/
│   └── styles.css          # Estilos principales
├── js/
│   └── script.js           # JavaScript principal
├── img/                    # Carpeta para imágenes locales
└── README.md               # Documentación
```

## 🎨 Paleta de Colores

- **Primario**: `#e31e24` (Rojo corporativo)
- **Primario Oscuro**: `#b71c21`
- **Secundario**: `#2c3e50` (Azul oscuro)
- **Acento**: `#ecf0f1` (Gris claro)
- **Texto Oscuro**: `#2c3e50`
- **Texto Claro**: `#7f8c8d`

## 🔧 Características Técnicas

### CSS
- **Variables CSS**: Sistema de colores y espaciado consistente
- **Flexbox y Grid**: Layouts modernos y responsivos
- **Animaciones CSS**: Transiciones suaves y efectos hover
- **Media Queries**: Breakpoints para diferentes dispositivos
- **Modo Alto Contraste**: Soporte para accesibilidad
- **Modo Impresión**: Estilos optimizados para impresión

### JavaScript
- **Módulo de Productos**: Sistema dinámico de carga de productos
- **Validación de Formularios**: Validación en tiempo real
- **Galería Modal**: Navegación de imágenes con teclado
- **Animaciones de Scroll**: Intersection Observer API
- **Filtros de Galería**: Sistema de filtrado dinámico
- **FAQ Interactivo**: Acordeón con animaciones

### Accesibilidad
- **Navegación por Teclado**: Soporte completo
- **Focus Visible**: Indicadores claros de foco
- **Alt Text**: Descripciones en todas las imágenes
- **Roles ARIA**: Elementos semánticamente correctos
- **Contraste**: Cumple con WCAG 2.1 AA

## 📱 Responsividad

### Breakpoints
- **Móvil**: < 768px
- **Tablet**: 768px - 1024px
- **Escritorio**: > 1024px

### Características Responsivas
- Navegación con menú hamburguesa en móviles
- Grids adaptables según el tamaño de pantalla
- Imágenes optimizadas para diferentes resoluciones
- Formularios adaptados para touch

## 🚀 Instalación y Uso

### Requisitos
- Navegador web moderno
- Servidor web local (opcional para desarrollo)

### Instalación
1. Clona o descarga el repositorio
2. Abre `index.html` en tu navegador
3. Para desarrollo, usa un servidor local como Live Server de VS Code

### Personalización
1. **Colores**: Modifica las variables CSS en `:root`
2. **Contenido**: Actualiza el texto en los archivos HTML
3. **Imágenes**: Reemplaza los URLs de Unsplash con imágenes propias
4. **Datos de Contacto**: Actualiza información de contacto y mapa
5. **WhatsApp**: Cambia el número de teléfono en el botón flotante

## 📊 SEO y Performance

### Optimizaciones SEO
- Meta tags descriptivos en cada página
- Open Graph para redes sociales
- Estructura de headings jerárquica
- URLs amigables y descriptivas
- Sitemap implícito a través de navegación

### Performance
- Imágenes lazy loading
- CSS y JS minificables
- Animaciones optimizadas con transform
- Debounce en eventos de scroll
- Intersection Observer para animaciones

## 🔒 Seguridad

- Validación de formularios en frontend y backend (recomendado)
- Sanitización de datos de entrada
- HTTPS recomendado para producción
- CSP headers recomendados

## 🐛 Funcionalidades del Formulario de Contacto

### Campos Incluidos
- Nombre completo (requerido)
- Correo electrónico (requerido, con validación)
- Teléfono (requerido, with validación de formato)
- Tipo de vehículo (requerido)
- Marca del vehículo (dinámico según tipo)
- Modelo y año del vehículo
- Tipo de servicio requerido
- Mensaje (requerido)
- Checkbox de urgencia
- Newsletter subscription
- Términos y condiciones (requerido)

### Validaciones
- Campos requeridos marcados claramente
- Validación de email con regex
- Validación de teléfono
- Mensajes de error específicos
- Feedback visual en tiempo real

## 🖼️ Galería de Productos

### Categorías de Filtro
- Todos los productos
- Productos específicos
- Instalaciones realizadas
- Fotos del taller
- Carros chinos
- Carros europeos

### Funcionalidades
- Modal de visualización full-screen
- Navegación con teclado (flechas, Escape)
- Navegación con botones prev/next
- Información detallada de cada imagen
- Animaciones de transición

## 📞 Información de Contacto (Ejemplo)

- **Dirección**: Av. Principal 123, San José, Costa Rica
- **Teléfono**: +506 2222-3333
- **WhatsApp**: +506 8888-9999
- **Email**: info@autopartspro.com
- **Horarios**: Lun-Vie 8:00-18:00, Sáb 8:00-16:00

## 🔮 Futuras Mejoras

- [ ] Sistema de gestión de contenido (CMS)
- [ ] Carrito de compras online
- [ ] Chat en vivo
- [ ] Sistema de citas online
- [ ] App móvil complementaria
- [ ] Integración con redes sociales
- [ ] Sistema de reviews y testimonios
- [ ] Multi-idioma (inglés)

## 📝 Notas de Desarrollo

### Para Desarrolladores
- Código comentado y bien estructurado
- Funciones modulares y reutilizables
- Event listeners organizados
- Error handling implementado
- Console logs para debugging

### Para Diseñadores
- Sistema de design tokens
- Componentes reutilizables
- Guía de estilos implícita
- Iconografía consistente

## 📄 Licencia

Este proyecto fue creado como ejemplo educativo. Puedes usar y modificar el código según tus necesidades.

## 🤝 Contribuciones

Las mejoras y sugerencias son bienvenidas. Para contribuir:
1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📧 Contacto

Para preguntas sobre el proyecto o personalizaciones, no dudes en contactar.

---

**AutoParts Pro** - Tu socio confiable en repuestos automotrices de calidad 🚗✨
