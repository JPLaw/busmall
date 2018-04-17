'use strict';

console.log('Java file is linked');

var product1Button = document.getElementById('product-1-button');
var product2Button = document.getElementById('product-2-button');
var product3Button = document.getElementById('product-3-button');


function Product(url) {
  
};


var allProducts = [];

var product1Votes = 0;
var product2Votes = 0;
var product3Votes = 0;


product1Button.addEventListener('click', function(e) {
  product1Votes++;
});
product2Button.addEventListener('click', function(e) {
  product2Votes++;
});
product3Button.addEventListener('click', function(e) {
  product3Votes++;
});