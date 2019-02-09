document.getElementById("nombre").innerHTML = sessionStorage.getItem("nombre");
document.getElementById("actualmente").innerHTML = sessionStorage.getItem("balance");
actualizarLista();


function color(signo) {
    if (signo != "") {
        if (signo == '+') {
            $("#dineroModal").css("background-image", "linear-gradient(to top, #9be15d 0%, #00e3ae 100%");
        } else {
            $("#dineroModal").css("background-image", "linear-gradient(to top, #f77062 0%, #fe5196 100%");
        }
    } else {
        $("#dineroModal").css("background-image", "none");
    }
}

function nuevo() {
    console.log("pasa");
    var fin = $("#finDinero").val();
    var categoria = $("#categoriaGastoModal").val();
    var dinero = $("#dineroModal").val();
    var descripcion = $("#descripcionGastoModal").val();
    var signo = $("#cantidadModal").val();
    var fecha = $("#fechaModal").val();

    fin = fin.toUpperCase();

    var primeraLetra = descripcion.charAt(0).toUpperCase();
    descripcion = descripcion.slice(1);
    descripcion = primeraLetra + descripcion;

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
            fecha: fecha,
        },
        success: function (response) {
            if (response == "0") {
                Swal.fire({
                    position: 'top-end',
                    type: 'error',
                    title: 'Hubo un error :(',
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
                    title: 'Se agrego con exito!',
                    backdrop: false,
                    toast: true,
                    showConfirmButton: false,
                    timer: 2500
                })
                $('#modalNuevoGasto').modal('hide');
                actualizarLista();
                modificarBal(signo, dinero);

                $("#finDinero").val(" ");
                $("#categoriaGastoModal").val(" ");
                $("#dineroModal").val(" ");
                $("#descripcionGastoModal").val(" ");
                $("#cantidadModal").val(" ");
                $("#fechaModal").val(" ");
                $("#descripcionGastoModal").val(" ");
                $("#dineroModal").css("background-image", "none");
            }
        }
    });
}

function modificarBal(signo, dinero) {
    console.log(signo, dinero);
    id = sessionStorage.getItem("id");
    console.log(id);


    $.ajax({
        method: "POST",
        url: "../php/traerBalance.php",
        dataType: "text",
        data: {
            id: sessionStorage.getItem("id"),
        },
        success: function (response) {
            response = JSON.parse(response);
            $.each(response, function (i, val) {
                var balance = val.balance;
                console.log(signo, dinero);
                if (signo == "+") {
                    balance = balance + dinero;
                } else {
                    balance = balance - dinero;
                }
                console.log(balance);

                $.ajax({
                    method: "POST",
                    url: "../php/modificarBalance.php",
                    dataType: "text",
                    data: {
                        id: sessionStorage.getItem("id"),
                        balance: balance,
                    },
                    success: function (response) {
                        response = JSON.parse(response);
                        $.each(response, function (i, val) {
                            document.getElementById("actualmente").innerHTML = val.balance;
                        });

                    }
                });

            });
        }
    });
}

function validar() {
    var fin = $("#finDinero").val();
    var categoria = $("#categoriaGastoModal").val();
    var dinero = $("#dineroModal").val();
    var descripcion = $("#descripcionGastoModal").val();
    var signo = $("#cantidadModal").val();

    var fecha = $("#fechaModal").val();
    console.log(fecha);


    if (fin != "" && $("#categoriaGastoModal").val() != "" && dinero != "" && $("#cantidadModal").val() != "" && fecha != "") {
        nuevo();
    } else {
        if (fin == "") {
            $("#finDinero").css("border", "2px solid #ff6b6b");
        } else {
            $("#finDinero").css("border", "0px");
        }

        if ($("#categoriaGastoModal").val() == "") {
            $("#categoriaGastoModal").css("border", "2px solid #ff6b6b");
        } else {
            $("#categoriaGastoModal").css("border", "0px");
        }

        if (dinero == "") {
            $("#dineroModal").css("border", "2px solid #ff6b6b");
        } else {
            $("#dineroModal").css("border", "0px");
        }

        if ($("#cantidadModal").val() == "") {
            $("#cantidadModal").css("border", "2px solid #ff6b6b");
        } else {
            $("#cantidadModal").css("border", "0px");
        }

        if (fecha == "") {
            $("#fechaModal").css("border", "2px solid #ff6b6b");
        } else {
            $("#fechaModal").css("border", "0px");
        }
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
                        `<div id="gananciaoGasto">` + val.finMov + `</div>`;

                    if (val.signoMov == "-") {
                        elementoLista +=
                            `<div id="cantidadGasto" style="color: #fa5252">- ` + val.cdadMov + `</div>`;
                    } else {
                        elementoLista +=
                            `<div id="cantidadGasto" style="color: #51cf66">+ ` + val.cdadMov + `</div>`;
                    }

                    elementoLista +=
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