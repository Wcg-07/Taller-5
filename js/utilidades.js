function generarTag(tagName) {
    var nuevoElemento = document.createElement(tagName);
    return nuevoElemento;
}
 
function generarTagConTexto(tagName, contenido) {
    var nuevoElemento = document.createElement(tagName);
    var nodoDeTexto = document.createTextNode(contenido);
    nuevoElemento.appendChild(nodoDeTexto);
    return nuevoElemento;
}
 
function generarTagImagen(src, altText) {
    var imgTag = generarTag("img");
    imgTag.src = src;
    imgTag.alt = altText;
    return imgTag;
}
 
function agregarAlBody(nodo) {
    document.body.appendChild(nodo);
}
 
function generarTagEnlace(url, textoVisible) {
    var tagA = generarTagConTexto("a", textoVisible);
    tagA.href = url;
    return tagA;
}
 
function agregarHijo(hijo, padre) {
    padre.appendChild(hijo);
}
