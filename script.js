// Скролл наверх
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Форма — перехват отправки
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Спасибо за сообщение! Мы скоро свяжемся с вами.");
});
