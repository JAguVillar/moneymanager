document.getElementById("nombre").innerHTML = sessionStorage.getItem("nombre");

function color(signo) {
    if (signo == 'mas') {
        console.log("mas");
        $("#dineroModal").css("background-image", "linear-gradient(to top, #9be15d 0%, #00e3ae 100%");
    } else {
        console.log("menos");
        $("#dineroModal").css("background-image", "linear-gradient(to top, #f77062 0%, #fe5196 100%");
    }
}