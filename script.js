// script.js
const form = document.getElementById('formEmail');
const msg = document.getElementById('msg');

// Captura de emails
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = form.querySelector('input').value;
  msg.textContent = `Obrigado por se inscrever, ${email}! O PDF será enviado por email em breve.`;
  form.reset();
});

// Simulação de botão Pix
function comprarPix() {
  alert("Aqui você pode colocar seu QR code Pix ou link de pagamento direto!");
}