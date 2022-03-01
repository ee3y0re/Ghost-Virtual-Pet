export {Ghost}

class Ghost {
  constructor() {
    this.satiety = 10; 
    this.hygiene = 10; 
    this.affection = 0; 
  }

  // // v2

  // satietySwitch() {
  //   if (this.satiety === false) {
  //     this.satiety = true;
  //   } else {
  //     this.satiety = false;
  //   }
  // }

  // hygieneSwitch() {
  //   if (this.hygiene === false) {
  //     this.hygiene = true;
  //   } else {
  //     this.hygiene = false;
  //   }
  // }

  // receiveAffection() {
  //   this.affection += 1;
  // }

  // neglect() {
  //   this.affection -= 1;
  // }
  

  // //v1
  hungry() {
    this.satiety -= 1;
  }
  feed() {
    this.satiety += 1;
  }

  dirty() {
    this.hygiene = 1;
  }
  clean() {
    this.hygiene += 1;
  }

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