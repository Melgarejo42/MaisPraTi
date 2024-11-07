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

// API da Garden Flora API

// URL to the Garden Flora JSON data
const API_URL = 'https://raw.githubusercontent.com/some-datasets/plant-dataset/main/plants.json';

async function fetchProducts() {
    try {
        const response = await fetch(API_URL);
        const plants = await response.json();
        displayProducts(plants);
    } catch (error) {
        console.error("Error loading product data:", error);
    }
}

function displayProducts(plants) {
    const container = document.getElementById('produtos-container');
    container.innerHTML = ''; // Clear container

    plants.forEach(plant => {
        const productHTML = `
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">${plant.name}</h5>
                        <p class="card-text">${plant.description || "No description available."}</p>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += productHTML;
    });
}

// Initialize the fetching of products when the page loads
fetchProducts();

