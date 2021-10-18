const sections = document.querySelectorAll('section')

function resizeSections() {
  let currentHeight = window.innerHeight
  for (const element of sections) {
    element.clientHeight >= currentHeight
      ? element.classList.remove('section')
      : element.classList.add('section')
  }
}

resizeSections()

window.addEventListener('resize', function () {
  resizeSections()
})
