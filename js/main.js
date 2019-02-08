document.getElementById("nombre").innerHTML = sessionStorage.getItem("nombre");
console.log(sessionStorage.getItem("id"));

function color(signo) {
    if (signo == '+') {
        $("#dineroModal").css("background-image", "linear-gradient(to top, #9be15d 0%, #00e3ae 100%");
    } else {
        $("#dineroModal").css("background-image", "linear-gradient(to top, #f77062 0%, #fe5196 100%");
    }
}

function nuevo() {
    console.log("pasa");
    var fin = $("#finDinero").val();
    var categoria = $("#categoriaGastoModal").val();
    var dinero = $("#dineroModal").val();
    var descripcion = $("#descripcionGastoModal").val();
    var signo = $("#cantidadModal").val();

    console.log(signo);

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
            signo: signo,
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

function validar() {
    var fin = $("#finDinero").val();
    var categoria = $("#categoriaGastoModal").val();
    var dinero = $("#dineroModal").val();
    var descripcion = $("#descripcionGastoModal").val();
    var signo = $("#cantidadModal").val();

    console.log("whack");

    if (fin == "") {
        console.log("AAaaa");
        setTimeout(function () { $("#finDinero").css("border", "2px solid red"); }, 3000);
    }

    if ($("#finDinero").val() == " ") {

    }
    if (categoria == " ") {
        console.log("no");
        $("#categoriaGastoModal").css("border", "2px solid red");
    }
    if (dinero == " ") {
        console.log("no");
        $("#dineroModal").css("border", "2px solid red");
    }
    if (signo == " ") {
        console.log("no");
        $("#cantidadModal").css("border", "2px solid red");
    }
}

function actualizarLista() {
    $("#listaGastos").html('');

    $.ajax({
        method: "POST",
        url: "../php/actualizarLista.php",
        dataType: "text",
        data: {
            id: sessionStorage.getItem("id"),
        },
        success: function (response) {
            if (response == "0") {
                console.log("no se encontro mov para este usuario");
            } else {
                response = JSON.parse(response);
                console.log(response);
                $.each(response, function (i, val) {
                    if (val.signoMov == "-") {
                        var elementoLista =
                            `<div class="container" id="gasto" style="margin-bottom: 20px; border-top: 4px solid #fa5252">` +
                            `<div class="fila-top">`;

                    } else {
                        var elementoLista =
                            `<div class="container" id="gasto" style="margin-bottom: 20px; border-top: 4px solid #51cf66">` +
                            `<div class="fila-top">`;
                    }

                    elementoLista +=
                        `<div id="gananciaoGasto">` + val.finMov + `</div>` +
                        `<div id="cantidadGasto">` + val.cdadMov + `</div>` +
                        `</div>` +
                        `<div class="fila-medio">` +
                        `<div id="tipoGasto">` +
                        `<i class="uil uil-tag-alt" style="margin-right: 5px;"></i>` + val.catMov +
                        `</div>` +
                        `<div id="horaGasto">` +
                        `<i class="uil uil-clock-three" style="margin-right: 5px;"></i>` + val.horaMov +
                        `</div>` +
                        `<div id="fechaGasto">` +
                        `<i class="uil uil-calender" style="margin-right: 5px;"></i>` + val.fechaMov +
                        `</div>` +
                        `</div>` +
                        `<div class="fila-abajo">` +
                        `<div id="descripcionGasto">` +
                        `<i class="uil uil-file-alt" style="margin-right: 5px;"></i>` + val.descrMov +
                        `</div>` +
                        `</div>` +
                        `</div>`;
                    $("#listaGastos").append(elementoLista);
                });
            }
        }
    });
}