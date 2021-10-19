const header = document.querySelector('#header nav ul')
const headerLinks = document.querySelectorAll('#header nav ul li a')
const open = document.querySelector('.icon-menu')
const close = document.querySelector('.icon-close')

open.addEventListener('click', function () {
  header.classList.add('open')
  open.style.visibility = 'hidden'
})

close.addEventListener('click', function () {
  header.classList.remove('open')
  open.style.visibility = 'visible'
})

for (const element of headerLinks) {
  element.addEventListener('click', function () {
    header.classList.remove('open')
    open.style.visibility = 'visible'
  })
}

// Comando para selecionar todas as seções do site e guardar na constante sectionsAll.

const sectionsAll = document.querySelectorAll('main section')

// Adicionando um evento de "Scroll" na página inteira. Ou seja toda vez que o usuário rolar a página, é disparado a função contida no evento a seguir.

window.addEventListener('scroll', function () {
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
})
