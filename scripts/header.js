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

const sectionsAll = document.querySelectorAll('main section')

window.addEventListener('scroll', function () {
  for (const section of sectionsAll) {
    if (
      window.scrollY >= section.offsetTop - section.clientHeight / 2 &&
      window.scrollY <= section.offsetTop + section.clientHeight / 2
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

  // console.log(window.scrollY)
})
