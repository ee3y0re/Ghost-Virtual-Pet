export {Ghost}

class Ghost {
  constructor() {
    this.satiety = true; //true
    this.hygiene = true; //true
    this.affection = 0; 
  }

  satietySwitch() {
    if (this.satiety === false) {
      this.satiety = true;
    } else {
      this.satiety = false;
    }
  }

  hygieneSwitch() {
    if (this.hygiene === false) {
      this.hygiene = true;
    } else {
      this.hygiene = false;
    }
  }

  receiveAffection() {
    this.affection += 1;
  }
}