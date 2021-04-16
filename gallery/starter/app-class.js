const natureSection = document.querySelector('.nature');
const citySection = document.querySelector('.city');

class Gallery {
  constructor(section) {
    // set-up variables
    this.section = section;
    this.images = document.querySelectorAll('img');
    this.modal = document.querySelector('.modal');
    this.modalImages = document.querySelector('.modal-images');
    this.modalMainImg = document.querySelector('.main-img');
    this.modalCloseBtn = document.querySelector('.close-btn');
    this.sectionImgList = [...section.querySelectorAll('img')];
    this.modalNextBtn = document.querySelector('.next-btn');
    this.modalPrevBtn = document.querySelector('.prev-btn');

    // bind Gallery for click event listeners
    this.galleryCloseModal = this.galleryCloseModal.bind(this);
    this.galleryNextPhoto = this.galleryNextPhoto.bind(this);
    this.galleryPrevPhoto = this.galleryPrevPhoto.bind(this);
    this.gallerySelectPhoto = this.gallerySelectPhoto.bind(this);

    // add event listener to open modal
    this.section.addEventListener(
      'click',
      function (e) {
        if (e.target.classList.contains('img')) {
          this.galleryOpenModal(e.target, this.sectionImgList);
        }
      }.bind(this)
    );
  }

  galleryOpenModal(selectedImage, sectionImgList) {
    // open modal
    this.modal.classList.add('open');

    // go to function that will display main selected image
    this.galleryDisplayMainImage(selectedImage);

    // display gallery on modal
    this.modalImages.innerHTML = sectionImgList
      .map((image) => {
        return `<img
        src="${image.src}"
        title="${image.title}"
        data-id="${image.id}"
        class="${
          selectedImage.dataset.id === image.dataset.id
            ? 'modal-img selected'
            : 'modal-img'
        }"
        alt="${image.title}"
      />`;
      })
      .join('');

    // add event listener to close modal
    this.modalCloseBtn.addEventListener('click', this.galleryCloseModal);
    this.modalNextBtn.addEventListener('click', this.galleryNextPhoto);
    this.modalPrevBtn.addEventListener('click', this.galleryPrevPhoto);
    this.modalImages.addEventListener('click', this.gallerySelectPhoto);
  }

  galleryCloseModal() {
    // remove event listeners when closing modal
    this.modal.classList.remove('open');
    this.modalCloseBtn.removeEventListener('click', this.galleryCloseModal);
    this.modalNextBtn.removeEventListener('click', this.galleryNextPhoto);
    this.modalPrevBtn.removeEventListener('click', this.galleryPrevPhoto);
    this.modalImages.removeEventListener('click', this.gallerySelectPhoto);
  }

  galleryDisplayMainImage(selectedImage) {
    // display main image selected
    this.modalMainImg.src = selectedImage.src;
    this.modalMainImg.alt = selectedImage.title;
  }

  gallerySelectPhoto(e) {
    if (!e.target.classList.contains('modal-img')) return;
    const currentSelected = this.modalImages.querySelector('.selected');
    currentSelected.classList.remove('selected');

    this.galleryDisplayMainImage(e.target);
    e.target.classList.add('selected');
  }

  galleryNextPhoto() {
    const highlightedPhoto = this.modalImages.querySelector('.selected');
    const nextPhoto =
      highlightedPhoto.nextElementSibling || this.modalImages.firstElementChild;

    this.galleryDisplayMainImage(nextPhoto);
    highlightedPhoto.classList.remove('selected');
    nextPhoto.classList.add('selected');
  }

  galleryPrevPhoto() {
    const highlightedPhoto = this.modalImages.querySelector('.selected');
    const prevPhoto =
      highlightedPhoto.previousElementSibling || this.modalImages.lastChild;

    this.galleryDisplayMainImage(prevPhoto);
    highlightedPhoto.classList.remove('selected');
    prevPhoto.classList.add('selected');
  }
}

natureSectionObj = new Gallery(natureSection);
citySectionObj = new Gallery(citySection);
