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
     addProduct(product){
        const productList= document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class= 'card text-center mb-4'>
                <div class= 'card-body'>
                    <strong>Nombre del Producto</strong>: ${product.name}
                    <strong>Precio del Producto </strong>: ${product.price}
                    <strong>Año del Producto</strong>: ${product.year}
                    <a href='#' class= 'btn btn-danger' name='delete'>Borrar</a>
                </div>

            </div>
        `;
        productList.appendChild(element);
     }
     resetForm(){
         document.getElementById('product-form').reset();
         
     }

     deleteProduct(element){
         //para eliminar un elemento
        if(element.name==='delete'){
            // buscamos el div completo y lo eliminamos
            element.parentElement.parentElement.parentElement.remove();
        }
     }

     showMessage(){

     }
 }

 // evento del DOM adactar
document.getElementById('product-form')
    .addEventListener('submit', function(e) {
        // almacenado en una costante los evento
        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;
        const year = document.getElementById('year').value;
        console.log(name,price,year);
        //los elemento y creando el objeto producto
        const product = new Product (name,price,year);
        //costando para agregar el producto
        const ui= new UI();
        ui.addProduct(product);
        // llamando el metodo de reseteo del formulario
        ui.resetForm();
        //
        e.preventDefault();
});
// evento del para eliminar
document.getElementById('product-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.deleteProduct(e.target);
});

