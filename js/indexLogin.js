function login() {
    var email = $("#inputLogemail").val();
    var contra = $("#inputLogcontra").val();

    $.ajax({
        url: "../php/login.php",
        method: "POST",
        dataType: "text",
        data: {
            email: email,
            contra: contra,
        },
        success: function (response) {
            if (response == "0") {
                console.log("no se encontro");
            } else {
                response = JSON.parse(response);
                $.each(response, function (i, val) {
                    console.log(val.nombre);
                    sessionStorage.setItem("nombre", val.nombre);
                });
                window.location.replace("../html/main.html");
            }
        }
    });
}