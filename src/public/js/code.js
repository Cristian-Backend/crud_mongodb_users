const modalAlumno = new bootstrap.Modal(document.getElementById('modalAlumno'));

document.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('btnEditar')) {
        const fila = e.target.parentNode.parentNode;
        const id = fila.querySelector('td:nth-child(1)').textContent;
        const nombre = fila.querySelector('td:nth-child(2)').textContent;
        const correo = fila.querySelector('td:nth-child(3)').textContent;
        const edad = fila.querySelector('td:nth-child(4)').textContent;

        document.getElementById('id_editar').value = id;
        document.getElementById('nombre_editar').value = nombre;
        document.getElementById('correo_editar').value = correo;
        document.getElementById('edad_editar').value = edad;

        modalAlumno.show();
    }
});