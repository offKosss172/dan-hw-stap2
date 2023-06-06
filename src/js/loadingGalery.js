const btnGallery = document.getElementById('blockImagesBtn');
const galleryFoto = document.querySelectorAll('.gallery__block-secret');

btnGallery.addEventListener('click', () => {
  
  const plusImg = btnGallery.querySelector('img');
  const loadMoreText = btnGallery.querySelector('p');
  const contentButton = btnGallery.querySelector('.content-button');
    plusImg.style.display = 'none';
    loadMoreText.style.display = 'none';
    contentButton.style.display = 'block';

  setTimeout(() => {
    
    btnGallery.style.display = 'none';
    galleryFoto.forEach(element => {
      element.style.display = 'block';
    });
  }, 2500);
});