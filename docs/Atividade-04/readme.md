# Projeto Landing Page

Este é um projeto de uma landing page moderna, desenvolvida utilizando HTML, CSS, JavaScript e bibliotecas externas. A página inclui um formulário de contato que utiliza a API EmailJS para enviar os dados para o e-mail do destinatário. A landing page é responsiva e contém seções interativas, como um slider e exibição de depoimentos.

## Como visualizar o projeto localmente

1. Clone o repositório para o seu computador:
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```
    
2. Navegue até a pasta do projeto:
    ```bash
    cd seu-repositorio
    ```

3. Abra o arquivo `index.html` no seu navegador:
    - Se preferir, você pode usar um servidor local para visualizar a página com mais recursos (como interatividade com APIs).
    - Uma opção é usar o [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) se estiver utilizando o Visual Studio Code.

## Tecnologias e Bibliotecas Utilizadas

- **HTML**: Para a estrutura da página.
- **CSS**: Para o estilo da página, incluindo design responsivo e animações.
- **JavaScript**: Para a interatividade, como validação de formulários e consumo de APIs.
- **EmailJS**: Para enviar e-mails diretamente do formulário de contato sem a necessidade de um back-end.
- **Swiper.js**: Para implementar o slider/carrossel interativo.
- **AOS.js**: Para animações ao rolar a página.

## APIs Utilizadas

### EmailJS

- **Serviço utilizado**: [EmailJS](https://www.emailjs.com/)
- **Função**: Enviar os dados do formulário de contato diretamente para um endereço de e-mail.
- **Como funciona**: Ao preencher o formulário de contato, o JavaScript valida os dados e envia a solicitação através da API EmailJS para o endereço de e-mail configurado.
- **Configuração**: O projeto utiliza um template pré-configurado no EmailJS, que é preenchido dinamicamente com os dados do formulário.

### Outros serviços/API

Se você utilizou alguma API para a seção de "Serviços" ou "Testemunhos", adicione os detalhes aqui.

## Bibliotecas Externas

### Swiper.js

- **Função**: Usada para criar o slider/carrossel de imagens. A biblioteca permite a navegação suave entre os slides, além de ser altamente personalizável.
- **Documentação**: [Swiper.js Documentation](https://swiperjs.com/)

### AOS.js

- **Função**: Biblioteca usada para adicionar animações aos elementos da página enquanto o usuário rola a página. Ela melhora a interatividade e a experiência visual.
- **Documentação**: [AOS.js Documentation](https://michalsnik.github.io/aos/)

### Font Awesome

- **Função**: Usada para os ícones de redes sociais e outros elementos da interface, como o ícone do Facebook, Twitter, entre outros.
- **Documentação**: [Font Awesome Documentation](https://fontawesome.com/)

## Como configurar a EmailJS

1. **Criação de conta no EmailJS**:
   - Vá até [EmailJS](https://www.emailjs.com/) e crie uma conta.

2. **Configuração do serviço**:
   - Crie um serviço (ex: um servidor de e-mail como Gmail, Outlook, etc.) dentro da plataforma EmailJS.

3. **Criação do template**:
   - Crie um template de e-mail. Use as variáveis `{{name}}`, `{{email}}`, `{{phone}}`, e `{{message}}` para preencher os dados do formulário de contato.

4. **Substituindo as chaves no código**:
   - No código JavaScript, substitua `ATv4Gla6Yy_Cuv7gK` pela sua chave pública do EmailJS.
   - Substitua `service_vue5h36` e `template_w5yhswc` pelos respectivos IDs do seu serviço e template no EmailJS.

## Como contribuir

1. Faça um fork deste repositório.
2. Crie uma branch para sua feature (`git checkout -b feature/xyz`).
3. Faça suas modificações e commit (`git commit -am 'Adiciona nova feature'`).
4. Envie a branch para o repositório remoto (`git push origin feature/xyz`).
5. Crie um pull request explicando as mudanças realizadas.

## Licença

Este projeto é licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
