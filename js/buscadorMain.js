function buscarCat(categoria) {
    $("#buscarMonto").html("");
    $("#buscarGasto").html("");

    if (categoria == "") {
        actualizarLista();
    } else {
        categoria = parseFloat(categoria);
        $.ajax({
            method: "POST",
            url: "../php/buscarCat.php",
            dataType: "text",
            data: {
                id: sessionStorage.getItem("id"),
                categoria: categoria,
            },
            success: function (response) {
                $("#listaGastos").html('');

                if (response.length == 2) {
                    var elementoLista = `<div class="container" style="margin-top: 20px"><img src="../img/vacio.svg" alt="" style="margin-left: auto; width: 50%; margin-right: auto; display: block;"></div>`;
                    $("#listaGastos").html(elementoLista);
                } else {
                    console.log("pasarella");
                    response = JSON.parse(response);
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
                            `<div id="control">` +
                            `<div id="eliminar" data-tippy="Eliminar" data-tippy-arrow="true" data-tippy-arrowType="rounded"
                        data-tippy-placement="top" data-tippy-theme="light" value="` + val.idMov + `">
                        <i class='uil uil-trash-alt' id="eliminarGasto"></i></div>` +
                            `</div>` +
                            `</div>`;
                        $("#listaGastos").append(elementoLista);
                    });
                }
            }
        });
    }
}

$("#buscarGasto").keyup(function (e) {
    var input = $("#buscarGasto").val();

    $("#buscarMonto").html("");
    $("#buscarCat").html("");

    if (input.length == 0) {
        actualizarLista();
    } else {
        $.ajax({
            method: "POST",
            url: "../php/buscarGasto.php",
            dataType: "text",
            data: {
                id: sessionStorage.getItem("id"),
                input: input,
            },
            success: function (response) {
                $("#listaGastos").html('');

                if (response.length == 2) {
                    var elementoLista = `<div class="container" style="margin-top: 20px"><img src="../img/vacio.svg" alt="" style="margin-left: auto; width: 50%; margin-right: auto; display: block;"></div>`;
                    $("#listaGastos").html(elementoLista);
                } else {
                    console.log("pasarella");
                    response = JSON.parse(response);
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
                            `<div id="control">` +
                            `<div id="eliminar" data-tippy="Eliminar" data-tippy-arrow="true" data-tippy-arrowType="rounded"
                        data-tippy-placement="top" data-tippy-theme="light" value="` + val.idMov + `">
                        <i class='uil uil-trash-alt' id="eliminarGasto"></i></div>` +
                            `</div>` +
                            `</div>`;
                        $("#listaGastos").append(elementoLista);
                    });
                }
            }
        });
    }
});

$("#buscarMonto").keyup(function (e) {
    var input = $("#buscarMonto").val();

    $("#buscarGasto").html("");
    $("#buscarCat").html("");

    if (input.length == 0) {
        actualizarLista();
    } else {
        input = parseFloat(input);
        $.ajax({
            method: "POST",
            url: "../php/buscarMonto.php",
            dataType: "text",
            data: {
                id: sessionStorage.getItem("id"),
                input: input,
            },
            success: function (response) {
                $("#listaGastos").html('');

                if (response.length == 2) {
                    var elementoLista = `<div class="container" style="margin-top: 20px"><img src="../img/vacio.svg" alt="" style="margin-left: auto; width: 50%; margin-right: auto; display: block;"></div>`;
                    $("#listaGastos").html(elementoLista);
                } else {
                    console.log("pasarella");
                    response = JSON.parse(response);
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
                            `<div id="control">` +
                            `<div id="eliminar" data-tippy="Eliminar" data-tippy-arrow="true" data-tippy-arrowType="rounded"
                        data-tippy-placement="top" data-tippy-theme="light" value="` + val.idMov + `">
                        <i class='uil uil-trash-alt' id="eliminarGasto"></i></div>` +
                            `</div>` +
                            `</div>`;
                        $("#listaGastos").append(elementoLista);
                    });
                }
            }
        });
    }
});


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
            if (response.length == 2) {
                var elementoLista = `<div class="container" style="margin-top: 20px"><img src="../img/vacio.svg" alt="" style="margin-left: auto; width: 50%; margin-right: auto; display: block;"></div>`;
                $("#listaGastos").html(elementoLista);
            } else {
                console.log("pasarella");
                response = JSON.parse(response);
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
                        `<div id="control">` +
                        `<div id="eliminar" data-tippy="Eliminar" data-tippy-arrow="true" data-tippy-arrowType="rounded"
                        data-tippy-placement="top" data-tippy-theme="light" value="` + val.idMov + `">
                        <i class='uil uil-trash-alt' id="eliminarGasto"></i></div>` +
                        `</div>` +
                        `</div>`;
                    $("#listaGastos").append(elementoLista);
                });
            }
        }
    });
}

