// ABRIR MENU
function initAbrirMenu() {
  const btnMobile = document.querySelector(".btn-mobile");

  function toggleMenu() {
    const nav = document.querySelector(".nav");
    const header = document.querySelector(".header");
    nav.classList.toggle("active");
    if (nav.classList.contains("active")) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  }

  btnMobile.addEventListener("click", toggleMenu);
}
initAbrirMenu();

if (window.SimpleAnime) {
  new SimpleAnime();
}

// fechar menu

const linksMenuAb = document.querySelectorAll('.js-menu a[href^="#"]');

const navegation = document.querySelector(".nav");

function fecharMenu() {
  if (navegation.classList.contains("active")) {
    navegation.classList.remove("active");
  }

  const header = document.querySelector(".header");

  if (navegation.classList.contains("active")) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

linksMenuAb.forEach((item) => {
  item.addEventListener("click", fecharMenu);
});
// Animação

// Scroll Suave

function scrollSuave() {
  // 1 - Selecione os links internos
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  // 3 - função do evento click
  function scrollToSection(event) {
    event.preventDefault(); // Desabilitando a função padrão dos links internos !PRECISO
    const href = event.currentTarget.getAttribute("href"); // capturando o paremetro href !IMPORTANTE
    const section = document.querySelector(href); // apos capturar os parametros href´s dos links ele ficam identicos ao seleter html de id #, dai é so selecionar as secoes correspondente e passar o href (id) como parametro !IMPORTANTE

    // Efeito scrool suave

    const topo = section.offsetTop; // pegando a distancia do topo do elemento ao começo da pagina

    window.scrollTo({
      top: topo,
      behavior: "smooth",
    }); // use esse metodo para fazer o scroll do site ele recebe um objeto com duas propriedades top e behavior
  }

  // 2 Adicione o evento clique a cada link usando foreach
  linksInternos.forEach((item) => {
    item.addEventListener("click", scrollToSection);
  });
}
scrollSuave();

// Card animado com scrool
function initcardAnimadoScroll() {
  const cards = document.querySelectorAll(".js-scroll");
  const windowMetade = window.innerHeight * 0.7;

  function animaScroll() {
    cards.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top;
      const isCardVisible = cardTop - windowMetade < 0;
      if (isCardVisible) {
        card.classList.add("ativo");
      }
    });
  }

  window.addEventListener("scroll", animaScroll);
}
initcardAnimadoScroll();

// SCROLL READER

function initScrollHeader() {
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    header.classList.toggle("ativar", window.scrollY > 595);
  });
}
initScrollHeader();

// MENU ATIVO

// animacao servicos

function initAnimacaoServicos() {
  const target = document.querySelectorAll("[data-anima]");
  const animationClass = "animacao";

  function animationScroll() {
    const windowTop = window.pageYOffset + (window.innerHeight * 3) / 5;
    target.forEach((item) => {
      if (windowTop > item.offsetTop) {
        item.classList.add(animationClass);
      } else {
        item.classList.remove(animationClass);
      }
    });
  }

  window.addEventListener("scroll", () => {
    animationScroll();
  });
}
initAnimacaoServicos();

const sections = document.querySelectorAll("section");
console.log(sections);

function animaLink(sId) {
  const links = document.querySelectorAll(".header-menu a");
  links.forEach((item) => {
    const linkId = item.getAttribute("href");
    item.classList.remove("menu-ativo");
    if (sId === linkId) {
      item.classList.add("menu-ativo");
    }
  });
}

function AnimaNav() {
  sections.forEach((item) => {
    const top = window.scrollY + window.pageXOffset;
    const offset = item.offsetTop;
    const height = item.offsetHeight;

    if (top >= offset && top < offset + height) {
      const sectionId = "#" + item.getAttribute("id");
      console.log(sectionId);
      animaLink(sectionId);
    }
  });
}

window.addEventListener("scroll", () => {
  AnimaNav();
});

// window.scroll = () => {
//   sections.forEach((item) => {
//     const top = window.scrollY;
//     const offset = item.offsetTop;
//     const height = item.offsetHeight;
//     const id = item.getAttribute("id");

//     if (top >= offset && top < offset + height) {
//       navlinks.forEach((item) => {
//         item.classList.remove("menu-ativo");
//         document
//           .querySelectorAll(".header-menu a [href*=" + id + "]")
//           .classList.add("menu-ativo");
//       });
//     }
//   });
// };
