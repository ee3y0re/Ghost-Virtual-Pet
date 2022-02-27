import {Ghost} from './scripts/ghost';

document.addEventListener('DOMContentLoaded', () => {

  //background and game
  const canvas = document.getElementById("play");
  const ctx = canvas.getContext("2d");
  ctx.canvas.width = 1000; //size of canvas and play area
  ctx.canvas.height = 562; //size of canvas and play area

  /* 
  ghost
  the properties are changing
  but for some reason, the object method isn't being defined on console
  const test = new Ghost() 
  */

  // console.log(test)
  // test.hungry()
  // console.log(test)
  // test.full()
  // console.log(test)
  const ghost = new Image(); //initialized presence of ghost
  ghost.src = "../assets/ghost-Sheet-master-blazter-big.png" //linked image ghost to source in assets folder
  ghost.onload = () => { //begin the drawing
    ctx.drawImage(ghost, 500, 300); //image and position
  }



});