'use strict';

// Cart constructor.
var Cart = function(items) {
  // this.items is an array of CartItem instances.
  this.items = items;
};

Cart.prototype.addItem = function(product, quantity) {
  // TODO: Fill in this instance method to create a new CartItem and add it to this.items
  let newItem = new CartItem(product, quantity);
  
  console.log(cart.items.length);
  if (cart.items.length === 0) {
    this.items.push(newItem);
  }

  let itemFound = false;

  for (let i = 0; i < cart.items.length; i++) {
    if (cart.items[i].product === newItem.product) {
      console.log(cart.items.indexOf(newItem.product));
      cart.items[cart.items.indexOf(newItem.product)] = newItem;
      itemFound = true;
      console.log(itemFound);
    } 
  }
  console.log(itemFound);
  if (itemFound === false) {
    this.items.push(newItem);
  }
  
  // above: So with the way the logic is written, the for loop should look for a matching product.name and overwrite any duplicates. Afterward, the next if conditional checks to see if the last item in the array matches the newItem.product. If it doesn't, it pushes it in. This should make it so there are never any duplicates and brand new items always get pushed into the array, in theory.
 
  console.log(cart.items[cart.items.indexOf(newItem)]);
  console.log(cart.items);

};

Cart.prototype.saveToLocalStorage = function() {
  // TODO: Fill in this instance method to save the contents of the cart to localStorage
  localStorage.setItem('cart', JSON.stringify(this));
};

Cart.prototype.removeItem = function(item) {
  // TODO: Fill in this instance method to remove one item from the cart.
  // Note: You will have to decide what kind of parameter to pass in here!
  let index = cart.indexOf(item);
  cart.splice(index, 1);
  console.log(cart);
};

var CartItem = function(product, quantity) {
  this.product = product;
  this.quantity = quantity;
};

// Product contructor.
var Product = function(filePath, name) {
  this.filePath = filePath;
  this.name = name;
  Product.allProducts.push(this);
};
Product.allProducts = [];

function generateCatalog() {
  new Product('assets/bag.jpg', 'Bag');
  new Product('assets/banana.jpg', 'Banana');
  new Product('assets/bathroom.jpg', 'Bathroom');
  new Product('assets/boots.jpg', 'Boots');
  new Product('assets/breakfast.jpg', 'Breakfast');
  new Product('assets/bubblegum.jpg', 'Bubblegum');
  new Product('assets/chair.jpg', 'Chair');
  new Product('assets/cthulhu.jpg', 'Cthulhu');
  new Product('assets/dog-duck.jpg', 'Dog-Duck');
  new Product('assets/dragon.jpg', 'Dragon');
  new Product('assets/pen.jpg', 'Pen');
  new Product('assets/pet-sweep.jpg', 'Pet Sweep');
  new Product('assets/scissors.jpg', 'Scissors');
  new Product('assets/shark.jpg', 'Shark');
  new Product('assets/sweep.png', 'Sweep');
  new Product('assets/tauntaun.jpg', 'Taun-Taun');
  new Product('assets/unicorn.jpg', 'Unicorn');
  new Product('assets/usb.gif', 'USB');
  new Product('assets/water-can.jpg', 'Water Can');
  new Product('assets/wine-glass.jpg', 'Wine Glass');
}

// Initialize the app by creating the big list of products with images and names
generateCatalog();
