/* Definiar una clase */
class Empleado {

    /* Declarar atributos */
    codigo = "000X";
    nombre = "Default";
    apellido = "Default";
    correo = "mail@mail.dot";
    cargo = "Default";

    /* Definir métodos */
    sueldoBruto() {
        let bruto;
        switch (this.cargo) {
            case "Jefe":
                bruto = 5000;
                break;
            case "Analista":
                bruto = 4000;
                break;
            case "Programador":
                bruto = 3000;
                break;
            case "Soporte":
                bruto = 2000;
                break;
            case "Asistente":
                bruto = 1500;
                break;
            default:
                bruto = 0;
                break;
        }
        return bruto;
    };

    descuento() {
        return (this.sueldoBruto() * 0.125);
    };

    sueldoNeto() {
        return (this.sueldoBruto() - this.descuento());
    }

}

/* Añadir función al botón enviar */
$("document").ready(function (){
    $("#btnEnviar").click(function () {
        let empleado = new Empleado();
        empleado.codigo = $("#txtCodigo")[0].value;
        empleado.nombre = $("#txtNombre")[0].value;
        empleado.apellido = $("#txtApellido")[0].value;
        empleado.correo = $("#txtCorreo")[0].value;
        empleado.cargo = $("#txtCargo")[0].value;
        alert("Soy "+ empleado.nombre + " y mi sueldo neto es: " + empleado.sueldoNeto());
        console.log(empleado);
    })
})