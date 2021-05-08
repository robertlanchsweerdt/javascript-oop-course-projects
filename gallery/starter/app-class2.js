const natureSection = document.querySelector('.nature');
const citySection = document.querySelector('.city');

class Gallery {
  constructor(section) {
    this.section = section;
    this.modal = document.querySelector('.modal');
    this.closeBtn = document.querySelector('.close-btn');
    this.mainImg = document.querySelector('.main-img');
    this.modalImages = document.querySelector('.modal-images');
    this.sectionImages = [...section.querySelectorAll('img')];
    this.nextBtn = document.querySelector('.next-btn');
    this.prevBtn = document.querySelector('.prev-btn');

    // bind
    this.closeModal = this.closeModal.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
    this.modalChosenImage = this.modalChosenImage.bind(this);

    this.section.addEventListener(
      'click',
      function (e) {
        if (e.target.classList.contains('img')) {
          this.openModal();
          this.displaySelectedImg(e.target);
          this.modalImagesGallery(e.target, this.sectionImages);
        }
      }.bind(this)
    );
  }

  openModal() {
    this.modal.classList.add('open');

    this.closeBtn.addEventListener('click', this.closeModal);
    this.nextBtn.addEventListener('click', this.nextImage);
    this.prevBtn.addEventListener('click', this.prevImage);
    this.modalImages.addEventListener('click', this.modalChosenImage);
  }

  closeModal() {
    this.modal.classList.remove('open');

    this.closeBtn.removeEventListener('click', this.closeModal);
    this.nextBtn.removeEventListener('click', this.nextImage);
    this.prevBtn.removeEventListener('click', this.prevImage);
    this.modalImages.removeEventListener('click', this.modalChosenImage);
  }

  displaySelectedImg(target) {
    this.mainImg.src = target.src;
    this.mainImg.alt = target.alt;
    document.querySelector('.image-name').innerText = target.title;
  }

  modalImagesGallery(target, imagesArray) {
    const sectionImages = imagesArray
      .map((image) => {
        return `<img
            src="${image.src}"
            title="${image.title}"
            class="${
              target.dataset.id === image.dataset.id
                ? 'modal-img selected'
                : 'modal-img'
            }"
            data-id="${image.dataset.id}"
            alt="${image.alt}"
          />`;
      })
      .join('');

    this.modalImages.innerHTML = sectionImages;
  }

  nextImage() {
    const currentModalGalleryImg = document.querySelector('.selected');
    const nextModalGalleryImg =
      currentModalGalleryImg.nextElementSibling ||
      this.modalImages.firstElementChild;

    currentModalGalleryImg.classList.remove('selected');
    nextModalGalleryImg.classList.add('selected');

    this.displaySelectedImg(nextModalGalleryImg);
  }

  prevImage() {
    const currentModalGalleryImg = document.querySelector('.selected');
    const prevModalGalleryImg =
      currentModalGalleryImg.previousElementSibling ||
      this.modalImages.lastElementChild;

    currentModalGalleryImg.classList.remove('selected');
    prevModalGalleryImg.classList.add('selected');

    this.displaySelectedImg(prevModalGalleryImg);
  }

  modalChosenImage(e) {
    this.displaySelectedImg(e.target);

    const chosenImageSelected = this.modalImages.querySelector('.selected');
    chosenImageSelected.classList.remove('selected');
    e.target.classList.add('selected');
  }
}

const natureSectionObj = new Gallery(natureSection);
const citySectionObj = new Gallery(citySection);
