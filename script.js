const apiUrl = 'http://makeup-api.herokuapp.com/api/v1/products.json';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const productList = document.getElementById('product-list');

    data.forEach(product => {
      const productName = product.name;
      const li = document.createElement('li');
      li.textContent = productName;
      productList.appendChild(li);
    });
  })
 