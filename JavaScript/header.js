
console.log("Alymbek Urozmatov 0500969212 WA @alymsvibe instagram");

const openButton = document.getElementById('open-sidebar-button')
const navbar = document.getElementById('navbar')

const media = window.matchMedia("(width < 700px)")

media.addEventListener('change', (e) => updateNavbar(e))

function updateNavbar(e){
  const isMobile = e.matches
  console.log(isMobile)
  if(isMobile){
    navbar.setAttribute('inert', '')
  }
  else{
    navbar.removeAttribute('inert')
  }
}

function openSidebar(){
  navbar.classList.add('show')
  openButton.setAttribute('aria-expanded', 'true')
  navbar.removeAttribute('inert')
}

function closeSidebar(){
  navbar.classList.remove('show')
  openButton.setAttribute('aria-expanded', 'false')
  navbar.setAttribute('inert', '')
}

updateNavbar(media)

// Функция для обновлении карусели слайдов партнеров 

function refreshSection() {
  const section = document.getElementById("refreshable-section");
  if (section) {
      const clonedSection = section.cloneNode(true); // Клонируем секцию
      section.parentNode.replaceChild(clonedSection, section); // Заменяем старую секцию новой
  }
}

// Запускаем обновление каждые 30 секунд (30 000 мс)
setInterval(refreshSection, 30000);


document.addEventListener('DOMContentLoaded', function() {
  let currentPage = window.location.pathname.split("/").pop(); // Получаем имя текущей страницы

  // Получаем все ссылки в навигации
  let navLinks = document.querySelectorAll('nav a');

  // Перебираем все ссылки и добавляем класс active для соответствующей
  navLinks.forEach(link => {
    let href = link.getAttribute('href').split("/").pop(); // Получаем только имя страницы из href

    // Пропускаем ссылку с id="index"
    if (href === currentPage && link.id !== 'index') {
      link.classList.add('active'); // Добавляем класс active
    } else {
      link.classList.remove('active'); // Убираем класс active, если не совпадает
    }
  });
});

