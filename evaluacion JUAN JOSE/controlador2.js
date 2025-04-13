let inputNombre = document.getElementById('nombre');
let inputCorreo = document.getElementById('correo');
let inputContraseña = document.getElementById('password');    
let boton = document.getElementById('boton');

boton.addEventListener('click', function(evento) {
    evento.preventDefault(); // Evita que el formulario se envíe y se recargue la página

    let Nombre = inputNombre.value;
    let Contraseña = inputContraseña.value;
    let Correo = inputCorreo.value;
    let nombreBD = 'maria';
    let contraseñaBD = 1234;
    let correoBD = "maria123@gmail.com";

    if (Nombre == nombreBD && Contraseña == contraseñaBD && Correo == correoBD) {
        Swal.fire({
            title: '¡Bienvenido!',
            text: Nombre,
            icon: 'success',
            confirmButtonText: 'OK'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = './index2.html';
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