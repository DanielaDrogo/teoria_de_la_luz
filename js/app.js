


document.addEventListener('DOMContentLoaded', () => {
    let toggle = document.getElementById('toggle');
    let label_toggle = document.getElementById('label_toggle');

    // Leer la preferencia del modo del local storage
    let darkMode = localStorage.getItem('darkMode') === 'true';
    
    // Función para aplicar el modo oscuro
    const applyDarkMode = (enabled) => {
        document.body.classList.toggle('dark', enabled);
        label_toggle.innerHTML = enabled ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
        label_toggle.style.color = enabled ? "gold" : "violet";

        document.querySelector('.caja-indice')?.classList.toggle('dark', enabled);
        document.querySelector('.caja-de-texto')?.classList.toggle('dark', enabled);
        document.querySelector('.biografia')?.classList.toggle('dark', enabled);
        document.querySelector('header')?.classList.toggle('dark_header', enabled);
        document.querySelector('main')?.classList.toggle('dark_main', enabled);
        document.querySelector('footer')?.classList.toggle('dark_footer', enabled);

        // Cambia el color del link
        document.querySelectorAll('.indice_link').forEach(enlace => {
            enlace.classList.toggle('dark_link', enabled);
        });
    };

    // Aplicar la preferencia guardada en el local storage
    if (darkMode) {
        applyDarkMode(true);
    }

    if (toggle && label_toggle) {
        toggle.checked = darkMode; // Asegurarse de que el toggle refleje la preferencia almacenada
        toggle.addEventListener('change', (event) => {
            let checked = event.target.checked;
            applyDarkMode(checked);

            // Guardar la preferencia en el local storage
            localStorage.setItem('darkMode', checked);
        });
    }
});





