const firstCounter = document.querySelector('.first-counter');
const secondCounter = document.querySelector('.second-counter');

function Counter(element, value) {
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

Counter.prototype.increaseCounter = function () {
  console.log('howdy');
  this.value++;
  this.valueDOM.innerText = this.value;
};
Counter.prototype.decreaseCounter = function () {
  console.log('howdy');
  this.value--;
  this.valueDOM.innerText = this.value;
};
Counter.prototype.resetCounter = function () {
  console.log('howdy');
  this.value = 0;
  this.valueDOM.innerText = this.value;
};

const firstCounterObj = new Counter(firstCounter, 100);
const secondCounterObj = new Counter(secondCounter, 200);
