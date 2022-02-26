export {Ghost}

class Ghost {
  // // setting default start stats
  constructor() {
    // // level of fullness opposed to hunger
    this.satiety = 10; 
    // // true means no presence of star poop
    this.hygiene = true; 
    // // level meter, affection button is unlocked when ghost is full and clean
    // // disabled for a moment after user uses
    // // max lvl 3 for ghost to come to life
    this.affection = 0; 
    // if true, level meter is able to go up
    // if falselevel meter goes down by 1

  }

  hungry(){
    this.satiety -= 1;
  }
  full(){
    this.satiety += 1;
  }

  dirty(){
    this.hygiene -= 1;
  }
  clean(){
    this.hygiene += 1;
  }

  //i think this will be async
  receiveAffection(){
    this.affection += 1;
  }

  burning(){
    this.affection -= 1;
  }

  // I think i will do the text or levels as a separate class
  // Next todo: export and import ghost and find on console
}