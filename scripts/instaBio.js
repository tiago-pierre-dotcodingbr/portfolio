// ScrollReveal().reveal('.title, nav ul li a')
ScrollReveal().reveal('header', {
  origin: 'top',
  distance: '38px',
  duration: 1500,
  reset: true
})

ScrollReveal().reveal('h1, main >a, p, div a', {
  origin: 'top',
  distance: '38px',
  duration: 1500,
  reset: true,
  delay: 300
})
