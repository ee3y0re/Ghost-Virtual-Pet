import {Ghost} from './scripts/ghost';

document.addEventListener('DOMContentLoaded', () => {
  const sassper = new Ghost();

  // function getHungry() {
  //   return new Promise(sayHunger => {
  //     setTimeout(() => {
  //       sassper.hungry();
  //       sayHunger() //grab html element to show this on screen
  //     }, 10000);
  //   });
  // }

  // async function callHungry() {
  //   const speak = await getHungry();
  //   console.log(speak)
  // }

  // callHungry();

  let repeatHunger;

  function hungryV2() {
    console.log("start")
    if (!repeatHunger) {
      repeatHunger = setInterval(getHungry2, 5000);
    }
  }

  function getHungry2(){
    console.log("running hunger code")
    const hungryElm = document.getElementsByClassName("hunger")
    if (hungryElm === "") {
      hungryElm = "That disgusting thing hanging off your nose reminds me of boo-gers.<br> Speaking of which, I'm hungry!";
    } else {
      hungryElm === "";
    }
  }

  function notHungryAnymore() {
    clearInterval(repeatHunger);
    repeatHunger = null;
  }

  hungryV2();
});