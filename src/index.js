import {Ghost} from './scripts/ghost';

document.addEventListener('DOMContentLoaded', () => {
  const sassper = new Ghost();
  const sassperBody = document.getElementById("ghost");
  const sassperSpeak = document.getElementById("dialogue");
  const sassperPoop = document.getElementById("poop");

  // function getHungry() {
  //   // return new Promise(() => {
  //     // setTimeout(() => {
  //       sassper.hungry();
  //       sassperBody.src = "./assets/ghost-Sheet-master-blazter-big2.png";
  //       sassperSpeak.innerText = "I thought I was the creepy one lol would you mind stopping your staring and feeding me? xD";
  //       sassper.testSatiety();
  //     // }, 10000);
  //   // });
  // }

  // async function callHungry() {
  //   const speak = await getHungry();
  //   console.log(speak)
  // }

  function start() {
    if (sassper.satiety === false) sassper.satietySwitch();
    sassperSpeak.innerText = "Click here to start"
    const startBox = document.getElementById("dialogue-container");
    startBox.addEventListener('click', event => {
      sassperSpeak.innerText = ""
      hungryCycle();
    });
  }

  start();

  let hungerID;

  function hungryCycle() {
    if (!hungerID) {
      hungerID = setInterval(getHungry, 10000);
    }
  }

  function getHungry() {
    if (sassper.satiety === true) {
      sassperBody.src = "./assets/ghost-Sheet-master-blazter-big2.png";
      sassperSpeak.innerText = "I thought I was the creepy one lol would you mind stopping your staring and feeding me? xD";
      sassper.satietySwitch(); //false
      sassper.testSatiety();
    }
  }

  function notHungryAnymore() {
    clearInterval(hungerID);
    hungerID = null;
  }

  const feedButton = document.getElementById("feed");
  feedButton.addEventListener("click", event => {
    notHungryAnymore();
    if (sassper.satiety === false) {
      sassperBody.src = "./assets/ghost-Sheet-master-blazter-big.png";
      sassperSpeak.innerText = "";
      sassper.satietySwitch(); //true
      makePoop()
    }
    // sassper.testSatiety();
  })

  function makePoop() {
    setTimeout(()=> {
      if (sassper.hygiene === true) {
        sassper.hygieneSwitch(); //false
        sassperBody.src = "./assets/ghost-Sheet-master-blazter-colllapse.png"
        sassperSpeak.innerText = "What? I'm a ghost! You've got hands, go clean up the star poop :P"
        sassperPoop.src = "./assets/star_nyknck.png"
      }
    }, 5000)

    sassper.testSatiety
  }

  const cleanButton = document.getElementById("clean");
  cleanButton.addEventListener("click", event => {
    if (sassper.hygiene === false) {
      sassperBody.src = "./assets/ghost-Sheet-master-blazter-big.png";
      sassperSpeak.innerText = "";
      sassperPoop.src = ""
      setTimeout(getHungry, 6000)
      sassper.hygieneSwitch(); //true
    }
  })

  // // backup
  // function start() {
  //   sassperSpeak.innerText = "Click here to start"
  //   const startBox = document.getElementById("dialogue-container");
  //   startBox.addEventListener('click', event => {
  //     sassperSpeak.innerText = ""
  //     hungryCycle();
  //   });
  // }

  // start();

  // let hungerID;

  // function hungryCycle() {
  //   if (!hungerID) {
  //     hungerID = setInterval(getHungry, 10000);
  //   }
  // }

  // function getHungry() {
  //   sassper.hungry();
  //   sassperBody.src = "./assets/ghost-Sheet-master-blazter-big2.png";
  //   sassperSpeak.innerText = "I thought I was the creepy one lol would you mind stopping your staring and feeding me? xD";
  //   sassper.testSatiety();
  // }

  // function notHungryAnymore() {
  //   clearInterval(hungerID);
  //   hungerID = null;
  // }

  // const feedButton = document.getElementById("feed");
  // feedButton.addEventListener("click", event => {
  //   notHungryAnymore();
  //   if (sassper.satiety < 10) {
  //     sassper.feed();
  //     sassperBody.src = "./assets/ghost-Sheet-master-blazter-big.png";
  //     sassperSpeak.innerText = "";
  //     makePoop()
  //   }
  //   // sassper.testSatiety();
  // })

  // function makePoop() {
  //   setTimeout(() => {
  //     sassper.dirty();
  //     sassperBody.src = "./assets/ghost-Sheet-master-blazter-colllapse.png"
  //     sassperSpeak.innerText = "What? I'm a ghost! You've got hands, go clean up the star poop :P"
  //     sassperPoop.src = "./assets/star_nyknck.png"
  //   }, 5000)

  //   sassper.testHygiene
  // }
});