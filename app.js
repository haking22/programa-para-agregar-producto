// uso de la orientacion a objeto

/*
--una clase que sera la clase producto 
--que tendra como a tributos nombre,precio,ano
--metodos que seran agregar producto, eliminar, guardar
*/
class Product{
    // metodo que se ejecuta a penas se crea un nuevo objeto utilizando dicha clase
    constructor(name, price, year) {
        // utilizamos el metodo this para apuntar o asignar
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

/*
tendremos otra clase que duncionara de interfas que tendra unos metodo
 */

 class UI{
     addProduct(){

     }

     deleteProduct(){

     }

     showMessage(){

     }
 }

 // evento del DOM
