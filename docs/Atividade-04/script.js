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



// Seleciona o formulário
const form = document.getElementById('contact-form');

// Inicializa o EmailJS
emailjs.init('ATv4Gla6Yy_Cuv7gK');

// Função para enviar o formulário usando EmailJS
function sendEmail(templateParams) {
    emailjs.send('service_vue5h36', 'template_w5yhswc', templateParams)
      .then(function(response) {
        alert("Formulário enviado com sucesso!");
        form.reset(); // Reseta o formulário após o envio
      })
      .catch(function(error) {
        alert("Erro ao enviar o formulário: " + JSON.stringify(error));
      });
}

// Função para validar o formulário
function validateForm(event) {
  event.preventDefault(); // Impede o envio do formulário caso haja erro

  // Obtém os valores dos campos
  const name = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('telefone').value;
  const message = document.getElementById('mensagem').value;

  // Limpa mensagens anteriores
  document.getElementById('nome').setCustomValidity('');
  document.getElementById('email').setCustomValidity('');
  document.getElementById('telefone').setCustomValidity('');
  document.getElementById('mensagem').setCustomValidity('');

  // Validação de campos obrigatórios e mensagens personalizadas
  if (!name) document.getElementById('nome').setCustomValidity('Por favor, preencha seu nome.');
  if (!email) document.getElementById('email').setCustomValidity('Por favor, preencha seu e-mail.');
  if (!phone) document.getElementById('telefone').setCustomValidity('Por favor, preencha seu telefone.');
  if (!message) document.getElementById('mensagem').setCustomValidity('Por favor, preencha a mensagem.');

  // Validação de formato de email
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (email && !emailPattern.test(email)) {
    document.getElementById('email').setCustomValidity('Por favor, insira um e-mail válido.');
  }

  // Validação de telefone (apenas números)
  const phonePattern = /^[0-9]{10,11}$/;
  if (phone && !phonePattern.test(phone)) {
    document.getElementById('telefone').setCustomValidity('Por favor, insira um telefone válido.');
  }

  // Verifica se o formulário é válido
  if (form.checkValidity()) {

  // Extrair o primeiro nome
  const firstName = name.split(" ")[0];

    // Enviar os dados do formulário via EmailJS
    const templateParams = {
      name: name,
      email: email,
      phone: phone,
      message: message,
      from_name: firstName
    };
    sendEmail(templateParams); // Envia apenas se a validação estiver OK
  } else {
    form.reportValidity(); // Exibe as mensagens de erro personalizadas
  }
}

// Adiciona o evento de submissão ao formulário
form.addEventListener('submit', validateForm);

