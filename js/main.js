document.getElementById("nombre").innerHTML = sessionStorage.getItem("nombre");
console.log(sessionStorage.getItem("id"));

function color(signo) {
    if (signo == 'mas') {
        console.log("mas");
        $("#dineroModal").css("background-image", "linear-gradient(to top, #9be15d 0%, #00e3ae 100%");
    } else {
        console.log("menos");
        $("#dineroModal").css("background-image", "linear-gradient(to top, #f77062 0%, #fe5196 100%");
    }
}

function nuevo() {
    console.log("pasa");
    var fin = $("#finDinero").val();
    var categoria = $("#categoriaGastoModal").val();
    var dinero = $("#dineroModal").val();
    var descripcion = $("#descripcionGastoModal").val();

    $.ajax({
        url: "../php/nuevoMov.php",
        dataType: "text",
        method: "POST",
        data: {
            fin: fin,
            categoria: categoria,
            dinero: dinero,
            descripcion: descripcion,
            idUsuario: sessionStorage.getItem("id"),
        },
        success: function (response) {
            if (response == "0") {
                Swal.fire({
                    position: 'top-end',
                    type: 'error',
                    title: 'Your work has been saved',
                    backdrop: false,
                    toast: true,
                    showConfirmButton: false,
                    timer: 2500
                })
                $('#modalNuevoGasto').modal('hide');
            } else {
                Swal.fire({
                    position: 'top-end',
                    type: 'success',
                    title: 'Your work has been saved',
                    backdrop: false,
                    toast: true,
                    showConfirmButton: false,
                    timer: 2500
                })
                $('#modalNuevoGasto').modal('hide');
            }
        }
    });
}

function actualizarLista() {
    var elementoLista =
        `<div class="container" id="gasto" style="">` +
        `<div class="fila-top">`;

    $.ajax({
        method: "POST",
        url: "../php/actualizarLista.php",
        dataType: "text",
        data: {
            id: sessionStorage.getItem("id"),
        },
        success: function (response) {

        }
    });

}