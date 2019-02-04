$.getJSON('https://openexchangerates.org/api/currencies.json', function (data) {
    var seleccion = `<option selected id="divisas">Elija una divisa</option>`;
    console.log(data);
    $.each(data, function (i, currency) {
        seleccion += `<option value="` + i + `">` + data[i] + `</option>`;
    });
    $("#selectDivisas").html(seleccion);
});

function registro() {
    var nombre = $("#inputNombre").val();
    var email = $("#inputEmail").val();
    var contra = $("#inputContra").val();
    var divisa = $("#selectDivisas").val();

    $.ajax({
        url: "../php/registro.php",
        dataType: "text",
        method: "POST",
        data: {
            nombre : nombre,
            email :  email,
            contra : contra,
            divisa : divisa,
        },
        success: function (response) {
            console.log("Logeo exitoso");
        }
    });
}

