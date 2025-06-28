
document.addEventListener('DOMContentLoaded', function() {
  
    let botonesAceptar = document.querySelectorAll('.boton-aceptar');
    botonesAceptar.forEach(boton => {
        boton.addEventListener('click', function() {
           
            let solicitudItem = this.closest('.solicitud-item');
            let nombre = solicitudItem.getAttribute('data-nombre');
            aceptarSolicitud(this, nombre);
        });
    });
    
   
    let botonesRechazar = document.querySelectorAll('.boton-noaceptar');
    botonesRechazar.forEach(boton => {
        boton.addEventListener('click', function() {
            rechazarSolicitud(this);
        });
    });
    
    console.log('🎯 Eventos agregados correctamente');
});


function aceptarSolicitud(boton, nombre) {
   
    let solicitudItem = boton.closest('.solicitud-item');
    
   
    crearNuevaConexion(nombre, solicitudItem);
    
   
    solicitudItem.remove();
    
   
    actualizarContadores();
    
   
    verificarSolicitudesVacias();
    
    
    console.log(`✅ Has aceptado la solicitud de ${nombre}`);
}


function rechazarSolicitud(boton) {
   
    let solicitudItem = boton.closest('.solicitud-item');
    
    
    let nombre = solicitudItem.querySelector('.nombre-seguidor').textContent;
    
   
    solicitudItem.remove();
    
   
    actualizarContadores();
    
   
    verificarSolicitudesVacias();
    
    
    console.log(`❌ Has rechazado la solicitud de ${nombre}`);
}


function crearNuevaConexion(nombre, solicitudOriginal) {
    
    let imagenOriginal = solicitudOriginal.querySelector('.foto-seguidor');
    
    
    let nuevaConexion = document.createElement('div');
    nuevaConexion.className = 'conexion-item';
    nuevaConexion.innerHTML = `
        <img src="${imagenOriginal.src}" alt="${nombre}" class="foto-seguidor">
        <p class="nombre-seguidor">${nombre}</p>
    `;
    
   
    let listaConexiones = document.getElementById('lista-conexiones');
    listaConexiones.appendChild(nuevaConexion);
}


function actualizarContadores() {
   
    let solicitudes = document.querySelectorAll('.solicitud-item');
    let contadorSolicitudes = document.getElementById('contador-solicitudes');
    contadorSolicitudes.textContent = solicitudes.length;
    
    
    let conexiones = document.querySelectorAll('.conexion-item');
    let contadorConexiones = document.getElementById('contador-conexiones');
    contadorConexiones.textContent = conexiones.length;
}


function verificarSolicitudesVacias() {
    let listaSolicitudes = document.getElementById('lista-solicitudes');
    let solicitudes = listaSolicitudes.querySelectorAll('.solicitud-item');
    
   
    if (solicitudes.length === 0) {
        listaSolicitudes.innerHTML = '<div class="sin-solicitudes">🎉 No tienes solicitudes pendientes</div>';
    }
}


function cambiarTituloPerfil(nuevoTitulo) {
    let titulo = document.querySelector('.miperfil');
    titulo.textContent = nuevoTitulo;
    console.log(`📝 Título cambiado a: ${nuevoTitulo}`);
}


function actualizarInfoPerfil(nuevoNombre, nuevaUbicacion, nuevoTrabajo) {
    
    let nombrePerfil = document.querySelector('.nombre-perfil');
    if (nombrePerfil && nuevoNombre) {
        nombrePerfil.textContent = nuevoNombre;
    }
    
   
    let parrafos = document.querySelectorAll('.info-perfil p');
    if (parrafos[0] && nuevaUbicacion) {
        parrafos[0].textContent = nuevaUbicacion;
    }
    
   
    if (parrafos[1] && nuevoTrabajo) {
        parrafos[1].textContent = nuevoTrabajo;
    }
    
    console.log(`📝 Perfil actualizado`);
}


function agregarNuevaSolicitud(nombre, rutaImagen = '../imagenes/default.jpg') {
    let listaSolicitudes = document.getElementById('lista-solicitudes');
    
    
    let mensajeSinSolicitudes = listaSolicitudes.querySelector('.sin-solicitudes');
    if (mensajeSinSolicitudes) {
        mensajeSinSolicitudes.remove();
    }
    
    
    let nuevaSolicitud = document.createElement('div');
    nuevaSolicitud.className = 'solicitud-item';
    nuevaSolicitud.setAttribute('data-nombre', nombre);
    nuevaSolicitud.innerHTML = `
        <img src="${rutaImagen}" alt="${nombre}" class="foto-seguidor">
        <p class="nombre-seguidor">${nombre}</p>
        <div class="aceptar-solicitud">
            <button class="boton-aceptar">Aceptar</button>
            <button class="boton-noaceptar">Rechazar</button>
        </div>
    `;
    
    
    let botonAceptar = nuevaSolicitud.querySelector('.boton-aceptar');
    let botonRechazar = nuevaSolicitud.querySelector('.boton-noaceptar');
    
    botonAceptar.addEventListener('click', function() {
        aceptarSolicitud(this, nombre);
    });
    
    botonRechazar.addEventListener('click', function() {
        rechazarSolicitud(this);
    });
    
    listaSolicitudes.appendChild(nuevaSolicitud);
    actualizarContadores();
}


console.log('🚀 Script de Mi Perfil cargado correctamente');
console.log('📋 Funciones disponibles:');
console.log('   - aceptarSolicitud()');
console.log('   - rechazarSolicitud()');
console.log('   - cambiarTituloPerfil()');
console.log('   - actualizarInfoPerfil()');
console.log('   - agregarNuevaSolicitud()');