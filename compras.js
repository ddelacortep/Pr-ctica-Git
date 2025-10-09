class Producto {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }

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
     * Lista de productos agregados al carrito.
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


class Usuario {
  constructor(nombre, correo) {
    this.nombre = nombre;
    this.correo = correo;
    this.carrito = new Carrito();
  }

  agregarProductoAlCarrito(producto) {
    this.carrito.agregarProducto(producto);
  }

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
