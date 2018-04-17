'use strict';

console.log('Java file is linked');

var product1Button = document.getElementById('product-1-button');
var product2Button = document.getElementById('product-2-button');
var product3Button = document.getElementById('product-3-button');


function Product(url) {
  this.url = url;
  this.votes = 0;
};


var allProducts = [
  new Product('img/dog-duck.jpg'),
  new Product('img/breakfast.jpg'),
  new Product('img/sweep.jpg'),
];

var product1 = allProducts[0];
var product2 = allProducts[1];
var product3 = allProducts[2];


product1Button.addEventListener('click', function(e) {
  product1.votes++;
});
product2Button.addEventListener('click', function(e) {
  product2.votes++;
});
product3Button.addEventListener('click', function(e) {
  product3.votes++;
});