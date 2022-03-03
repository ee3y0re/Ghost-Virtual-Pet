import { Ghost } from './scripts/ghost';
import { Background } from './scripts/background';

document.addEventListener('DOMContentLoaded', () => {

  const newGame = new Background;
  const sassper = new Ghost();
  const themeMusic = document.getElementById('theme-music');
  var themeMusicPlaying = false;
  const scaryMusic = document.getElementById('scary-sound');
  const sassperBody = document.getElementById("ghost");
  const sassperSpeak = document.getElementById("dialogue");
  const sassperPoop = document.getElementById("poop");
  const angryGhost = document.getElementById("angry-ghost")



  function start() {
    if (sassper.satiety === false) sassper.satietySwitch();
    sassperSpeak.innerText = "Click here to start"
    const startBox = document.getElementById("dialogue-container");
    startBox.addEventListener('click', event => {
      themeMusic.play()
      themeMusicPlaying = true;
      newGame.start = true;
      sassperSpeak.innerText = ""
      hungryCycle();
    });
  }

  const soundButton = document.getElementById('sound');
  soundButton.addEventListener("click", () => {
    if (themeMusicPlaying) {
      themeMusic.pause();
      themeMusicPlaying = false;
    } else {
      themeMusic.play();
      themeMusicPlaying = true;
    }
  });

  start();

  

  let hungerID;

  function hungryCycle() {
    if (!hungerID) {
      hungerID = setInterval(getHungry, 7000);
    }
  }

  function getHungry() {
    if (sassper.satiety === true) {
      sassperBody.src = "./assets/ghost-Sheet-master-blazter-big2.png";
      sassperSpeak.innerText = "I thought I was the creepy one LOL Would you mind stopping your staring and feeding me? xD";
      sassper.satietySwitch(); //false
    }
  }

  function notHungryAnymore() {
    clearInterval(hungerID);
    hungerID = null;
  }

  const feedButton = document.getElementById("feed");
  feedButton.addEventListener("click", event => {
    sassper.receiveAffection();
    notHungryAnymore();
    if (sassper.satiety === false) {
      sassperBody.src = "./assets/ghost-Sheet-master-blazter-big.png";
      sassperSpeak.innerText = "";
      makePoop()
      sassper.satietySwitch(); //true
    }
  })

  

  function makePoop() {
    setTimeout(() => {
      if (sassper.hygiene === true) {
        sassper.hygieneSwitch(); //false
        sassperBody.src = "./assets/ghost-Sheet-master-blazter-colllapse.png"
        sassperSpeak.innerText = "What? I'm a ghost! You've got hands, go clean up the star poop :P"
        sassperPoop.src = "./assets/star_nyknck.png"
      }
    }, 7000)
  }

  const cleanButton = document.getElementById("clean");
  cleanButton.addEventListener("click", event => {
    sassper.receiveAffection();
    if (sassper.hygiene === false) {
      sassperBody.src = "./assets/ghost-Sheet-master-blazter-big.png";
      sassperSpeak.innerText = "";
      sassperPoop.src = ""
      setTimeout(getHungry, 7000)
      sassper.hygieneSwitch(); //true
    }
  });



  const affectionButton = document.getElementById("love");
  affectionButton.addEventListener("click", event => {
    if (sassper.affection >= 4 && sassper.satiety && sassper.hygiene) {
      sassperBody.src = "./assets/ghost-sheet-blushie-edit.png"
      sassperSpeak.innerText = "It's not like I thought that hug was phantasmic, BOO-KA!"
    }
  });



  const forbiddenButton = document.getElementById("forbidden");
  forbiddenButton.addEventListener("click", event => {
    let prevSpeak = sassperSpeak.innerText;
    let prevBody = sassperBody.src;
    themeMusic.pause();
    scaryMusic.volume = 0.05;
    scaryMusic.play();
    angryGhost.src = "./assets/ghost-Sheet-master-blazter-big-inyoface.png";
    setTimeout(()=>{
      angryGhost.src = "";
      sassperSpeak.innerText = "Let's respect boundaries and try that again shall we?";
      setTimeout(()=>{
        sassperSpeak.innerText = prevSpeak;
        sassperBody.src = prevBody;
      }, 5000)
    }, 3000)
  })
});