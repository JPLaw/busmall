'use strict';

console.log('JavaScript file is linked');

var product1Button = document.getElementById('product-1-button');
var product2Button = document.getElementById('product-2-button');
var product3Button = document.getElementById('product-3-button');

var product1Image = document.getElementById('product-1-image');
var product2Image = document.getElementById('product-2-image');
var product3Image = document.getElementById('product-3-image');

Product.productNames = [];
Product.productVotes = [];

function Product(url, name) {
  this.url = url;
  this.name = name;
  this.votes = 0;
  Product.productVotes.push(this.votes);
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

var previousArray = [];
function pickNewProducts() {
  while(product1 === product2 || product1 === product3 || product2 === product3 || previousArray.includes(product1) || previousArray.includes(product2) || previousArray.includes(product3)) {
    product1 = allProducts[Math.floor(Math.random() * allProducts.length)];
    product2 = allProducts[Math.floor(Math.random() * allProducts.length)];
    product3 = allProducts[Math.floor(Math.random() * allProducts.length)];
  }
  product1Image.src = product1.url;
  product2Image.src = product2.url;
  product3Image.src = product3.url;
  previousArray = [product1, product2, product3];
}



pickNewProducts();


var checkVoteCount = function() {
  if(voteCounter >= 25) {
    // console.log('test');
    product1Button.removeEventListener('click', handleButton1Vote);
    product2Button.removeEventListener('click', handleButton2Vote);
    product3Button.removeEventListener('click', handleButton3Vote);
    createList();
    Product.renderChart();
  }
};

var ulElement = document.getElementById('vote-list');

function createList() {
  for(var i=0; i < allProducts.length; i++) {
    //creates ul element
    var liElement = document.createElement('li');
    //give element content
    liElement.textContent = allProducts[i].name + ' ' + allProducts[i].votes; 
    Product.productVotes[i] = allProducts[i].votes;
    Product.productNames[i] = allProducts[i].name;
    console.log(liElement.textContent);
    //append li child to the ul parent element
    ulElement.appendChild(liElement);
  }
}

// use Chart.js to create a bar chart
Product.renderChart = function() {
  var ctx = document.getElementById('myChart');
console.log(Product.productNames);
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Product.productNames,
      datasets: [{
        label: 'Votes Per Product',
        data: Product.productVotes,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]

    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      title: {
        display: true,
        text: 'Results'
      }
    }
  });
};

