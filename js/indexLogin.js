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
                    console.log(val.id);
                    console.log(val.balance);

                    sessionStorage.setItem("nombre", val.nombre);
                    sessionStorage.setItem("id", val.id);
                    sessionStorage.setItem("balance", val.balance);
                });
                window.location.replace("../html/main.html");
            }
        }
    });
}