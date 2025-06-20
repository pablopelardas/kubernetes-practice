const productosGecom = [
    { codigo: "ALM001", nombre: "Arroz Largo Fino Premium 1kg", marca: "Gallo", categoria: "Almacén", precio: 2450.00, imagen: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop" },
    { codigo: "BEB001", nombre: "Coca Cola 2.25L", marca: "Coca Cola", categoria: "Bebidas y Jugos", precio: 1890.50, imagen: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&h=300&fit=crop" },
    { codigo: "LIM001", nombre: "Detergente Líquido 750ml", marca: "Skip", categoria: "Limpieza", precio: 3250.75, imagen: "https://images.unsplash.com/photo-1563453392212-326d32d2d48f?w=400&h=300&fit=crop" },
    { codigo: "PER001", nombre: "Champú Anticaspa 400ml", marca: "Head & Shoulders", categoria: "Perfumería", precio: 4150.00, imagen: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=300&fit=crop" },
    { codigo: "ALM002", nombre: "Aceite de Girasol 900ml", marca: "Natura", categoria: "Almacén", precio: 1650.25, imagen: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=300&fit=crop" },
    { codigo: "BEB002", nombre: "Agua Mineral 2L", marca: "Villavicencio", categoria: "Bebidas y Jugos", precio: 950.00, imagen: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&h=300&fit=crop" },
    { codigo: "LIM002", nombre: "Lavandina 1L", marca: "Ayudín", categoria: "Limpieza", precio: 1350.90, imagen: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop" },
    { codigo: "PER002", nombre: "Pasta Dental Triple Acción", marca: "Colgate", categoria: "Perfumería", precio: 2850.40, imagen: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=400&h=300&fit=crop" },
    { codigo: "ALM003", nombre: "Fideos Spaghetti 500g", marca: "Matarazzo", categoria: "Almacén", precio: 890.00, imagen: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=400&h=300&fit=crop" },
    { codigo: "BEB003", nombre: "Jugo de Naranja 1L", marca: "Baggio", categoria: "Bebidas y Jugos", precio: 1450.75, imagen: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=300&fit=crop" },
    { codigo: "LAC001", nombre: "Leche Entera 1L", marca: "La Serenísima", categoria: "Lácteos", precio: 1250.00, imagen: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=300&fit=crop" },
    { codigo: "GOL001", nombre: "Chocolate con Leche 100g", marca: "Milka", categoria: "Golosinas y Chocolate", precio: 1850.50, imagen: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=400&h=300&fit=crop" },
    { codigo: "DES001", nombre: "Galletitas Dulces 300g", marca: "Bagley", categoria: "Desayuno y Merienda", precio: 2150.25, imagen: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop" },
    { codigo: "CON001", nombre: "Hamburguesas Congeladas x6", marca: "Swift", categoria: "Congelados", precio: 3450.00, imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop" },
    { codigo: "QUE001", nombre: "Queso Cremoso 300g", marca: "La Paulina", categoria: "Quesos y Fiambres", precio: 2750.80, imagen: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&h=300&fit=crop" },
    { codigo: "LIB001", nombre: "Cuaderno Universitario x48", marca: "Rivadavia", categoria: "Librería", precio: 1650.00, imagen: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop" },
    { codigo: "KIO001", nombre: "Cigarrillos Marlboro Box", marca: "Marlboro", categoria: "Kiosco y Varios", precio: 3200.00, imagen: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop" }
];

let productosActuales = [...productosGecom];
let categoriaActiva = 'todos';

function formatearPrecio(precio) {
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(precio);
}

function renderizarProductos(productos) {
    const grid = document.getElementById('productsGrid');
    if (productos.length === 0) {
        grid.innerHTML = '<div class="no-results">No se encontraron productos</div>';
        return;
    }
    grid.innerHTML = productos.map(p => `
        <div class="product-card">
            <img src="${p.imagen}" alt="${p.nombre}" class="product-image" onerror="this.style.display='none'">
            <div class="product-info">
                <div class="product-code">${p.codigo}</div>
                <div class="product-name">${p.nombre}</div>
                <div class="product-brand">${p.marca}</div>
                <div class="product-price">${formatearPrecio(p.precio)}</div>
            </div>
        </div>
    `).join('');
}

function actualizarEstadisticas(productos) {
    const stats = document.getElementById('productCount');
    const total = productos.length;
    const categoria = categoriaActiva === 'todos' ? 'productos' : `productos de ${categoriaActiva}`;
    stats.textContent = `Mostrando ${total} ${categoria}`;
}

function filtrarProductos() {
    const busqueda = document.getElementById('searchInput').value.toLowerCase();
    let filtrados = productosGecom;

    if (categoriaActiva !== 'todos') {
        filtrados = filtrados.filter(p => p.categoria === categoriaActiva);
    }
    if (busqueda) {
        filtrados = filtrados.filter(p =>
            p.codigo.toLowerCase().includes(busqueda) ||
            p.nombre.toLowerCase().includes(busqueda) ||
            p.marca.toLowerCase().includes(busqueda)
        );
    }

    productosActuales = filtrados;
    renderizarProductos(productosActuales);
    actualizarEstadisticas(productosActuales);
}

function inicializarApp() {
    renderizarProductos(productosGecom);
    actualizarEstadisticas(productosGecom);

    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', filtrarProductos);

    document.getElementById('categories').addEventListener('click', (e) => {
        const btn = e.target.closest('.category-btn');
        if (btn) {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            categoriaActiva = btn.dataset.category;
            filtrarProductos();
        }
    });
}

document.addEventListener('DOMContentLoaded', inicializarApp);

setInterval(() => {
    productosGecom.forEach(p => {
        if (Math.random() > 0.8) {
            const variacion = (Math.random() - 0.5) * 100;
            p.precio = Math.max(p.precio + variacion, 100);
        }
    });
    filtrarProductos();
}, 30000);
