'use strict';

console.log('Java file is linked');

var product1Button = document.getElementById('product-1-button');
var product2Button = document.getElementById('product-2-button');
var product3Button = document.getElementById('product-3-button');

var product1Image = document.getElementById('product-1-image');
var product2Image = document.getElementById('product-2-image');
var product3Image = document.getElementById('product-3-image');

function Product(url) {
  this.url = url;
  this.votes = 0;
}


var allProducts = [
  new Product('images/dog-duck.jpg'),
  new Product('images/breakfast.jpg'),
  new Product('images/sweep.png'),
  new Product('images/bag.jpg'),
  new Product('images/banana.jpg'),
  new Product('images/bathroom.jpg'),
  new Product('images/boots.jpg'),
  new Product('images/bubblegum.jpg'),
  new Product('images/chair.jpg'),
  new Product('images/cthulhu.jpg'),
  new Product('images/dragon.jpg'),
  new Product('images/pen.jpg'),
  new Product('images/pet-sweep.jpg'),
  new Product('images/scissors.jpg'),
  new Product('images/shark.jpg'),
  new Product('images/tauntaun.jpg'),
  new Product('images/unicorn.jpg'),
  new Product('images/usb.gif'),
  new Product('images/water-can.jpg'),
  new Product('images/wine-glass.jpg'),
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
// {
//   product2.votes++;
//   voteCounter++;
//   checkVoteCount();
//   pickNewProducts();
// });

// var handleButton3Vote = function(e) {
//   product3.votes++;
//   voteCounter++;
//   checkVoteCount();
//   pickNewProducts();
// }
// product3Button.addEventListener('click', function(e) {
//   product3.votes++;
//   voteCounter++;
//   checkVoteCount();
//   pickNewProducts();
// });

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
  if(voteCounter >= 5) {
    // console.log('test');
    product1Button.removeEventListener('click', handleButton1Vote, handleButton2Vote, handleButton3Vote);
  }
};

