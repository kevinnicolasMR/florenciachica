console.log('Los botones Buncionan')

const buttonActionHeader = document.querySelector('.acctionHeader');
const fixedMenuHeaderOver = document.querySelector('.fixedMenuHeaderOver')


buttonActionHeader.addEventListener('click', () => {
    const fixedMenuHeaderOver = document.querySelector('.fixedMenuHeaderOver');
    fixedMenuHeaderOver.classList.toggle('show');
  });
  