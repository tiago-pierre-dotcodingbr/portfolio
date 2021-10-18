const header = document.querySelector('#header nav ul')
const headerLinks = document.querySelectorAll('#header nav ul li a')
const open = document.querySelector('.icon-menu')
const close = document.querySelector('.icon-close')

const sectionsAll = document.querySelectorAll('main section [id]')

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

window.addEventListener('scroll', function () {
  // console.log(window.scrollY)
  for (const section of sectionsAll) {
    const sectionId = section.getAttribute('id')
    if (window.scrollY >= section.offsetTop) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      // document
      //   .querySelector(`#header nav ul li a[href="#${section.id}"]`)
      //   .classList.remove('active')
    }
  }

  // console.log(window.scrollY)
})
