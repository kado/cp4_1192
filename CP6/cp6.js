function validar_formulario() {
    /*var sexo = document.getElementsByName('sexo');
    var otra = document.getElementsByTagName('p');
    var otra2 = document.getElementsByClassName('parrafo');
    var nombre2 = document.formRegistro.txtNombre;*/
    
    var nombre = document.getElementById('txtNombre');
    var usuario = document.getElementById('txtUsuario');
    var email = document.getElementById('txtEmail');
    var password = document.getElementById('txtPassword');
    var parrafo_errores = document.getElementById('errores');
    var hay_errores = false;
    parrafo_errores.innerHTML = "";
    if (nombre.value == "" || nombre.value.length < 8) {
        //alert('El nombre no cumple con los requisitos mínimos.');
        parrafo_errores.innerHTML += 'El nombre no cumple con los requisitos mínimos.<br>';
        //return false;
        hay_errores = true
    }

    if (usuario.value == "" || usuario.value.length < 8) {
        //alert('El usuario no cumple con los requisitos mínimos.');
        parrafo_errores.innerHTML += 'El usuario no cumple con los requisitos mínimos.<br>';
        //return false;
        hay_errores = true;
    }

    var expresion = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if (!email.value.match(expresion)) {
        //alert('El correo electrónico es inválido.');
        parrafo_errores.innerHTML += 'El correo electrónico es inválido.<br>';
        //return false;
        hay_errores = true;
    }

    if (password.value == "" || password.value.length < 8) {
        //alert('El password no cumple con los requisitos mínimos.');
        parrafo_errores.innerHTML += 'El password no cumple con los requisitos mínimos.<br>'
        hay_errores = true;
        //return false;
    }

    alert('Se encontraron errores en el formulario, por favor verifique.');
    return !hay_errores;

}