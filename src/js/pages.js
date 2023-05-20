console.log("El pages.js esta conectado")

const searchHeader = document.querySelector('.searchHeader');
const ficedSearchHeaderOver = document.querySelector('.ficedSearchHeaderOver');

searchHeader.addEventListener('click', ()=>{
    ficedSearchHeaderOver.classList.toggle('show');
})



const proyectos = [
    {
        nombre: 'Desarrollo kevin Medina',
        categoria: 'Desarrollo web',
        url: 'https://kevinnicolasmr.vercel.app/',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Plantilla Base',
        categoria: 'Plantilla',
        url: '/pages/plantilla.html',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Maldonado',
        categoria: 'Arquitectura',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Florencia',
        categoria: 'Arquitectura',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Pedro',
        categoria: 'Trabajadores',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },  {
        nombre: 'Montevideo',
        categoria: 'Arquitectura',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Maldonado',
        categoria: 'Premios',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Maldonado',
        categoria: 'Arquitectura',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Florencia',
        categoria: 'Arquitectura',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    },
    {
        nombre: 'Pedro',
        categoria: 'Trabajadores',
        url: 'https://proyecto1.com',
        imagen: '../../public/image/img.png'
    }
];


  
const inputProyecto = document.getElementById('inputProyecto');
const opcionesProyecto = document.getElementById('opcionesProyecto');

inputProyecto.addEventListener('input', () => {
  const filtro = inputProyecto.value.toLowerCase();
  const opcionesFiltradas = proyectos.filter(proyecto => proyecto.nombre.toLowerCase().includes(filtro));

  opcionesProyecto.innerHTML = '';

  opcionesFiltradas.forEach(opcion => {
    const botonProyecto = document.createElement('button');
    botonProyecto.textContent = opcion.nombre;
    botonProyecto.classList.add('boton-proyecto');
    botonProyecto.addEventListener('click', () => {
      window.location.href = opcion.url;
    });

    opcionesProyecto.appendChild(botonProyecto);

    const saltoLinea = document.createElement('br');
    opcionesProyecto.appendChild(saltoLinea);
  });
});