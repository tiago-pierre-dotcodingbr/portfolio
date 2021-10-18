const backToTopButton = document.querySelector('.back-to-top')

window.addEventListener('scroll', function () {
  if (window.scrollY >= 560) {
    backToTopButton.style.visibility = 'visible'
    backToTopButton.style.bottom = '1rem'
  } else {
    backToTopButton.style.visibility = 'hidden'
    backToTopButton.style.bottom = '-5rem'
  }
})
