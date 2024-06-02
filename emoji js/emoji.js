const smileElement = document.querySelector('.smile i.fa-face-smile');
const starElements = document.querySelectorAll('.smile a i.fa-star');

starElements.forEach((star, index) => {
  star.addEventListener('click', () => {
    const rating = index + 1;
    switch (rating) {
      case 1:
        smileElement.className = 'fa-regular fa-face-angry';
        break;
      case 2:
        smileElement.className = 'fa-regular fa-face-frown';
        break;
      case 3:
        smileElement.className = 'fa-regular fa-face-smile';
        break;
      case 4:
        smileElement.className = 'fa-regular fa-face-grin';
        break;
      case 5:
        smileElement.className = 'fa-regular fa-face-laugh';
        break;
    }
  });
});