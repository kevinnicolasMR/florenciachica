console.log("JS index conectado")

// Datos de ejemplo para los proyectos
const proyectos = [
    {
        nombre: 'Proyecto 1111',
        categoria: 'Categoria 1',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Categoria 1',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Categoria 1',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Categoria 1',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Categoria 1',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Categoria 1',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Categoria 1',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Categoria 1',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Categoria 1',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Categoria 1',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Categoria 1',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Categoria 1',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Categoria 1',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Categoria 1',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Categoria 1',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Categoria 1',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Categoria 1',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Categoria 1',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Categoria 1',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Categoria 1',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Categoria 1',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Categoria 1',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Categoria 1',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Categoria 1',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Categoria 1',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Categoria 1',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Categoria 1',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Categoria 1',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Categoria 1',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Categoria 1',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    
    
];


// Función para mostrar los proyectos en la sección correspondiente
function mostrarProyectos() {
    const proyectosSection = document.getElementById('proyectos');
    proyectosSection.innerHTML = '';

    proyectos.forEach(proyecto => {
        const proyectoDiv = document.createElement('div');
        proyectoDiv.classList.add('proyecto');

        const imagen = document.createElement('img');
        imagen.src = proyecto.imagen;
        imagen.alt = proyecto.nombre;
        proyectoDiv.appendChild(imagen);

        const nombreProyecto = document.createElement('span');
        nombreProyecto.textContent = proyecto.nombre;
        nombreProyecto.classList.add('nombre-proyecto');
        proyectoDiv.appendChild(nombreProyecto);

        proyectosSection.appendChild(proyectoDiv);
    });
}



// Mostrar todos los proyectos inicialmente
mostrarProyectos();

// Función para filtrar los proyectos por categoría
function filtrarProyectos(categoria) {
    const proyectosFiltrados = proyectos.filter(proyecto => proyecto.categoria === categoria || categoria === 'todos');

    const proyectosSection = document.getElementById('proyectos');
    proyectosSection.innerHTML = '';

    proyectosFiltrados.forEach(proyecto => {
        const proyectoDiv = document.createElement('div');
        proyectoDiv.classList.add('proyecto');
        proyectoDiv.textContent = proyecto.nombre;

        // Agrega un enlace a la URL del proyecto
        const enlace = document.createElement('a');
        enlace.href = proyecto.url;
        enlace.appendChild(proyectoDiv);

        proyectosSection.appendChild(enlace);
    });
}

// Event listener para el menú de categorías
const categoriasMenu = document.getElementById('menu-categorias');
categoriasMenu.addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON') {
        const categoria = event.target.dataset.categoria;
        filtrarProyectos(categoria);
    }
});
