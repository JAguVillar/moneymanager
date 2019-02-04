function login() {
    var email = $("#inputLogemail").val();
    var contra = $("#inputLogcontra").val();
    
    $.ajax({
        url: "../php/login.php",
        method: "POST",
        dataType: "text",
        data: {
            email : email,
            contra : contra,
        },
        success: function (response) {
            console.log(response);             
        }
    });


}