// Array with products (objects) added directly with push(). Products in this array are repeated.
let cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
let cart = [];

//Variable que guarda el numero de productos que tienes en el carrito.
let total = 0;

//Variable que guarda el precio total del carrito, osea la suma de el precio de los productos del array cart.
let preuTotal = 0;

// Exercise 1
function buy(id) {

  //Añade +1 a el contador para que veas cuantos productos tienes en el carrito.
  total ++;
  document.getElementById('count_product').innerHTML= total;
  
  //Al clicar depende de el boton envia un id 1,2,3... que con el filter busca en el array de productos y lo compara con los id hasta que lo encuentra y lo añade a el array cartList.
  const trobar = products.filter((item) => item.id === id);
  cartList.push(...trobar);
  console.log(cartList);
  
  //Se llama a la funcion de generar el carrito así se va actualizando automaticamente cada vez que añades un producto.
  generateCart();

}



// Exercise 2
function cleanCart() {
  
  //Reinicia el array de cartList haciendo que este vacio.
  cartList = [];

  //Reinicia el array de cart haciendo que este vacio.
  cart = [];

  //Reinicia la variable de el precio total de los productos dandole de valor 0. I tambien lo imprime en pantalla para que se vea actualizado no solo en el javascript sino en html.
  preuTotal = 0;
  document.getElementById('total_price').innerHTML = preuTotal;

  //Reinicia la variable total que es el contador de productos del carrito, dandole valor 0. I tambien lo imprime por pantalla.
  total = 0;
  document.getElementById('count_product').innerHTML = total;

  //Sirve para comprovar que los arrays esten vacios.
  console.log(cartList);
  console.log(cart);

}

//Esta mini funcion sirve para reiniciar el valor de precio total.
function reset(){
  preuTotal = 0;
}

// Exercise 3
function calculateTotal() {
  //Este bucle sirve para sumar el precio de todos los productos dentro de array cartList.
  cart.forEach(products => {
    preuTotal += products.subtotalWithDiscount;
  })
  document.getElementById('total_price').innerHTML = preuTotal;   

}

// Exercise 4
function generateCart() {
  cart = [];
  cartList.forEach(product => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity++;
      let total = existingItem.price * existingItem.quantity;
      existingItem.subtotalWithDiscount = total;
    } else {
      let total = product.price;
      const newProd = {
        ...product,
        quantity: 1,
        subtotal: 31.5,
        subtotalWithDiscount: total,
      };
      cart.push(newProd);
    }
  });
  
  console.log(cart);
  return cart;
  // Using the "cartlist" array that contains all the items in the shopping cart,
  // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
}

// Exercise 5
function applyPromotionsCart() {
cart.forEach(product => {
  if (product.id === 1 && product.quantity >= 3) {
    product.price = 8.4;
    let total = Number(8.4 * product.quantity);
    product.subtotalWithDiscount = total;
  }
  if (product.id === 3 && product.quantity >= 10) {
    product.price = 2.4;
    let total = Number(2.4 * product.quantity);
    product.subtotalWithDiscount = total;
  }
})
  // Apply promotions to each item in the array "cart"
}

// Exercise 6
function printCart() {
    document.getElementById('table').innerHTML ="";
    let table = document.getElementById('table');
    let row = table.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let text1 = document.createTextNode('Product');
    let text2 = document.createTextNode('Price');
    let text3 = document.createTextNode('Qty.');
    let text4 = document.createTextNode('Total (with discount)');
    cell1.appendChild(text1);
    cell2.appendChild(text2);
    cell3.appendChild(text3);
    cell4.appendChild(text4);
    
    cart.forEach(product => {
    let table = document.getElementById('table');
    
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);

    let text1 = document.createTextNode(product.name);
    let text2 = document.createTextNode(product.price);
    let text3 = document.createTextNode(product.quantity);
    let text4 = document.createTextNode(product.subtotalWithDiscount);

    cell1.appendChild(text1);
    cell2.appendChild(text2);
    cell3.appendChild(text3);
    cell4.appendChild(text4);
    })
  // Fill the shopping cart modal manipulating the shopping cart dom
}

// ** Nivell II **

// Exercise 7
function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
}

function open_modal() {
  applyPromotionsCart();
  calculateTotal();
  printCart();
  console.log("Open Modal");

}
