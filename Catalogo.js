let catalogo = [];
function agregarProducto(nombre, precio) {
    if (typeof nombre !== 'string' || typeof precio !== 'number') {
        alert('Nombre debe ser texto y precio debe ser número');
        return;
    }
    const producto = { nombre, precio };
    catalogo.push(producto);
}
const eliminarProducto = function(nombre) {
    catalogo = catalogo.filter(producto => producto.nombre !== nombre);
};
const buscarProducto = function(nombre) {
    return catalogo.find(function(producto) {
        return producto.nombre === nombre;
    });
};
const mostrarProductos = () => {
    const lista = document.getElementById("listaProductos");
    lista.innerHTML = '';
    catalogo.forEach(producto => {
        const li = document.createElement("li");
        li.textContent = `Nombre: ${producto.nombre}, Precio: ${producto.precio}`;
        lista.appendChild(li);
    });
};
function agregar() {
    const nombre = document.getElementById("nombreProducto").value;
    const precio = parseFloat(document.getElementById("precioProducto").value);
    agregarProducto(nombre, precio);
    mostrarProductos();
}
function eliminar() {
    const nombre = document.getElementById("nombreEliminar").value;
    eliminarProducto(nombre);
    mostrarProductos();
}
function buscar() {
    const nombre = document.getElementById("nombreBuscar").value;
    const resultado = buscarProducto(nombre);
    const display = document.getElementById("resultadoBusqueda");
    if (resultado) {
        display.textContent = `Encontrado: Nombre: ${resultado.nombre}, Precio: ${resultado.precio}`;
    } else {
        display.textContent = "Producto no encontrado";
    }
}
function mostrar() {
    mostrarProductos();
}
// Ejemplo de uso
agregarProducto("Laptop", 1000);
agregarProducto("Teléfono", 500);
agregarProducto("Tablet", 300);
eliminarProducto("Teléfono");
const encontrado = buscarProducto("Laptop");
console.log(encontrado); 
mostrarProductos(); 
// Eliminar el producto "Tablet"
eliminarProducto("Tablet");

