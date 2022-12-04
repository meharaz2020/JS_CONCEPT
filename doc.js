 const displaylocalstoragecart = () => {
     const cart = getCart();
     for (const name in cart) {
         displayproduct(name);
     }
 }











 const additem = () => {
     const nameField = document.getElementById('product-name');
     const name = nameField.value;

     if (!name) {
         return;
     }
     //display: 
     displayproduct(name);

     addProductToCart(name);





     nameField.value = '';
 }

 const displayproduct = name => {
     const ul = document.getElementById('products');
     const li = document.createElement('li');
     li.innerText = name;
     ul.appendChild(li);
 }

 const getCart = () => {
     const cart = localStorage.getItem('cart');
     let cartObj;
     if (cart) {
         cartObj = JSON.parse(cart);
     } else {
         cartObj = {};
     }
     return cartObj;
 }

 const addProductToCart = name => {
     const cart = getCart();
     cart[name] = 1;
     const cartstringified = JSON.stringify(cart);
     localStorage.setItem('cart', cartstringified);
 }

 displaylocalstoragecart();