$(document).ready(function () {
    console.log("pasa");

    $.getJSON('https://openexchangerates.org/api/currencies.json', function(data) {
        console.log(data);
    });
    
    $("#btnGuardar").click(function (e) {
        e.preventDefault();
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
        )
    });    
});
