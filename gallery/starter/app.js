function getElement(selecstion) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

const natureSection = document.querySelector('.nature');
const citySection = document.querySelector('.city');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-btn');
const modalLeftBtn = document.querySelector('.prev-btn');
const modalRightBtn = document.querySelector('.next-btn');

function Gallery(section) {
  this.section = section;
  this.imagesList = Array.from(section.querySelectorAll('img'));

  this.section.addEventListener(
    'click',
    function (e) {
      if (e.target.classList.contains('img')) {
        this.openModal(e.target, this.imagesList);
      }
    }.bind(this)
  );
}

Gallery.prototype.openModal = function (selectedImage, sectionImageList) {
  modal.classList.add('open');

  const mainImage = document.querySelector('.main-img');
  const mainImageTitle = document.querySelector('.image-name');
  let modalImages = document.querySelector('.modal-images');

  mainImageTitle.innerText = selectedImage.title;
  mainImage.src = selectedImage.src;
  modalImages.innerHTML = sectionImageList
    .map((image) => {
      return `<img
    src="${image.src}"
    title="${image.title}"
    data-id="${image.dataset.id}"
    class="${
      selectedImage.dataset.id === image.dataset.id
        ? 'modal-img selected'
        : 'modal-img'
    }"
    alt="${image.title}"
  />`;
    })
    .join('');
};

const natureSectionObj = new Gallery(natureSection);
const citySectionObj = new Gallery(citySection);
