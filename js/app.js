'use strict';

console.log('Java file is linked');

var product1Button = document.getElementById('product-1-button');
var product2Button = document.getElementById('product-2-button');
var product3Button = document.getElementById('product-3-button');

var product1Image = document.getElementById('product-1-image');
var product2Image = document.getElementById('product-2-image');
var product3Image = document.getElementById('product-3-image');

function Product(url, name) {
  this.url = url;
  this.name = name;
  this.votes = 0;
}


var allProducts = [
  new Product('images/dog-duck.jpg', 'Dog duck'),
  new Product('images/breakfast.jpg', 'Breakfast'),
  new Product('images/sweep.png', 'Baby Sweeper'),
  new Product('images/bag.jpg', 'R2D2 Bag'),
  new Product('images/banana.jpg', 'Banana Slicer'),
  new Product('images/bathroom.jpg', 'TP Holder'),
  new Product('images/boots.jpg', 'Boots'),
  new Product('images/bubblegum.jpg', 'Bubblegum'),
  new Product('images/chair.jpg', 'Chair'),
  new Product('images/cthulhu.jpg', 'Cthulhu'),
  new Product('images/dragon.jpg', 'Dragon'),
  new Product('images/pen.jpg', 'Pen'),
  new Product('images/pet-sweep.jpg', 'Pet Sweeper'),
  new Product('images/scissors.jpg', 'Pizza Scissors'),
  new Product('images/shark.jpg', 'Shark Blanket'),
  new Product('images/tauntaun.jpg', 'Tauntaun'),
  new Product('images/unicorn.jpg', 'Unicorn'),
  new Product('images/usb.gif', 'USB'),
  new Product('images/water-can.jpg', 'Water Can'),
  new Product('images/wine-glass.jpg', 'Wine Glass'),
];

var product1 = allProducts[0];
var product2 = allProducts[1];
var product3 = allProducts[2];

var voteCounter = 0;

var handleButton1Vote = function(e) {
  product1.votes++;
  voteCounter++;
  checkVoteCount();
  pickNewProducts();
};

var handleButton2Vote = function(e) {
  product2.votes++;
  voteCounter++;
  checkVoteCount();
  pickNewProducts();
};

var handleButton3Vote = function(e) {
  product3.votes++;
  voteCounter++;
  checkVoteCount();
  pickNewProducts();
};

product1Button.addEventListener('click', handleButton1Vote);
product2Button.addEventListener('click', handleButton2Vote);
product3Button.addEventListener('click', handleButton3Vote);


function pickNewProducts() {
  product1 = allProducts[Math.floor(Math.random() * allProducts.length)];
  product1Image.src = product1.url;
  product2 = allProducts[Math.floor(Math.random() * allProducts.length)];
  product2Image.src = product2.url;
  product3 = allProducts[Math.floor(Math.random() * allProducts.length)];
  product3Image.src = product3.url;
}

pickNewProducts();


var checkVoteCount = function() {
  while(voteCounter >= 5) {
    // console.log('test');
    product1Button.removeEventListener('click', handleButton1Vote);
    product2Button.removeEventListener('click', handleButton2Vote);
    product3Button.removeEventListener('click', handleButton3Vote);
  } for(var i = 0; i < allProducts.length; i++) {
    //creates ul element
    var liElement = document.createElement('li');
    //give element content
    liElement.textContent = allProducts[i].name + ' ' + allProducts[i].votes;
    //append li child to the ul parent element
    ulElement.appendChild(liElement);
  }
};

var ulElement = document.getElementById('vote-list');

// function createList() {
//   for(var i=0; i < allProducts.length; i++) {
//     //creates ul element
//     var liElement = document.createElement('li');
//     //give element content
//     liElement.textContent = allProducts[i].name + ' ' + allProducts[i].votes;
//     //append li child to the ul parent element
//     ulElement.appendChild(liElement);
//   }
// }

createList();
