const toggleButton = document.getElementById('dark-mode-toggle');
const home = document.getElementById('home');
const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const spans = document.querySelectorAll('span'); // Selecciona todos los elementos <span>
const iElements = document.querySelectorAll('i'); // Selecciona todos los elementos <i>
const pathElements = document.querySelectorAll('svg path'); // Selecciona todos los elementos <path> dentro de <svg>
const nav = document.querySelector('nav');
const aElements = document.querySelectorAll('a');

// Recupera la preferencia del usuario al cargar la página
const savedDarkMode = localStorage.getItem('darkMode');
if (savedDarkMode === 'true') {
    home.classList.add('darkMode');
    body.classList.add('darkMode');
    h1.classList.add('darkFont');
    p.classList.add('darkFont');
    nav.classList.add('darkMode');

    spans.forEach(span => {
        span.id = 'darkFontSpam'; // Asigna el nuevo ID a cada <span>
    });

    iElements.forEach(i => {
        i.id = 'darkFont'; // Asigna el nuevo ID a cada <i>
    });

    pathElements.forEach(path => {
        path.setAttribute('fill', 'white'); // Cambia el fill a blanco
    });

    aElements.forEach(a => {
        a.id = 'darkFont'; // Asigna el nuevo ID a cada <i>
    });

    toggleButton.innerHTML = '<i class="fa-solid fa-moon"></i>';
} else {
    toggleButton.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

toggleButton.addEventListener('click', () => {
    home.classList.toggle('darkMode');
    body.classList.toggle('darkMode');
    h1.classList.toggle('darkFont');
    p.classList.toggle('darkFont');
    nav.classList.toggle('darkMode');
    // Cambia el icono del botón según el modo actual
    toggleButton.innerHTML = home.classList.contains('darkMode') ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';

    // Verifica si el modo oscuro está activado o desactivado
    if (home.classList.contains('darkMode')) {
        spans.forEach(span => {
            span.id = 'darkFontSpam'; // Asigna el ID a cada <span> si está activado
        });
        iElements.forEach(i => {
            i.id = 'darkFont'; // Asigna el ID a cada <i> si está activado
        });
        pathElements.forEach(path => {
            path.setAttribute('fill', 'white'); // Asigna el fill a cada <path> si está activado
        });
        aElements.forEach(a => {
            a.id = 'darkFont'; // Asigna el ID a cada <i> si está activado
        });
    } else {
        spans.forEach(span => {
            span.removeAttribute('id'); // Elimina el ID de cada <span> si está desactivado
        });
        iElements.forEach(i => {
            i.removeAttribute('id'); // Elimina el ID de cada <i> si está desactivado
        });
        pathElements.forEach(path => {
            path.removeAttribute('fill'); // Elimina el fill de cada <path> si está desactivado
        });
        aElements.forEach(a => {
            a.removeAttribute('id'); // Elimina el ID de cada <i> si está desactivado
        });
    }

    // Guarda la preferencia en LocalStorage
    localStorage.setItem('darkMode', home.classList.contains('darkMode'));
    localStorage.setItem('darkFont', h1.classList.contains('darkFont'));
    localStorage.setItem('darkFont', p.classList.contains('darkFont'));
    localStorage.setItem('darkFontSpam', spans[0].id); // Asigna o elimina el ID actual (tomando el primer <span>)
    localStorage.setItem('darkFont', iElements[0].id); // Asigna o elimina el ID actual (tomando el primer <i>)
    localStorage.setItem('white', pathElements[0].getAttribute('fill')); // Asigna o elimina el fill actual (tomando el primer <path>)
    localStorage.setItem('darkFont', nav.classList.contains('darkFont'));
    localStorage.setItem('darkFont', aElements[0].id); // Asigna o elimina el ID actual (tomando el primer <i>)
    
});
