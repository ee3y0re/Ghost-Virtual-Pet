import {Ghost} from './scripts/ghost';

document.addEventListener('DOMContentLoaded', () => {
  const sassper = new Ghost();

  function getHungry() {
    return new Promise(sayHunger => {
      setTimeout(() => {
        console.log("in getHungry")
        sassper.hungry();
        const hungerTag = document.getElementById("hunger")
        if (hungerTag.innerText === "") {
          hungerTag.innerText = "That disgusting thing hanging off your nose reminds me of boo-gers. Speaking of which, I'm hungry!";
        }
        sassper.testSatiety();
      }, 3000);
    });
  }

  async function callHungry() {
    console.log("in callHungry")
    const speak = await getHungry();
    console.log(speak)
  }

  //not sure if i need this line
  let hungerID;

  function hungryCycle() {
    console.log("in hungryCycle")
    if (!hungerID) {
      hungerID = setInterval(callHungry, 30000);
    }
  }

  // function notHungryAnymore() {
  //   clearInterval(hungerID);
  //   hungerID = null;
  // }

  hungryCycle();
});