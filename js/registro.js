$.getJSON('https://openexchangerates.org/api/currencies.json', function (data) {
    var seleccion = `<option selected id="divisas">Elija una divisa</option>`;
    console.log(data);
    $.each(data, function (i, currency) {
        seleccion += `<option value="` + i + `">` + data[i] + `</option>`;
    });
    $("#divisas").html(seleccion);
});