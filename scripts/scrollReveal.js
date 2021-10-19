// ScrollReveal().reveal('.title, nav ul li a')
ScrollReveal({
  origin: 'top',
  distance: '38px',
  duration: 1000,
  reset: true
}).reveal(
  '#home h2, #home p, #home a, #home img, #about h2, #about p, #about .contact, #projects h2, #projects a, #services h2, #services .card-service, #skills h2, #skills .skill'
)
