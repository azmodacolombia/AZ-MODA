// JavaScript para cambiar entre las pestañas
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('.tab-content');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();  // Evitar comportamiento por defecto
            const target = e.target.getAttribute('href').substring(1);

            // Ocultar todas las secciones
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // Mostrar la sección correspondiente
            document.getElementById(target).classList.add('active');
        });
    });

    // Mostrar la pestaña de inicio al cargar la página
    document.getElementById('inicio').classList.add('active');
});
