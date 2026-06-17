// ===== NÚMERO DE WHATSAPP (ÚNICA FONTE DA VERDADE) =====
// Troque apenas este valor para atualizar TODOS os botões e textos do site.
// Formato: código do país + DDD + número, sem espaços, parênteses ou hífens.
const WHATSAPP_NUMBER = '5521972237627';

// Mensagem opcional que já vem preenchida quando o cliente abre o WhatsApp
const WHATSAPP_MESSAGE = 'Olá, Jaquelma! Gostaria de agendar um horário.';

function aplicarNumeroWhatsapp() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  // Atualiza todos os botões/links que apontam para o WhatsApp
  document.querySelectorAll('[data-whatsapp-link]').forEach(link => {
    link.setAttribute('href', url);
  });

  // Atualiza o número exibido como texto (ex: rodapé)
  const ddd = WHATSAPP_NUMBER.slice(2, 4);
  const parte1 = WHATSAPP_NUMBER.slice(4, 9);
  const parte2 = WHATSAPP_NUMBER.slice(9);
  const numeroFormatado = `(${ddd}) ${parte1}-${parte2}`;

  document.querySelectorAll('[data-whatsapp-display]').forEach(el => {
    el.textContent = numeroFormatado;
  });
}

aplicarNumeroWhatsapp();

// Menu mobile
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
reveals.forEach(el => observer.observe(el));

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => a.classList.remove('active'));
      const match = document.querySelector('.nav-links a[href="#' + entry.target.id + '"]');
      if (match) match.classList.add('active');
    }
  });
}, { threshold: 0.4, rootMargin: '-90px 0px -50% 0px' });
sections.forEach(s => navObserver.observe(s));