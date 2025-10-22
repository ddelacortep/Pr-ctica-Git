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

/**
 * Representa un carrito de compras que puede contener varios productos.
 */
class Carrito {
  /**
   * Crea una nueva instancia del carrito.
   * @constructor
   */
  constructor() {
    /**
     * Cada producto debe ser un objeto que implemente el método `calcularTotal()`.
     * @type {Array<Object>}
     */
    this.productos = [];
  }

  /**
   * Agrega un producto al carrito.
   * @param {Object} producto - El producto a agregar.
   * @param {Function} producto.calcularTotal - Método del producto que retorna su precio total.
   */
  agregarProducto(producto) {
    this.productos.push(producto);
  }

  /**
   * Calcula el total acumulado de todos los productos en el carrito.
   * @returns {number} El total del carrito (suma de los totales de cada producto).
   */
  calcularTotalCarrito() {
    return this.productos.reduce((total, producto) => total + producto.calcularTotal(), 0);
  }

  /**
   * Vacía completamente el carrito, eliminando todos los productos.
   * @returns {void}
   */
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
