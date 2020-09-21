let burger = document.querySelector('.harmburger');
const midSpan = document.querySelector('.harmburger span:nth-child(2)')
const firstSpan = document.querySelector('.harmburger span:nth-child(1)')
const thirdSpan = document.querySelector('.harmburger span:nth-child(3)')
let dropDown = document.querySelector('header .nav__item');
burger.addEventListener('click', () => {
  midSpan.classList.toggle('drop')
  firstSpan.classList.toggle('cross')
  thirdSpan.classList.toggle('revCross')
  dropDown.classList.toggle('open')
})