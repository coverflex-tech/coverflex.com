const cards = document.querySelectorAll('.feedback-card'),
      cardsTransition = window.getComputedStyle(cards[0]).transition,
      list = document.querySelector('.cards-list'),
      listTransition = window.getComputedStyle(list).transition,
      paginationContainer = document.querySelector('.pagination');

let cardIndex = 0,
    listPaused = false,
    listPressed = false,
    listPosition = 0,
    pages,
    intervalTime = 6000;


const cloneList = () => {
  const listCloneBefore = list.cloneNode(true);
  const listCloneAfter = list.cloneNode(true);

  listCloneBefore.classList.add('list-clone-before');
  listCloneAfter.classList.add('list-clone-after');

  listCloneAfter.querySelector('.feedback-card').remove();

  list.insertBefore(listCloneBefore, cards[0]);
  list.appendChild(listCloneAfter);
}

const renderPagination = () => {
  const pagesLength = cards.length;
  
  for(let i = 0; i < pagesLength - 1; i++) {
    const elPage = document.createElement('a');
    elPage.href = i;
    
    if(cardIndex === i) {
      elPage.classList.add('page', 'active');
    } else {
      elPage.classList.add('page');
    }

    paginationContainer.appendChild(elPage);
  }

  pages = document.querySelectorAll('.page');
  addPagesEvent();
}

const changePage = (page) => {
  pages.forEach((page) => page.classList.remove('active'));
  pages[page].classList.add('active');
}

const addPagesEvent = () => {
  pages.forEach((page, index) => {
    page.addEventListener('click', (e) => {
      e.preventDefault();
      changePage(index);
      moveToCard(index);
    });
  });  
}

const changeCardClass = (card) => {
  cards[card].classList.add('active');
}

const moveToCard = (card) => {
  cardIndex = card;

  let cardWidth = cards[cardIndex].offsetWidth;
  cardWidth = cardWidth + parseInt(window.getComputedStyle(cards[cardIndex]).marginLeft) * 2;

  list.style.transform = `translateX(${-cardWidth * cardIndex}px)`;
  changeCardClass(card);
  
  list.style.transition = listTransition;
  cards[0].style.transition = cardsTransition;

  if (card === cards.length - 1) {    
    cardIndex = 0;
    
    setTimeout(() => {
      changeCardClass(cardIndex);

      list.style.transition = 'none';
      cards[0].style.transition = 'none';

      list.style.transform = `translateX(0px)`;
      listPosition = 0;
    }, 400);
  }

  changePage(cardIndex);
}

const moveLeft = () => {
  cardIndex++;

  if(cardIndex >= cards.length) {
    moveToCard(0);
  } else {
    moveToCard(cardIndex);
  }
}

const addCardsEvent = () => {
  cards.forEach((card) => {
    card.addEventListener('mouseenter', (e) => {
      listPaused = true;
    });

    card.addEventListener('mouseleave', (e) => {
      listPaused = false;
    });

    card.addEventListener('click', (e) => {
      moveLeft();
    });
  });
}

const moveList = () => {
  setInterval(() => {
    if(!listPaused) {
      moveLeft();
    }
  }, intervalTime);
}

(initList = () => {
  renderPagination();

  addCardsEvent();

  cloneList();

  moveList();
})();
