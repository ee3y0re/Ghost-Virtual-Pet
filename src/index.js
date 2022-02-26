import {Ghost} from './scripts/ghost';

document.addEventListener('DOMContentLoaded', () => {

  //background and game
  const canvas = document.getElementById("playground");
  const ctx = canvas.getContext("2d");
  ctx.canvas.width = 1000; //size of canvas and play area
  ctx.canvas.height = 700; //size of canvas and play area
  const skies = new Image(); //initialized presence of image bg
  skies.src = "../assets/sky_digital_moons.png" //linked image bg to source in assets folder
  skies.onload = () => { //begin the drawing
    ctx.drawImage(skies, 0, 100); //give breathing room above
  }

  //does not follow resizing dynamically






  // the properties are changing 
  // but for some reason, the object method isn't being defined on console
  const test = new Ghost()
  console.log(test)
  test.hungry()
  console.log(test)
  test.full()
  console.log(test)
});