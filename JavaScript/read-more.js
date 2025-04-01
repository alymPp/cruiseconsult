document.querySelectorAll('.faq-question').forEach(item => {
  item.addEventListener('click', () => {
      const parent = item.parentElement;
      parent.classList.toggle('active');
  });
});

function toggleText(cardId) {
    const textElement = document.getElementById(`card-text-${cardId}`);
    const a = textElement ? textElement.nextElementSibling : null;
  
    if (a) {
      // Если текст ограничен, раскрываем его
      if (textElement.style.webkitLineClamp === "4" || textElement.style.webkitLineClamp === "") {
        textElement.style.webkitLineClamp = "unset"; // Полностью раскрываем текст
        textElement.style.overflow = "visible"; // Убираем обрезку
        a.textContent = "Скрыть"; // Меняем текст кнопки
      } else {
        textElement.style.webkitLineClamp = "4"; // Снова ограничиваем текст
        textElement.style.overflow = "hidden";
        a.textContent = "Читать дальше"; // Меняем текст кнопки
      }
    }
  }


const swiper = new Swiper('.js-reviews-slider', {
grabCursor: true,
spaceBetween: 30,

pagination: {
el: '.swiper-pagination',
clickable: true,
},
on: {
init: function () {
    document.querySelector('.swiper-pagination').style.position = 'static';
}
},
breakpoints: {
767:{
  slidesPerView: 2
}
}
})

