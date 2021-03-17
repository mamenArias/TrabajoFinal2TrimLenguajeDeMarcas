actualizar();

function actualizar() {
    if (sessionStorage.contador) {
        sessionStorage.contador = Number(sessionStorage.contador) + 1;
    } else {
        sessionStorage.setItem("contador", 1);
    }

    $("#visitas").text("Has visitado " + sessionStorage.contador + " páginas.");
}

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

$("#bc").text("Inicio");
$("#bc2").text("Actualidad");