document.addEventListener('DOMContentLoaded', function() {
    const navbar = `
        <header>
            <nav>
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/nosotros">Nosotros</a></li>
                    <li><a href="/servicios">Servicios</a></li>
                    <li><a href="/producto">Producto</a></li>
                    <li><a href="/marcas">Marcas</a></li>
                    <li><a href="/equipo">Equipo</a></li>
                    <li><a href="/contacto">Contáctenos</a></li>
                </ul>
            </nav>
        </header>
    `;
    document.body.insertAdjacentHTML('afterbegin', navbar);
});