<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Foodies Sincelejo - Las Mejores Comidas Rápidas</title>
    <!-- Carga de Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Configuración de la fuente Inter y un esquema de color vibrante -->
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        body {
            font-family: 'Inter', sans-serif;
            /* Fondo oscuro para un look premium y que resalten los colores de la comida */
            background-color: #1a1a1a; 
            color: #ffffff;
            line-height: 1.6;
        }
        /* Colores primarios de comida rápida: Rojo intenso y Amarillo/Dorado */
        .primary-color { background-color: #e53e3e; } /* Rojo intenso */
        .secondary-color { color: #f6e05e; } /* Amarillo dorado */
        .border-secondary { border-color: #f6e05e; }
        .hover-bg-red:hover { background-color: #c53030; }
        
        /* Estilos para que el scrollbar horizontal sea sutil y no estorbe */
        .horizontal-scroll {
            scrollbar-width: thin; /* Firefox */
            scrollbar-color: #e53e3e #333333; /* Firefox */
            /* Webkit (Chrome, Safari, Edge) */
            padding-bottom: 0.75rem; /* Espacio para el scrollbar */
        }
        .horizontal-scroll::-webkit-scrollbar { height: 8px; }
        .horizontal-scroll::-webkit-scrollbar-thumb { background: #e53e3e; border-radius: 4px; }
        .horizontal-scroll::-webkit-scrollbar-track { background: #333333; }
    </style>
</head>
<body class="antialiased">

    <!-- Navbar/Header Fijo y Llamativo -->
    <header class="sticky top-0 z-50 bg-black bg-opacity-90 shadow-2xl">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <h1 class="text-3xl font-extrabold secondary-color tracking-wider uppercase">
                Foodies Sincelejo
            </h1>
            <nav class="flex space-x-4 items-center">
                <a href="#menu" class="text-white hover:secondary-color transition duration-300 font-medium">Carta</a>
                <a href="#contacto" class="text-white hover:secondary-color transition duration-300 font-medium">Contacto</a>
                <!-- Botón de WhatsApp -->
                <button onclick="goToWhatsApp()" class="primary-color text-white px-4 py-2 rounded-lg font-bold shadow-lg transform transition duration-300 hover:scale-105 hover-bg-red flex items-center">
                    <!-- Icono de WhatsApp (SVG simple) -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
                        <path d="M5 20l1.5-6.5L18 5 5 20z"></path>
                        <path d="M19 19H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2z"></path>
                    </svg>
                    PIDE AHORA
                </button>
            </nav>
        </div>
    </header>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <!-- Sección Principal (Hero) - MODIFICADA -->
        <section id="hero" class="mb-20 text-center primary-color p-12 rounded-3xl shadow-2xl">
            <p class="text-lg font-semibold text-white mb-4">¡Bienvenidos a</p>
            <h2 class="text-6xl sm:text-7xl font-black text-white leading-tight mb-6">
                <span class="secondary-color block sm:inline-block">FOODIES</span>
            </h2>
            <p class="text-xl text-white font-light max-w-3xl mx-auto">
                Descubre nuestra selección de hamburguesas, perros calientes, salchipapas y mucho más. Todo preparado con los mejores ingredientes y el mejor toque.
            </p>
            <!-- NOTA ELIMINADA -->
        </section>

        <!-- Sección de la Carta (Menú) -->
        <section id="menu" class="mb-20">
            <h3 class="text-4xl font-bold text-center mb-12 secondary-color border-b-4 border-secondary pb-3 inline-block mx-auto uppercase tracking-wider">
                Nuestra Carta
            </h3>
            <div id="menu-container" class="space-y-16">
                <!-- El menú se renderizará aquí por JavaScript -->
            </div>
        </section>

        <!-- Sección de Contacto y Redes Sociales -->
        <section id="contacto" class="py-16 bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
            <h3 class="text-3xl font-bold text-center mb-10 secondary-color">¿Dónde Encontrarnos y Contactarnos?</h3>
            
            <div class="grid md:grid-cols-2 gap-10">
                
                <!-- Dirección -->
                <div class="flex flex-col items-center p-6 bg-gray-700 rounded-xl">
                    <div class="primary-color p-3 rounded-full mb-4">
                        <!-- Icono de Mapa -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    </div>
                    <p class="text-lg font-semibold text-white mb-2">Nuestra Ubicación</p>
                    <p class="text-gray-300 text-center">
                        Crr 24w #4c -15<br>Sincelejo, Sucre
                    </p>
                </div>

                <!-- Escríbenos (WhatsApp) -->
                <div class="flex flex-col items-center p-6 bg-gray-700 rounded-xl">
                    <div class="primary-color p-3 rounded-full mb-4">
                        <!-- Icono de Chat -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    </div>
                    <p class="text-lg font-semibold text-white mb-2">Escríbenos y Haz tu Pedido</p>
                    <button onclick="goToWhatsApp()" class="primary-color text-white px-6 py-3 rounded-lg font-bold shadow-lg transform transition duration-300 hover:scale-105 hover-bg-red mt-3">
                        Abrir Chat de WhatsApp
                    </button>
                    <p class="text-sm text-gray-400 mt-2">Teléfono: 312 686 1354</p>
                </div>
            </div>
            
            <!-- Instagram Link -->
            <div class="mt-12 text-center">
                <a href="https://www.instagram.com/foodiessincelejooficial?igsh=MTJudG9yN3FyYWtzdw==" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-xl secondary-color hover:text-white transition duration-300 p-3 rounded-full border border-secondary hover:border-white">
                    <!-- Icono de Instagram (SVG) -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.5" y1="6.5" y2="6.5"></line>
                    </svg>
                    Síguenos en Instagram
                </a>
            </div>
        </section>

    </main>

    <footer class="text-center py-6 bg-black text-gray-400">
        <p>&copy; 2024 Foodies Sincelejo. Todos los derechos reservados.</p>
    </footer>

    <script>
        // --- 1. Datos del Menú (Multiplicados por 1000 para reflejar Pesos Colombianos) ---
        const priceMultiplier = 1000;
        
        // Función para formatear el número como moneda (ej: 12000 -> 12.000)
        function formatPrice(number) {
            // Utilizamos Intl.NumberFormat para un formato de moneda local limpio
            return new Intl.NumberFormat('es-CO', { 
                minimumFractionDigits: 0 
            }).format(number);
        }

        const menuData = [
            // Hamburguesas (Ordenadas por precio base: 12, 16, 20, 25, 28)
            { category: "Hamburguesas", name: "Hamburguesa sencilla", basePrice: 12 * priceMultiplier, gratinadoPrice: 16 * priceMultiplier, description: "Carne de la casa, tocineta caramelizada, ripio, lechuga, salsa rosada, salsa de pimentón, salsa tártara" },
            { category: "Hamburguesas", name: "Hamburguesa de pollo", basePrice: 16 * priceMultiplier, gratinadoPrice: 20 * priceMultiplier, description: "Pollo apanado, tocineta caramelizada, ripio, lechuga, salsa rosada, salsa de pimentón, salsa tártara" },
            { category: "Hamburguesas", name: "Chicken Burger", basePrice: 20 * priceMultiplier, gratinadoPrice: 24 * priceMultiplier, description: "Carne de la casa, pollo apanado, tocineta, papa ripio, lechuga, salsa de tocineta, queso mozzarella, queso cheddar, salsa rosada, salsa de pimentón, salsa tártara." },
            { category: "Hamburguesas", name: "Kimburger", basePrice: 25 * priceMultiplier, gratinadoPrice: 29 * priceMultiplier, description: "Carne de la casa, cerdo, ranchera, papa ripio, queso mozzarella, tocineta caramelizada, salsa tártara, salsa rosada y salsa de pimentón" },
            { category: "Hamburguesas", name: "Mix Burger", basePrice: 28 * priceMultiplier, gratinadoPrice: 32 * priceMultiplier, description: "Carne de la casa, pollo apanado, cerdo, ranchera, tocineta, tocineta caramelizada, papa ripio, queso mozzarella, salsa tártara, salsas de pimentón, salsa rosada" },

            // Perros (Ordenados por precio base: 7, 13, 16, 18, 22, 22, 25)
            { category: "Perros", name: "Perro sencillo", basePrice: 7 * priceMultiplier, gratinadoPrice: 11 * priceMultiplier, description: "Salchicha, tártara, salsa rosada, salsa de pimentón, papa ripio, lechuga" },
            { category: "Perros", name: "Polliperro", basePrice: 13 * priceMultiplier, gratinadoPrice: 17 * priceMultiplier, description: "Pollo, lechuga, papa ripio, salsa rosada de la casa, salsa tártara, salsa de pimentón" },
            { category: "Perros", name: "Perro ranchero", basePrice: 16 * priceMultiplier, gratinadoPrice: 20 * priceMultiplier, description: "Ranchera, lechuga, papa ripio, salsa tártara, salsa de pimentón, salsa rosada" },
            { category: "Perros", name: "Perro suizo", basePrice: 18 * priceMultiplier, gratinadoPrice: 22 * priceMultiplier, description: "Suiza, lechuga, papa ripio, salsa tártara, salsa de pimentón, salsa rosada" },
            { category: "Perros", name: "Chick perro", basePrice: 22 * priceMultiplier, gratinadoPrice: 26 * priceMultiplier, description: "Pollo, tocineta, ranchera, papa ripio, lechuga, salsa tártara, salsa de pimentón" },
            { category: "Perros", name: "Porciperro", basePrice: 22 * priceMultiplier, gratinadoPrice: 26 * priceMultiplier, description: "Lomito, ranchera, tocineta, lechuga, papa ripio, salsa tártara, salsa de pimentón, salsa rosada" },
            { category: "Perros", name: "Mix perro", basePrice: 25 * priceMultiplier, gratinadoPrice: 29 * priceMultiplier, description: "Cerdo, pollo, suiza, tocineta, lechuga, salsa rosada de la casa, salsa tártara, salsa de pimentón" },
            
            // Salchipapas (Ordenadas por precio base: 13, 17, 17, 20, 25)
            { category: "Salchipapas", name: "SENCILLA", basePrice: 13 * priceMultiplier, gratinadoPrice: 17 * priceMultiplier, description: "Salchicha sencilla, lechuga, ripio, queso costeño, salsa tártara, salsa rosada" },
            { category: "Salchipapas", name: "Salchipapa chick", basePrice: 17 * priceMultiplier, gratinadoPrice: 21 * priceMultiplier, description: "Pollo, tocineta, ranchera lechuga, papa ripio, salsa tártara, salsa de pimentón, salsa rosada" },
            { category: "Salchipapas", name: "Salchipapa grill", basePrice: 17 * priceMultiplier, gratinadoPrice: 21 * priceMultiplier, description: "Ranchera, tocineta, buty, lechuga, papa ripio, salsa tártara, salsa de pimentón, salsa rosada" },
            { category: "Salchipapas", name: "Salchipapa mix", basePrice: 20 * priceMultiplier, gratinadoPrice: 24 * priceMultiplier, description: "Cerdo, pollo, suiza, lechuga, salsa rosada de la casa, salsa tártara, salsa de pimentón, ripio" },
            { category: "Salchipapas", name: "Salchipapa la R", basePrice: 25 * priceMultiplier, gratinadoPrice: 29 * priceMultiplier, description: "Salchicha sencilla, Ranchera, tocineta, buty, suiza, chorizo ternera, lechuga, papa ripio, salsa tártara, salsa de pimentón, salsa rosada" },

            // Maduritos (Ordenadas por precio base: 20, 24, 26, 28)
            { category: "Maduritos", name: "Madurito grill", basePrice: 20 * priceMultiplier, gratinadoPrice: 24 * priceMultiplier, description: "Ranchera, tocineta, buty, lechuga, papa ripio, salsa tártara, salsa de pimentón, salsa rosada" },
            { category: "Maduritos", name: "Madurito la R", basePrice: 24 * priceMultiplier, gratinadoPrice: 28 * priceMultiplier, description: "Salchicha sencilla, Ranchera, tocineta, buty, suiza, chorizo ternera lechuga, papa ripio, salsa tártara, salsa de pimentón, salsa rosada" },
            { category: "Maduritos", name: "Madurito chick", basePrice: 26 * priceMultiplier, gratinadoPrice: 30 * priceMultiplier, description: "Pollo, tocineta, ranchera lechuga, papa ripio, salsa tártara, salsa de pimentón, salsa rosada" },
            { category: "Maduritos", name: "Madurito mix", basePrice: 28 * priceMultiplier, gratinadoPrice: 32 * priceMultiplier, description: "Cerdo, pollo, suiza, lechuga, salsa rosada de la casa, salsa tártara, salsa de pimentón, ripio" },

            // Chorizitos (Ordenados por precio base: 12, 12, 15, 20)
            { category: "Chorizitos", name: "Cerdo", basePrice: 12 * priceMultiplier, gratinadoPrice: null, description: "Papa cocida, yuca, chimichurri, salsa tártara, salsa de pimentón" },
            { category: "Chorizitos", name: "Carne", basePrice: 12 * priceMultiplier, gratinadoPrice: null, description: "Papa cocida, yuca, chimichurri, salsa tártara, salsa de pimentón" },
            { category: "Chorizitos", name: "Mixto", basePrice: 15 * priceMultiplier, gratinadoPrice: null, description: "Cerdo, carne, Papa cocida, yuca, chimichurri, salsa tártara, salsa de pimentón" },
            { category: "Chorizitos", name: "Chorizo la R", basePrice: 20 * priceMultiplier, gratinadoPrice: null, description: "Cerdo, carne, suiza, buty, Papa cocida, yuca, chimichurri, salsa tártara, salsa de pimentón" },

            // Asados (Ordenados por precio base: 22, 22, 26, 32)
            { category: "Asados", name: "Cerdo", basePrice: 22 * priceMultiplier, gratinadoPrice: 26 * priceMultiplier, description: "Cerdo, Papa cocida, yuca, chimichurri, salsa tártara, salsa de pimentón" },
            { category: "Asados", name: "Pechuga", basePrice: 22 * priceMultiplier, gratinadoPrice: 26 * priceMultiplier, description: "Pechuga, Papa cocida, yuca, chimichurri, salsa tártara, salsa de pimentón" },
            { category: "Asados", name: "Chuleta", basePrice: 26 * priceMultiplier, gratinadoPrice: 30 * priceMultiplier, description: "Chuleta, Papa cocida, yuca, chimichurri, salsa tártara, salsa de pimentón" },
            { category: "Asados", name: "Mixto", basePrice: 32 * priceMultiplier, gratinadoPrice: 36 * priceMultiplier, description: "Cerdo, pechuga, chorizo de cerdo, Papa cocida, yuca, chimichurri, salsa tártara, salsa de pimentón" },
            
            // Picadas (Ordenadas por precio base: 25, 25, 30, 50)
            { category: "Picadas", name: "Cerdo", basePrice: 25 * priceMultiplier, gratinadoPrice: 29 * priceMultiplier, description: "Cerdo, chorizo de cerdo, Papa cocida, yuca, chimichurri, salsa tártara, salsa de pimentón" },
            { category: "Picadas", name: "Pollo", basePrice: 25 * priceMultiplier, gratinadoPrice: 29 * priceMultiplier, description: "Pollo, ranchera, Papa cocida, yuca, chimichurri, salsa tártara, salsa de pimentón" },
            { category: "Picadas", name: "Chuleta la R", basePrice: 30 * priceMultiplier, gratinadoPrice: 34 * priceMultiplier, description: "Chuleta, chorizo de cerdo, Papa cocida, yuca, chimichurri, salsa tártara, salsa de pimentón" },
            { category: "Picadas", name: "Picada La R", basePrice: 50 * priceMultiplier, gratinadoPrice: 54 * priceMultiplier, description: "Pollo, cerdo, chorizo de cerdo y carne, Papa cocida, yuca, chimichurri, salsa tártara, salsa de pimentón" },
        ];

        // --- 2. Función para Agrupar y Ordenar el Menú ---
        function getGroupedAndSortedMenu(data) {
            // 1. Agrupar por categoría
            const grouped = data.reduce((acc, item) => {
                const key = item.category;
                if (!acc[key]) {
                    acc[key] = [];
                }
                acc[key].push(item);
                return acc;
            }, {});

            // 2. Ordenar los elementos dentro de cada categoría por precio ascendente
            for (const category in grouped) {
                grouped[category].sort((a, b) => a.basePrice - b.basePrice);
            }

            return grouped;
        }

        // --- 3. Función para Renderizar el Menú ---
        function renderMenu() {
            const menu = getGroupedAndSortedMenu(menuData);
            const container = document.getElementById('menu-container');
            container.innerHTML = '';

            for (const category in menu) {
                const categoryElement = document.createElement('div');
                categoryElement.className = 'category-section p-6 rounded-xl bg-gray-800 shadow-2xl';
                
                // Título de la Categoría
                categoryElement.innerHTML = `
                    <h4 class="text-3xl font-extrabold primary-color mb-6 border-b-2 border-secondary pb-2 uppercase tracking-wide">
                        ${category}
                    </h4>
                `;
                
                // Contenedor de Items (Flexbox con Scroll Horizontal y Snap)
                const itemsGrid = document.createElement('div');
                itemsGrid.className = 'flex overflow-x-scroll space-x-6 horizontal-scroll snap-x snap-mandatory';

                menu[category].forEach(item => {
                    // --- Estilo Resaltado para Gratinada y Precio ---
                    const priceGratinado = item.gratinadoPrice ? 
                        // El padding y el borde para la caja gratinada se mantienen del ajuste anterior (más delgado)
                        `<div class="mt-3 py-2 px-3 bg-yellow-900/40 rounded-lg border-l-2 border-secondary shadow-inner flex justify-between items-center">
                            <span class="text-sm text-yellow-300 font-black uppercase tracking-wider">Gratinada: </span>
                            <span class="text-xl font-black text-white">$${formatPrice(item.gratinadoPrice)}</span>
                        </div>` : 
                        // El espacio invisible también se ajusta para mantener el layout (h-[46px] vs h-[58px] anterior)
                        '<div class="mt-3 p-3 invisible h-[46px]"></div>'; 

                    const itemElement = document.createElement('div');
                    // w-full on mobile, w-[calc(50%-0.75rem)] on medium screens to show ~2 items
                    itemElement.className = 'menu-item flex-none w-[85vw] sm:w-[calc(50%-0.75rem)] bg-gray-700 rounded-xl transition duration-300 hover:bg-gray-600 transform hover:scale-[1.01] border border-gray-600 hover:border-secondary shadow-md snap-start p-4';
                    
                    itemElement.innerHTML = `
                        <div class="flex justify-between items-start mb-2">
                            <h5 class="text-xl font-bold secondary-color leading-tight">${item.name}</h5>
                            <span class="text-2xl font-black text-white primary-color px-3 py-1 rounded-full">$${formatPrice(item.basePrice)}</span>
                        </div>
                        <!-- Altura fija h-[6rem] para mantener la caja de Gratinada estable -->
                        <p class="text-gray-300 text-sm font-semibold italic mb-3 h-[6rem] overflow-hidden">${item.description}</p>
                        ${priceGratinado}
                    `;
                    itemsGrid.appendChild(itemElement);
                });

                categoryElement.appendChild(itemsGrid);
                container.appendChild(categoryElement);
            }
        }

        // --- 4. Función de WhatsApp ---
        function goToWhatsApp() {
            const phoneNumber = '573126861354'; 
            // NUEVO MENSAJE AUTOMÁTICO MÁS AMIGABLE
            const newMessage = "Hola Foodies, me gustaría hacer un pedido. ¿Qué delicias del menú de la web me recomiendas hoy?";
            const message = encodeURIComponent(newMessage);
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
            window.open(whatsappUrl, '_blank');
        }

        // Iniciar el renderizado del menú al cargar la página
        window.onload = () => {
            renderMenu();
        };

        // Simula la función para hacer que el scroll sea suave al hacer click en los enlaces del navbar
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

    </script>
</body>
</html>