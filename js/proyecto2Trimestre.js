actualizar();

function actualizar() {
    if (sessionStorage.contador) {
        sessionStorage.contador = Number(sessionStorage.contador) + 1;
    } else {
        sessionStorage.setItem("contador", 1);
    }

    $("#visitas").text("Has visitado " + sessionStorage.contador + " páginas.");
}

$("#bc").text("Inicio");
$("#bc2").text("Actualidad");

/*
nombre();

function nombre() {
    $(".migas").text(sessionStorage.getItem(onclick()));
}

$(function() {
    $(".lado ul li a").click(function() {
        // quitar .seleccionado a todos (por si hay alguno)
        $(".lado ul li a").removeClass("activo");
        // agregar seleccionado a "este" elemento.
        $(this).addClass("activo");
    });
});*/