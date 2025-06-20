// Combined product data
const productosGecom = [
    // Products from the first HTML snippet
    {
        codigo: "ALM001",
        nombre: "Arroz Largo Fino Premium 1kg",
        marca: "Gallo",
        categoria: "Almacén",
        precio: 2450.00,
        imagen: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop"
    },
    {
        codigo: "BEB001",
        nombre: "Coca Cola 2.25L",
        marca: "Coca Cola",
        categoria: "Bebidas y Jugos",
        precio: 1890.50,
        imagen: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&h=300&fit=crop"
    },
    {
        codigo: "LIM001",
        nombre: "Detergente Líquido 750ml",
        marca: "Skip",
        categoria: "Limpieza",
        precio: 3250.75,
        imagen: "https://images.unsplash.com/photo-1563453392212-326d32d2d48f?w=400&h=300&fit=crop"
    },
    {
        codigo: "PER001",
        nombre: "Champú Anticaspa 400ml",
        marca: "Head & Shoulders",
        categoria: "Perfumería",
        precio: 4150.00,
        imagen: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=300&fit=crop"
    },
    {
        codigo: "ALM002",
        nombre: "Aceite de Girasol 900ml",
        marca: "Natura",
        categoria: "Almacén",
        precio: 1650.25,
        imagen: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=300&fit=crop"
    },
    {
        codigo: "BEB002",
        nombre: "Agua Mineral 2L",
        marca: "Villavicencio",
        categoria: "Bebidas y Jugos",
        precio: 950.00,
        imagen: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&h=300&fit=crop"
    },
    {
        codigo: "LIM002",
        nombre: "Lavandina 1L",
        marca: "Ayudín",
        categoria: "Limpieza",
        precio: 1350.90,
        imagen: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop"
    },
    {
        codigo: "PER002",
        nombre: "Pasta Dental Triple Acción",
        marca: "Colgate",
        categoria: "Perfumería",
        precio: 2850.40,
        imagen: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=400&h=300&fit=crop"
    },
    {
        codigo: "ALM003",
        nombre: "Fideos Spaghetti 500g",
        marca: "Matarazzo",
        categoria: "Almacén",
        precio: 890.00,
        imagen: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=400&h=300&fit=crop"
    },
    {
        codigo: "BEB003",
        nombre: "Jugo de Naranja 1L",
        marca: "Baggio",
        categoria: "Bebidas y Jugos",
        precio: 1450.75,
        imagen: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=300&fit=crop"
    },
    {
        codigo: "LAC001",
        nombre: "Leche Entera 1L",
        marca: "La Serenísima",
        categoria: "Lácteos",
        precio: 1250.00,
        imagen: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=300&fit=crop"
    },
    {
        codigo: "GOL001",
        nombre: "Chocolate con Leche 100g",
        marca: "Milka",
        categoria: "Golosinas y Chocolate",
        precio: 1850.50,
        imagen: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=400&h=300&fit=crop"
    },
    {
        codigo: "DES001",
        nombre: "Galletitas Dulces 300g",
        marca: "Bagley",
        categoria: "Desayuno y Merienda",
        precio: 2150.25,
        imagen: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop"
    },
    {
        codigo: "CON001",
        nombre: "Hamburguesas Congeladas x6",
        marca: "Swift",
        categoria: "Congelados",
        precio: 3450.00,
        imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop"
    },
    {
        codigo: "QUE001",
        nombre: "Queso Cremoso 300g",
        marca: "La Paulina",
        categoria: "Quesos y Fiambres",
        precio: 2750.80,
        imagen: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&h=300&fit=crop"
    },
    {
        codigo: "LIB001",
        nombre: "Cuaderno Universitario x48",
        marca: "Rivadavia",
        categoria: "Librería",
        precio: 1650.00,
        imagen: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop"
    },
    {
        codigo: "KIO001",
        nombre: "Cigarrillos Marlboro Box",
        marca: "Marlboro",
        categoria: "Kiosco y Varios",
        precio: 3200.00,
        imagen: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
    },
    // Additional products from the "Bebidas y Jugos" page
    // BEB001 and BEB002, BEB003 are already in the list above with Unsplash images.
    // We will add the new ones and ensure consistency.
    {
        codigo: "BEB004",
        nombre: "Pepsi 2.25L",
        marca: "Pepsi",
        categoria: "Bebidas y Jugos",
        precio: 1820.00,
        // Using a generic placeholder, or you can find a specific one
        imagen: "https://images.unsplash.com/photo-1554866585-CD94860890b7?w=400&h=300&fit=crop" // Placeholder for Pepsi
    },
    {
        codigo: "BEB005",
        nombre: "Sprite 1.5L",
        marca: "Sprite",
        categoria: "Bebidas y Jugos",
        precio: 1380.25,
        imagen: "https://images.unsplash.com/photo-1581008054425-dd65a5d8c6d2?w=400&h=300&fit=crop" // Placeholder for Sprite
    },
    {
        codigo: "BEB006",
        nombre: "Agua Saborizada Limón 500ml", // Original name: "Agua Saborizada Levité"
        marca: "Levité",
        categoria: "Bebidas y Jugos",
        precio: 780.90,
        // The second HTML used a Freepik URL here. We'll try to keep Unsplash for consistency or use a placeholder if needed.
        // For now, let's use the provided Freepik URL structure as a placeholder if direct Unsplash is not found.
        // Or, better, find an Unsplash equivalent or a generic flavored water image.
        imagen: "https://img.freepik.com/foto-gratis/botella-alcohol-llena_23-2148261588.jpg?w=400&h=300&fit=crop" // Placeholder for Levite
    },
    {
        codigo: "BEB007",
        nombre: "Fanta Naranja 2L",
        marca: "Fanta",
        categoria: "Bebidas y Jugos",
        precio: 1650.40,
        imagen: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=400&h=300&fit=crop" // Placeholder for Fanta
    },
    {
        codigo: "BEB008",
        nombre: "Jugo de Manzana 1L",
        marca: "Cepita",
        categoria: "Bebidas y Jugos",
        precio: 1320.60,
        imagen: "https://images.unsplash.com/photo-1570598091410-667011205500?w=400&h=300&fit=crop" // Placeholder for Cepita Apple Juice
    },
    {
        codigo: "BEB009",
        nombre: "Red Bull 250ml",
        marca: "Red Bull",
        categoria: "Bebidas y Jugos",
        precio: 2150.00,
        imagen: "https://images.unsplash.com/photo-1580700000985-a3e808384538?w=400&h=300&fit=crop" // Placeholder for Red Bull
    },
    {
        codigo: "BEB010",
        nombre: "Agua con Gas 1.5L",
        marca: "Eco de los Andes",
        categoria: "Bebidas y Jugos",
        precio: 1120.30,
        imagen: "https://images.unsplash.com/photo-1559204070-c36a04635100?w=400&h=300&fit=crop" // Placeholder for Sparkling Water
    },
    {
        codigo: "BEB011",
        nombre: "Cerveza Quilmes Pack x6",
        marca: "Quilmes",
        categoria: "Bebidas y Jugos",
        precio: 3450.80,
        imagen: "https://images.unsplash.com/photo-1608270586620-2485249761e8?w=400&h=300&fit=crop" // Placeholder for Quilmes Beer
    },
    {
        codigo: "BEB012",
        nombre: "Té Helado Durazno 1.5L",
        marca: "Fuze Tea",
        categoria: "Bebidas y Jugos",
        precio: 1680.45,
        imagen: "https://images.unsplash.com/photo-1578873586175-005140375c5a?w=400&h=300&fit=crop" // Placeholder for Fuze Tea
    }
];

