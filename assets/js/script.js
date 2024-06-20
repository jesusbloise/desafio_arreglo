 
 //arreglos de venta

 const propiedades_venta = [
            {
                nombre: 'Casa en la playa',
                src: 'assets/img/casa_playa-venta.jpg',
                descripcion: 'Hermosa casa frente al mar.',
                ubicacion: 'Playa',
                habitaciones: 4,
                costo: 500000,
                smoke: true,
                pets: false
            },
            {
                nombre: 'Casa en la montaña',
                src: 'assets/img/casa_montaña_venta.jpg',
                descripcion: 'Casa tranquila en la montaña.',
                ubicacion: 'Montaña',
                habitaciones: 3,
                costo: 300000,
                smoke: false,
                pets: true
            },
            {
                nombre: 'Casa en el campo',
                src: 'assets/img/casa_campo_venta.jpg',
                descripcion: 'Amplia casa en el campo.',
                ubicacion: 'Campo',
                habitaciones: 5,
                costo: 400000,
                smoke: true,
                pets: true
            },
            {
                nombre: 'Casa en la ciudad',
                src: 'assets/img/casa_ciudad-venta.jpg',
                descripcion: 'Moderna casa en la ciudad.',
                ubicacion: 'Ciudad',
                habitaciones: 2,
                costo: 600000,
                smoke: false,
                pets: false
            },
            {
                nombre: 'Casa en la ciudad',
                src: 'assets/img/casa_ciudad-venta.jpg',
                descripcion: 'Moderna casa en la ciudad.',
                ubicacion: 'Ciudad',
                habitaciones: 2,
                costo: 600000,
                smoke: false,
                pets: false
            },
            {
                nombre: 'Casa en la montaña',
                src: 'assets/img/casa_montaña_venta.jpg',
                descripcion: 'Casa tranquila en la montaña.',
                ubicacion: 'Montaña',
                habitaciones: 3,
                costo: 300000,
                smoke: false,
                pets: true
            },
            {
                nombre: 'Casa en el campo',
                src: 'assets/img/casa_campo_venta.jpg',
                descripcion: 'Amplia casa en el campo.',
                ubicacion: 'Campo',
                habitaciones: 5,
                costo: 400000,
                smoke: true,
                pets: true
            },
        ];
// arreglos de alquiler

        const propiedades_alquiler = [
            {
                nombre: 'Departamento céntrico',
                src: 'assets/img/dep_ciudad_alquiler.jpg',
                descripcion: 'Cómodo departamento en el centro de la ciudad.',
                ubicacion: 'Centro',
                habitaciones: 2,
                costo: 1500,
                smoke: false,
                pets: true
            },
            {
                nombre: 'Departamento en la playa',
                src: 'assets/img/dep_playa_alquiler.jpg',
                descripcion: 'Departamento con vista al mar.',
                ubicacion: 'Playa',
                habitaciones: 3,
                costo: 2000,
                smoke: true,
                pets: false
            },
            {
                nombre: 'Departamento en la montaña',
                src: 'assets/img/dep_montaña_alquiler.jpg',
                descripcion: 'Departamento acogedor en la montaña.',
                ubicacion: 'Montaña',
                habitaciones: 1,
                costo: 1000,
                smoke: false,
                pets: true
            },
            {
                nombre: 'Departamento en el campo',
                src: 'assets/img/dep_campo_alquiler.jpg',
                descripcion: 'Departamento tranquilo en el campo.',
                ubicacion: 'Campo',
                habitaciones: 2,
                costo: 1200,
                smoke: true,
                pets: true
            },
            {
                nombre: 'Departamento céntrico',
                src: 'assets/img/dep_ciudad_alquiler.jpg',
                descripcion: 'Cómodo departamento en el centro de la ciudad.',
                ubicacion: 'Centro',
                habitaciones: 2,
                costo: 1500,
                smoke: false,
                pets: true
            },
            {
                nombre: 'Departamento en la playa',
                src: 'assets/img/dep_playa_alquiler.jpg',
                descripcion: 'Departamento con vista al mar.',
                ubicacion: 'Playa',
                habitaciones: 3,
                costo: 2000,
                smoke: true,
                pets: false
            },
            {
                nombre: 'Departamento en la montaña',
                src: 'assets/img/dep_montaña_alquiler.jpg',
                descripcion: 'Departamento acogedor en la montaña.',
                ubicacion: 'Montaña',
                habitaciones: 1,
                costo: 1000,
                smoke: false,
                pets: true
            },
        ];
//funcion que muestra los arreglos

        function renderizarPropiedades(propiedades, contenedorId, maximo) {
            const contenedor = document.getElementById(contenedorId);
            contenedor.innerHTML = '';
            propiedades.slice(0, maximo).forEach(propiedad => {
                //condicionales para fumar o animales
                const petsHTML = propiedad.pets
                    ? '<i class="fas fa-paw icono-permitido"></i> <span class="icono-permitido">Sí se permiten mascotas</span>'
                    : '<i class="fas fa-ban icono-prohibido"></i> <span class="icono-prohibido">No se permiten mascotas</span>';
                const smokeHTML = propiedad.smoke
                    ? '<i class="fas fa-smoking icono-permitido"></i> <span class="icono-permitido">Sí se permite fumar</span>'
                    : '<i class="fas fa-smoking-ban icono-prohibido"></i> <span class="icono-prohibido">No se permite fumar</span>';
                const propiedadHTML = `
                    <div class="propiedad">
                        <img src="${propiedad.src}" alt="${propiedad.nombre}">
                        <h3>${propiedad.nombre}</h3>
                        <p>${propiedad.descripcion}</p>
                        <p>Ubicación: ${propiedad.ubicacion}</p>
                        <p>Habitaciones: ${propiedad.habitaciones}</p>
                        <p>Costo: $${propiedad.costo}</p>
                        <p>${smokeHTML}</p>
                        <p>${petsHTML}</p>
                    </div>
                `;
                contenedor.innerHTML += propiedadHTML;
            });
        }
//llamada a las funciones para mostrar solo 3 propiedades

        document.addEventListener('DOMContentLoaded', () => {
            renderizarPropiedades(propiedades_venta, 'propiedades-venta',3);
            renderizarPropiedades(propiedades_alquiler, 'propiedades-alquiler',3);
        });