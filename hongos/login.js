let inputNombre = document.getElementById('nombre');
let inputContraseña = document.getElementById('password');    
let boton = document.getElementById('boton');

boton.addEventListener('click', function(evento) {
    evento.preventDefault();

    let Nombre = inputNombre.value;
    let Contraseña = inputContraseña.value;
   
    let nombreBD = 'maria';
    let contraseñaBD = '1234';

    if (Nombre === nombreBD && Contraseña === contraseñaBD) {
        Swal.fire({
            title: '¡Bienvenido!',
            text: Nombre,
            icon: 'success',
            confirmButtonText: 'OK'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = 'index2.html';
            }
        });
    } else {
        Swal.fire({
            title: 'Error',
            text: 'Usuario o contraseña incorrectos',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
});