let productosActuales = [...productosGecom];
let categoriaActiva = 'todos';

function formatearPrecio(precio) {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS'
    }).format(precio);
}

function renderizarProductos(productos) {
    const grid = document.getElementById('productsGrid');

    if (!grid) {
        console.error("Products grid not found!");
        return;
    }

    if (productos.length === 0) {
        grid.innerHTML = '<div class="no-results">No se encontraron productos</div>';
        return;
    }

    grid.innerHTML = productos.map(producto => {
        // Determine image source or class for background
        let imageHtml;
        if (producto.imagen && producto.imagen.startsWith('http')) {
            imageHtml = `<img src="${producto.imagen}" alt="${producto.nombre}" class="product-image" onerror="this.onerror=null;this.src='https://via.placeholder.com/400x300?text=Imagen+no+disponible';">`;
        } else if (producto.imagen) { // Assumes it's a class like 'coca', 'agua'
            // This was from the second HTML, we'll use a generic placeholder for now if no direct URL.
            // For simplicity, the data structure above now uses Unsplash/placeholder URLs for all.
            imageHtml = `<img src="https://via.placeholder.com/400x300?text=${producto.nombre}" alt="${producto.nombre}" class="product-image">`;
        } else {
            imageHtml = `<img src="https://via.placeholder.com/400x300?text=Imagen+no+disponible" alt="${producto.nombre}" class="product-image">`;
        }

        // Add product specific image class if it exists (e.g. for coca, agua, etc. for styled placeholders)
        // This assumes the 'imagen' field might also just be 'coca', 'agua' if no URL.
        // However, the data above is standardized to use URLs.
        // The CSS has classes like .product-image.coca - these would apply if the img tag itself had that class.
        // For now, we'll rely on the src attribute. The CSS classes for specific brands on product-image
        // won't be hit unless we add them dynamically based on brand/product.
        // Let's simplify and assume `producto.imagen` is always a URL.

        return `
            <div class="product-card">
                ${imageHtml}
                <div class="product-info">
                    <div class="product-code">${producto.codigo}</div>
                    <div class="product-name">${producto.nombre}</div>
                    <div class="product-brand">${producto.marca}</div>
                    <div class="product-price">${formatearPrecio(producto.precio)}</div>
                </div>
            </div>
        `;
    }).join('');
}

