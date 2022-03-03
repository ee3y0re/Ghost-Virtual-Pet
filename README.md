# Sassper, the Sassy Ghost


## Do you believe in ghosts?
Hopefully, you won't be in disbelief or fear over this one! This game allows you to feed, clean, pet (sorta), and shelter a sassy little ghost. The catch is, can you be a loving parent even with its cheeky language and transmissible nature? Neglect comes with consequences, so it’s important to remain alert to this ghost’s needs. Raise its stats high enough by carefully clicking commands to interact with it to help it grow to its fullest potential.


## Live Link:
https://ee3y0re.github.io/Sassper-the-Sassy-Ghost/


## How to Play
This game uses mouse clicks.
> Your task is to attend to the needs and whims of the Sassper... or else...
> 
> Just kidding~ (maybe?)
> 
> When the ghost gets hangry, feed the ghost deadfruit.
> 
> To clean the ghost, wishy washy away the poop! (Yes, ghosts poop stars. Don't you believe in Santa Claus?)
> 
> Ghosts like to get to know you before hugging, so check back for a hug periodically.
> 
> Also...don't click on the last button C;

<!-- ## Wireframes
![oh no! unhappy pet :c please make them happy C:](https://github.com/ee3y0re/Ghost-Virtual-Pet/blob/main/wireframes.png) -->


## Technologies and Resources
- Game assets from Itch.io
- Webpack to manage and bundle the Javascript files of this project.
- NPM for organizing project dependencies and helping reduce conflicts.


## Technical Implementation Details
 - My favorite button personally is the "Don't Click Me Button." But that's a surprise~
 - Asynchronous functions for timing feeding and cleaning states

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
            sassper.satietySwitch();
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
            sassper.receiveAffection();
            sassperBody.src = "./assets/ghost-Sheet-master-blazter-big.png";
            sassperSpeak.innerText = "";
            makePoop()
            sassper.satietySwitch();
          }
        })


## To-Dos and Future Features
- Add a status gauge to see how the ghost is feeling
- Level ups to work up to for new ghost animations and moods
- Winning, final stage of the ghost's development
- Improved timing of asynchronous functions and clearing away spotted bugs
- More sassy ghost puns

## Acknowledgments

> - Magic Scout Cottages by Kevin MacLeod
> - Link: https://incompetech.filmmusic.io/song/4672-magic-scout-cottages
> - License: https://filmmusic.io/standard-license
>
> - Vorheez 3 Sound Effect
> - Link: https://www.partnersinrhyme.com/soundfx/scary_halloween_sounds/voorheez3_wav.shtml
>
> - Ghost Sprite Pack by Master Blaster
> - Link: https://master-blazter.itch.io/ghostspritepack
>
> - Star Animation by nyknck
> - Link: https://nyknck.itch.io/staranimation
>
> - Reviving of Sassper the Sassy Ghost by Disnee Tamang
>
> - Love, support, MS Paint edits, and idea contribution to the "Don't Click Me" button from Chef P.
