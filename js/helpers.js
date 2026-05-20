function construirNodo(etiqueta) {
    var elemento = document.createElement(etiqueta);
    return elemento;
}

function construirNodoTexto(etiqueta, contenido) {
    var elemento = document.createElement(etiqueta);
    var nodoTexto = document.createTextNode(contenido);
    elemento.appendChild(nodoTexto);
    return elemento;
}

function construirImagen(ruta, descripcion) {
    var elemento = construirNodo("img");
    elemento.src = ruta;
    elemento.alt = descripcion;
    return elemento;
}

function insertarEnBody(nodo) {
    document.body.appendChild(nodo);
}

function construirEnlace(destino, etiqueta) {
    var enlace = construirNodoTexto("a", etiqueta);
    enlace.href = destino;
    return enlace;
}

function insertarDentro(hijo, padre) {
    padre.appendChild(hijo);
}
