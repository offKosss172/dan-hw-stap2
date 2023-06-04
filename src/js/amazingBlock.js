
const allLink = document.getElementById('AmazingAll');
const graphicLink = document.getElementById('AmazingGraphic');
const webLink = document.getElementById('AmazingWeb');
const landingLink = document.getElementById('AmazingLanding');
const wpLink = document.getElementById('AmazingWp');

const allPhotos = document.querySelectorAll('.amazing-work__foto-allblock .image-wrapper');
const fotoGraphic = document.querySelectorAll('.foto-first-graphic');
const fotoWeb = document.querySelectorAll('.foto-first-web');
const fotoLanding = document.querySelectorAll('.foto-first-landing');
const fotoWp = document.querySelectorAll('.foto-first-wordpress');

allLink.addEventListener('click', () => {
  allPhotos.forEach(element => {
    element.style.display = 'block';
  });;
});
graphicLink.addEventListener('click', () => {
 
  fotoGraphic.forEach(element => {
    element.style.display = 'block';
  });;
  fotoWeb.forEach(element => {
    element.style.display = 'none';
  });;
  fotoLanding.forEach(element => {
    element.style.display = 'none';
  });;
  fotoWp.forEach(element => {
    element.style.display = 'none';
  });;

});
webLink.addEventListener('click', () => {
  fotoGraphic.forEach(element => {
    element.style.display = 'none';
  });;
  fotoWeb.forEach(element => {
    element.style.display = 'block';
  });;
  fotoLanding.forEach(element => {
    element.style.display = 'none';
  });;
  fotoWp.forEach(element => {
    element.style.display = 'none';
  });;

});
landingLink.addEventListener('click', () => {
 
  fotoGraphic.forEach(element => {
    element.style.display = 'none';
  });;
  fotoWeb.forEach(element => {
    element.style.display = 'none';
  });;
  fotoLanding.forEach(element => {
    element.style.display = 'block';
  });;
  fotoWp.forEach(element => {
    element.style.display = 'none';
  });;

});
wpLink.addEventListener('click', () => {
 
  fotoGraphic.forEach(element => {
    element.style.display = 'none';
  });;
  fotoWeb.forEach(element => {
    element.style.display = 'none';
  });;
  fotoLanding.forEach(element => {
    element.style.display = 'none';
  });;
  fotoWp.forEach(element => {
    element.style.display = 'block';
  });;

});




// Получаем ссылку на кнопку "Load More"
var loadMoreBtn = document.getElementById("amazingImagesBtn");

// Добавляем обработчик события клика на кнопку "Load More"
loadMoreBtn.addEventListener("click", function() {
  // Создаем 12 новых блоков с изображениями
  var fotoAllblock = document.querySelector(".amazing-work__foto-allblock");
  for (var i = 1; i <= 12; i++) {
    var imageWrapper = document.createElement("div");
    imageWrapper.classList.add("image-wrapper");
    
    if (i <= 3) {
      imageWrapper.classList.add("foto-first-graphic");
    } else if (i <= 6) {
      imageWrapper.classList.add("foto-first-web");
    } else if (i <= 9) {
      imageWrapper.classList.add("foto-first-landing");
    } else {
      imageWrapper.classList.add("foto-first-wordpress");
    }
    
    var image = document.createElement("img");
    image.src = "/src/img/ouramazingwork/bonus/" + i + ".jpg";
    imageWrapper.appendChild(image);
    
    // Вставляем новый блок после двенадцатого блока
    fotoAllblock.insertBefore(imageWrapper, fotoAllblock.children[12]);
  }
  
  // Скрываем кнопку "Load More"
  loadMoreBtn.style.display = "none";
});