function actualizarEstadisticas(productos) {
    const statsEl = document.getElementById('productCount');
    if (!statsEl) {
        console.error("Stats element not found!");
        return;
    }
    const total = productos.length;
    const categoriaTexto = categoriaActiva === 'todos' ? 'productos' : `productos de ${categoriaActiva}`;
    statsEl.textContent = `Mostrando ${total} ${categoriaTexto}`;
}

function filtrarProductos() {
    const busqueda = document.getElementById('searchInput').value.toLowerCase();

    let productosFiltrados = productosGecom;

    // Filtrar por categoría
    if (categoriaActiva !== 'todos') {
        productosFiltrados = productosFiltrados.filter(p => p.categoria === categoriaActiva);
    }

    // Filtrar por búsqueda
    if (busqueda) {
        productosFiltrados = productosFiltrados.filter(p =>
            p.codigo.toLowerCase().includes(busqueda) ||
            p.nombre.toLowerCase().includes(busqueda) ||
            p.marca.toLowerCase().includes(busqueda)
        );
    }

    productosActuales = productosFiltrados;
    renderizarProductos(productosActuales);
    actualizarEstadisticas(productosActuales);
}

// Función de inicialización
function inicializarApp() {
    console.log('Inicializando aplicación...');

    renderizarProductos(productosGecom);
    actualizarEstadisticas(productosGecom);

    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', filtrarProductos);
    } else {
        console.error("Search input not found!");
    }

    const categoriesContainer = document.getElementById('categories');
    if (categoriesContainer) {
        categoriesContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('.category-btn');
            if (btn) {
                document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                categoriaActiva = btn.dataset.category;
                filtrarProductos();
            }
        });
    } else {
        console.error("Categories container not found!");
    }
}

// Simular actualización de datos (como vendría de Gecom)
function simularActualizacionGecom() {
    console.log("Simulando actualización de precios de Gecom...");
    productosGecom.forEach(producto => {
        if (Math.random() > 0.8) { // Afecta a ~20% de los productos
            const variacion = (Math.random() - 0.5) * (producto.precio * 0.1); // Variación de hasta +/- 5%
            producto.precio = Math.max(parseFloat((producto.precio + variacion).toFixed(2)), 100);
        }
    });

    // Re-filtrar y renderizar para mostrar los cambios si están en la vista actual
    filtrarProductos();
    console.log("Precios actualizados y productos re-renderizados.");
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializarApp);
} else {
    // DOMContentLoaded ya ha ocurrido
    inicializarApp();
}

// Backup adicional por si algo interfiere con DOMContentLoaded
// setTimeout(inicializarApp, 500); // Comentado para evitar doble inicialización si DOMContentLoaded funciona

// Actualizar cada 30 segundos
setInterval(simularActualizacionGecom, 30000);
