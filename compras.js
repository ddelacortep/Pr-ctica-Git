/**
   * Creates an instance of Producto.
   * @param {*} nombre el nombre del prducto
   * @param {*} precio el precio del producto
   * @param {*} cantidad la cantidad total de producto
   * @memberof Producto
   */
  class Producto {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }
/**
 *
 *
 * @return {*} retorna el preu total comptant la quantitat de productes 
 * @memberof Producto
 */
calcularTotal() {
    return this.precio * this.cantidad;
  }
}

class Carrito {
  constructor() {
    this.productos = [];
  }

  agregarProducto(producto) {
    this.productos.push(producto);
  }

  calcularTotalCarrito() {
    return this.productos.reduce((total, producto) => total + producto.calcularTotal(), 0);
  }

  vaciarCarrito() {
    this.productos = [];
  }
}

/**
 * Clase que representa a un usuario dentro del sistema.
 * Cada usuario tiene un nombre, un correo electrónico y un carrito de compras asociado.
 */
class Usuario {
  /**
   * Constructor de la clase Usuario.
   * @param {string} nombre - Nombre del usuario.
   * @param {string} correo - Correo electrónico del usuario.
   */
  constructor(nombre, correo) {
    /** @type {string} Nombre del usuario */
    this.nombre = nombre;

    /** @type {string} Correo electrónico del usuario */
    this.correo = correo;

    /** @type {Carrito} Instancia del carrito de compras asociado al usuario */
    this.carrito = new Carrito();
  }

  /**
   * Agrega un producto al carrito del usuario.
   * @param {Producto} producto - Objeto que representa el producto a agregar.
   */
  agregarProductoAlCarrito(producto) {
    this.carrito.agregarProducto(producto);
  }

  /**
   * Finaliza la compra actual del usuario.
   * Calcula el total del carrito, muestra un mensaje en consola y vacía el carrito después de la compra.
   */
  finalizarCompra() {
    const total = this.carrito.calcularTotalCarrito();
    console.log(`Usuario ${this.nombre} ha realizado una compra por un total de ${total}€`);
    this.carrito.vaciarCarrito();
  }
}



const producto1 = new Producto("Laptop", 1200, 1);
const producto2 = new Producto("Mouse", 20, 2);

const usuario = new Usuario("Juan", "juan@example.com");

usuario.agregarProductoAlCarrito(producto1);
usuario.agregarProductoAlCarrito(producto2);

usuario.finalizarCompra();
