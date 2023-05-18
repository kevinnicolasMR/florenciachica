console.log('Los botones funcionan');

const buttonOfOver = document.querySelector('.buttonOfOver');
const buttonActionHeader = document.querySelector('.acctionHeader');
const fixedMenuHeaderOver = document.querySelector('.fixedMenuHeaderOver');

buttonActionHeader.addEventListener('click', () => {
  fixedMenuHeaderOver.classList.toggle('show');
});

buttonOfOver.addEventListener('click', () => {
  if (fixedMenuHeaderOver.classList.contains('show')) {
    fixedMenuHeaderOver.classList.remove('show');
  }
});
