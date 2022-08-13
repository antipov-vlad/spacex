const mainList = document.querySelector('.main__list');
const mainItem = mainList.querySelector('.main__item');
const mainItemCurrent = mainItem.querySelector('::after');

mainList .addEventListener("mousemove", evt => {
  const x = evt.offsetX;
  const y = evt.offsetY;

  if (evt.target.classList.contains('main__item')) {
    
    evt.target.classList.add('main__item--current')
    evt.target.style.background = `radial-gradient(circle at ${x}px ${y}px,  rgba(194, 185, 185, 0.5) 0%, rgba(199, 177, 177, 0) 70%)`;
  }

  else if ( evt.target.className == 'main__item-content') {
    
   
    
    evt.target.parentElement.classList.add('main__item--current')  
    evt.target.parentElement.style.background = `radial-gradient(circle at ${x}px ${y}px,  rgba(194, 185, 185, 0.24) 0%, rgba(199, 177, 177, 0) 70%)`;
  }
  

  
});

mainList.addEventListener("mouseout", evt => {
  evt.target.style.background = '';
  evt.target.parentElement.style.background =''
  evt.target.classList.remove('main__item--current')
  evt.target.parentElement.classList.remove('main__item--current')
});
