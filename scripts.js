///////////Menus responsivos////////////
document.addEventListener("DOMContentLoaded", function () {
  // Dropdown hover para desktop
  if (window.innerWidth > 991) {
    const dropdowns = document.querySelectorAll(".nav-item.dropdown");
    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener("mouseenter", function () {
        this.querySelector(".dropdown-menu").classList.add("show");
      });

      dropdown.addEventListener("mouseleave", function () {
        this.querySelector(".dropdown-menu").classList.remove("show");
      });
    });
  }
});

//////////Seção de lançamentos ///////////

// Buscador de produtos - exibe o resultado da busca

document
  .querySelector(".search-bar form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o recarregamento da página

    const input = document.querySelector(".search-input").value.trim(); // Pega o valor digitado
    const resultDiv = document.getElementById("search-result");

    if (input !== "") {
      resultDiv.textContent = `Você buscou por: '${input}'`;
    } else {
      resultDiv.textContent = "";
    }
  });

document.addEventListener("DOMContentLoaded", function () {
  // Inicialização do carrossel de produtos
  var productCarousel = new bootstrap.Carousel(
    document.getElementById("productCarousel"),
    {
      interval: 5000,
      wrap: true,
    }
  );

  // Adicionar efeitos de hover para os produtos

  const productCards = document.querySelectorAll(".product-card");

  productCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      // Animação suave ao passar o mouse
      this.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
      this.style.transform = "translateY(-10px)";
      this.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.1)";

      // Mostrar botão de compra com mais destaque
      const buyButton = this.querySelector(".btn-buy");
      if (buyButton) {
        buyButton.style.backgroundColor = "#005ce6";
      }
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
      this.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.05)";

      const buyButton = this.querySelector(".btn-buy");
      if (buyButton) {
        buyButton.style.backgroundColor = "";
      }
    });
  });
});

// Botões de compra com hover effect
var buyButtons = document.querySelectorAll(".btn-buy");

buyButtons.forEach(function (button) {
  button.addEventListener("mouseenter", function () {
    this.textContent = "Adicionar ao carrinho";
  });

  button.addEventListener("mouseleave", function () {
    this.textContent = "Comprar";
  });
});

/////////////////newsletter//////////////////////
// Validação simples do formulário de newsletter
const newsletterForm = document.querySelector(".newsletter-form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameInput = this.querySelector('input[type="text"]');
    const emailInput = this.querySelector('input[type="email"]');
    const checkbox = this.querySelector('input[type="checkbox"]');

    let isValid = true;

    // Validar nome
    if (!nameInput.value.trim()) {
      markInvalid(nameInput, "Por favor, digite seu nome");
      isValid = false;
    } else {
      markValid(nameInput);
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value)) {
      markInvalid(emailInput, "Por favor, digite um e-mail válido");
      isValid = false;
    } else {
      markValid(emailInput);
    }

    // Validar checkbox
    if (!checkbox.checked) {
      alert("Por favor, aceite nossa política de privacidade.");
      isValid = false;
    }

    if (isValid) {
      // Simulação de envio bem-sucedido
      alert("Obrigado por se cadastrar em nossa newsletter!");
      this.reset();
    }
  });
}

function markInvalid(input, message) {
  input.classList.add("is-invalid");

  let feedback = input.nextElementSibling;
  if (!feedback || !feedback.classList.contains("invalid-feedback")) {
    feedback = document.createElement("div");
    feedback.className = "invalid-feedback";
    input.parentNode.insertBefore(feedback, input.nextSibling);
  }
  feedback.textContent = message;
}

function markValid(input) {
  input.classList.remove("is-invalid");
  input.classList.add("is-valid");

  const feedback = input.nextElementSibling;
  if (feedback && feedback.classList.contains("invalid-feedback")) {
    feedback.remove();
  }
}
