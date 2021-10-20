const header = document.querySelector('header')
const nav = document.querySelector('#header nav ul')
const navLinks = document.querySelectorAll('#nav nav ul li a')
const open = document.querySelector('.icon-menu')
const close = document.querySelector('.icon-close')

open.addEventListener('click', function () {
  nav.classList.add('open')
  open.style.visibility = 'hidden'
})

close.addEventListener('click', function () {
  nav.classList.remove('open')
  open.style.visibility = 'visible'
})

for (const element of navLinks) {
  element.addEventListener('click', function () {
    nav.classList.remove('open')
    open.style.visibility = 'visible'
  })
}

// Comando para selecionar todas as seções do site e guardar na constante sectionsAll.

const sectionsAll = document.querySelectorAll('main section')

// Adicionando um evento de "Scroll" na página inteira. Ou seja toda vez que o usuário rolar a página, é disparado a função contida no evento a seguir.

function activeMenuLink() {
  for (const section of sectionsAll) {
    if (
      window.scrollY >= section.offsetTop - 300 &&
      window.scrollY <= section.offsetTop + section.clientHeight - 300
    ) {
      document
        .querySelector(`header nav ul li a[href="#${section.id}"]`)
        .classList.add('active')
    } else {
      document
        .querySelector(`header nav ul li a[href="#${section.id}"]`)
        .classList.remove('active')
    }
  }
}

function addingStyleToHeader() {
  if (window.scrollY >= 30) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

window.addEventListener('scroll', function () {
  activeMenuLink()
  addingStyleToHeader()
})
