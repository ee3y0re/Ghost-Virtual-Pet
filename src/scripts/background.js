export {Background}

class Background {
  constructor(weather) {
    this.start = false;
    this.weather = weather;
  }

  resetGame() {
    this.start = false;
  }
  // i think i want to animate rain
  // have the user try to hold the umbrella over the ghost
  rain(){};
  stopRain(){};

  // or we can just add a giant sunray and use that for protecting ghost
  //again with the umbrella
  heatWave(){}
  coolDown(){}
}