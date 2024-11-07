// Inicializando o Swiper
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,          
    spaceBetween: 10,          
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 3000, 
        disableOnInteraction: false,
    },
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true, 
    }    
});

// Fetch data from Fake Store API
fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(products => {
    // Access the container where products will be displayed
    const produtosContainer = document.getElementById('produtos-container');

    // Filter out electronics category
    const produtosFiltrados = products.filter(product => product.category !== "electronics" && product.category !== "jewelery");

    // Loop through each filtered product and display it
    produtosFiltrados.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'mb-4');  // Bootstrap column classes


      // Construct the product card HTML
      productCard.innerHTML = `
        <div class="card">
          <img src="${product.image}" class="card-img-top" alt="${product.title}">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.description.substring(0, 100)}...</p>
            <p class="card-text"><strong>$${product.price}</strong></p>
            <a href="#" class="btn btn-primary">Adicionar ao carrinho</a>
          </div>
        </div>
      `;

      // Append the product card to the container
      produtosContainer.appendChild(productCard);
    });
  })
  .catch(error => console.error('Error fetching data:', error));
