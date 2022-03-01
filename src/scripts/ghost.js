export {Ghost}

class Ghost {
  constructor() {
    this.satiety = 10; 
    this.hygiene = true; 
    this.affection = 0; 
  }

  hungry() {
    this.satiety -= 1;
  }
  full() {
    this.satiety += 1;
  }

  dirty() {
    this.hygiene -= 1;
  }
  clean() {
    this.hygiene += 1;
  }

  //i think this will be async
  receiveAffection() {
    this.affection += 1;
  }

  burning() {
    this.affection -= 1;
  }

  //test methods

  testSatiety() {
    console.log(this.satiety);
  }
}