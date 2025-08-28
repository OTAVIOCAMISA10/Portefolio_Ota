const btnMenu = document.getElementById('btnMenu');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');

if (btnMenu && menu && overlay) {
  btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
  });

  const btnFechar = document.querySelector('.menu-mobile .btn-fechar');
  if (btnFechar) {
    btnFechar.addEventListener('click', () => {
      menu.classList.remove('abrir-menu');
    });
  }

  overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
  });
}
// Configurar envio do formulário pelo WhatsApp
document.getElementById("whatsappForm").addEventListener("submit", function(e) {
  e.preventDefault(); 

  // Pegando valores digitados
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let mensagem = document.getElementById("mensagem").value;

  // Número do WhatsApp 
  let numero = "5534998794210";

  // Monta mensagem formatada
  let texto = `Olá, meu nome é ${nome}%0A`
            + `E-mail: ${email}%0A%0A`
            + `Mensagem:%0A${mensagem}`;

  // Abre o WhatsApp
  window.open(`https://wa.me/${numero}?text=${texto}`, "_blank");
});


// Seleciona todos os textareas que precisam crescer automaticamente
document.querySelectorAll("form textarea").forEach(textarea => {
  textarea.addEventListener("input", function() {
    this.style.height = "auto";     
    this.style.height = this.scrollHeight + "px"; 
  });
});

