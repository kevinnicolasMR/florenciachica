console.log("JS index conectado")

// Datos de ejemplo para los proyectos
const proyectos = [
    {
        nombre: 'Proyecto 1111',
        categoria: 'Proyectos',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Proyectos',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Proyectos',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Articulo',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Articulo',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Premios',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Premios',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Premios',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Premios',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Proyectos',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Proyectos',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Proyectos',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Articulo',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Articulo',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Premios',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Premios',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Premios',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Premios',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Proyectos',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Proyectos',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Proyectos',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Articulo',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Articulo',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Premios',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Premios',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Premios',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Proyecto 1111',
        categoria: 'Premios',
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
    let proyectosFiltrados;
    if (categoria === 'todos') {
      proyectosFiltrados = proyectos;
    } else {
      proyectosFiltrados = proyectos.filter(proyecto => proyecto.categoria === categoria);
    }
  
    const proyectosSection = document.getElementById('proyectos');
    proyectosSection.innerHTML = '';
  
    proyectosFiltrados.forEach(proyecto => {
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
  




/* funciones del menu over */ 

const categorias = [...new Set(proyectos.map(proyecto => proyecto.categoria))];
const menuOver = document.getElementById('menuOver');
const botonTodos = document.createElement('button');



botonTodos.textContent = 'Todos';
botonTodos.dataset.categoria = 'todos';
botonTodos.classList.add('all-button');
menuOver.appendChild(botonTodos);


// Agregar salto de línea
const saltoLinea = document.createElement('br');
menuOver.appendChild(saltoLinea);

botonTodos.addEventListener('click', () => {
    filtrarProyectos('todos');
  });
  

categorias.forEach(categoria => {
    const categoriaButton = document.createElement('button');
    categoriaButton.textContent = categoria;
    categoriaButton.dataset.categoria = categoria;
    categoriaButton.classList.add('category-button'); // Agregar la clase "category-button"
    categoriaButton.addEventListener('click', () => {
      filtrarProyectos(categoria);
    });
    menuOver.appendChild(categoriaButton);
  });
