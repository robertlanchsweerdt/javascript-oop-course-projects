const firstCounter = document.querySelector('.first-counter');
const secondCounter = document.querySelector('.second-counter');

class Counter {
  constructor(element, value) {
    this.element = element;
    this.value = value;

    this.valueDOM = element.querySelector('.value');
    this.valueDOM.innerText = value;

    this.increaseBtn = element.querySelector('.increase');
    this.decreaseBtn = element.querySelector('.decrease');
    this.resetBtn = element.querySelector('.reset');

    this.increaseCounter = this.increaseCounter.bind(this);
    this.decreaseCounter = this.decreaseCounter.bind(this);
    this.resetCounter = this.resetCounter.bind(this);

    this.increaseBtn.addEventListener('click', this.increaseCounter);
    this.decreaseBtn.addEventListener('click', this.decreaseCounter);
    this.resetBtn.addEventListener('click', this.resetCounter);
  }

  increaseCounter() {
    this.value++;
    this.valueDOM.innerText = this.value;
  }

  decreaseCounter() {
    this.value--;
    this.valueDOM.innerText = this.value;
  }

  resetCounter() {
    this.value = 0;
    this.valueDOM.innerText = this.value;
  }
}

firstCounterObj = new Counter(firstCounter, 100);
secondCounterObj = new Counter(secondCounter, 200);
