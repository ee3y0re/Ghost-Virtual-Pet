import {Ghost} from './scripts/ghost';

document.addEventListener('DOMContentLoaded', () => {
  const sassper = new Ghost();

  // // // setTimeout Practice
  function getHungry() {
    console.log('in async function')
    return new Promise(sayHunger => {
      setTimeout(() => {
        sassper.hungry();
        const hungerTag = document.getElementById("hunger")
        if (hungerTag.innerText === "") {
          hungerTag.innerText = "That disgusting thing hanging off your nose reminds me of boo-gers. Speaking of which, I'm hungry!";
        }
      }, 10000);
    });
  }

  async function callHungry() {
    console.log("starting")
    const speak = await getHungry();
    console.log(speak)
  }

  callHungry();

  // // setInterval Practice
  // let hungerID;

  // function hungryV2() {
  //   console.log("start")
  //   if (!hungerID) {
  //     hungerID = setInterval(getHungry2, 5000);
  //   }
  // }

  // function getHungry2(){
  //   console.log("running hunger")
  //   const hungryElm = document.getElementsByClassName("hunger")
  //   if (hungryElm === "") {
  //     hungryElm = "That disgusting thing hanging off your nose reminds me of boo-gers.<br> Speaking of which, I'm hungry!";
  //   } else {
  //     hungryElm === "";
  //   }
  // }

  // function notHungryAnymore() {
  //   clearInterval(hungerID);
  //   hungerID = null;
  // }

  // hungryV2();
});