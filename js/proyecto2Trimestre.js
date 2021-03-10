actualizar();

function actualizar() {
    if (sessionStorage.contador) {
        sessionStorage.contador = Number(sessionStorage.contador) + 1;
    } else {
        sessionStorage.setItem("contador", 1);
    }

    $("#visitas").text("Has visitado " + sessionStorage.contador + " páginas.");
}

nombre();

function nombre() {
    $(".migas").text(sessionStorage.getItem(onclick()));
}