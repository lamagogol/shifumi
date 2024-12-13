let selectigPlayer=document.querySelector(".userIdPopup")
let selectIcon=document.querySelector(".userIconSelected");
let selectingIcon=document.querySelector(".userIconSelection");
let creeper=document.querySelector(".creeper");
let enderman=document.querySelector(".enderman");
let enderDragon=document.querySelector(".enderDragon");
let witherStorm=document.querySelector(".witherStorm");
let herobrine=document.querySelector(".herobrine");
let nickname=document.querySelector("#nickname").value;
let submit=document.querySelector(".submitButton");
let error=document.querySelector(".error");
let overallPlayerIcon=document.querySelector(".playerIcon");
let overallBotIcon=document.querySelector(".botIcon");
let rules=document.querySelector(".rulesButton");
let rulesPopup=document.querySelector(".rules");
let rulesClosingButton=document.querySelector(".rules div p");
let shield=document.querySelector(".shield");
let axe=document.querySelector(".axe");
let bow=document.querySelector(".bow");
let userDisplay=document.querySelector(".player .shifumiChosen p")
let botDisplay=document.querySelector(".HeroBot .shifumiChosen p")
let whosSuperior=document.querySelector(".whosSuperior");
let tmpScore=document.querySelector("header p")
let endScreen=document.querySelector(".endScreen");
let msg=document.querySelector(".endMessage");
let replay=document.querySelector(".otherSubmitButton")

let pcIcon=0;
let userChoice=0;
let pcChoice=0;
let userScore=0;
let pcScore=0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

selectIcon.addEventListener("click", function() {
    selectingIcon.style.display="flex";
});

creeper.addEventListener("click", function() {
    selectingIcon.style.display="none";
    selectIcon.innerHTML='<img src="./assets/images/creeper.png" alt="minecraft creeper user icon">';
    overallPlayerIcon.innerHTML='<img src="./assets/images/creeper.png" alt="minecraft creeper user icon">';
});

enderman.addEventListener("click", function() {
    selectingIcon.style.display="none";
    selectIcon.innerHTML='<img src="./assets/images/enderman.png" alt="minecraft enderman user icon">';
    overallPlayerIcon.innerHTML='<img src="./assets/images/enderman.png" alt="minecraft enderman user icon">';
});

enderDragon.addEventListener("click", function() {
    selectingIcon.style.display="none";
    selectIcon.innerHTML='<img src="./assets/images/ender dragon.png" alt="minecraft ender dragon user icon">';
    overallPlayerIcon.innerHTML='<img src="./assets/images/ender dragon.png" alt="minecraft ender dragon user icon">';
});

witherStorm.addEventListener("click", function() {
    selectingIcon.style.display="none";
    selectIcon.innerHTML='<img src="./assets/images/wither storm.webp" alt="minecraft wither storm user icon">';
    overallPlayerIcon.innerHTML='<img src="./assets/images/wither storm.webp" alt="minecraft wither storm user icon">';
});

herobrine.addEventListener("click", function() {
    selectingIcon.style.display="none";
    selectIcon.innerHTML='<img src="./assets/images/herobrine.png" alt="minecraft herobrine user icon">';
    overallPlayerIcon.innerHTML='<img src="./assets/images/herobrine.png" alt="minecraft herobrine user icon">';
});

submit.addEventListener("click", launchGame);
replay.addEventListener("click", launchGame);

function launchGame(){
    userScore=0;
    pcScore=0;
    tmpScore.innerHTML="Vous "+String(userScore)+" | "+String(pcScore)+" Bot"
    event.preventDefault();
    selectigPlayer.style.display="none";
    botIcon();
    endScreen.classList.remove("loose");
    endScreen.classList.remove("win");
    endScreen.style.display="none";
    // if (nickname === "") {
    //     console.log(nickname)
    //     error.textContent = "Veuillez entrez un pseudo"
    // }
}

function botIcon(){
    pcIcon=getRandomInt(5);
    if (pcIcon===0) {
        overallBotIcon.innerHTML='<img src="./assets/images/creeper.png" alt="minecraft creeper user icon">';
    }
    else if (pcIcon===1) {
        overallBotIcon.innerHTML='<img src="./assets/images/enderman.png" alt="minecraft enderman user icon">';
    }
    else if (pcIcon===2) {
        overallBotIcon.innerHTML='<img src="./assets/images/ender dragon.png" alt="minecraft ender dragon user icon">';
    }
    else if (pcIcon===3) {
        overallBotIcon.innerHTML='<img src="./assets/images/wither storm.webp" alt="minecraft wither storm user icon">';
    }
    else {
        overallBotIcon.innerHTML='<img src="./assets/images/herobrine.png" alt="minecraft herobrine user icon">';
    }
}

rules.addEventListener("click", function(){
    rulesPopup.style.display="flex";
})

rulesClosingButton.addEventListener("click", function(){
    rulesPopup.style.display="none";
})

shield.addEventListener("click", function(){
    userChoice=0;
    pcChose();
    displayPlay();
    isThereAWinner();
    isThereARealWinner();
})

axe.addEventListener("click", function(){
    userChoice=1;
    pcChose();
    displayPlay();
    isThereAWinner();
    isThereARealWinner();
})

bow.addEventListener("click", function(){
    userChoice=2;
    pcChose();
    displayPlay();
    isThereAWinner();
    isThereARealWinner();
})

function pcChose(){
    pcChoice=getRandomInt(3)
}

function displayPlay(){
    userDisplay.innerHTML=oneDisplay(userChoice);
    botDisplay.innerHTML=oneDisplay(pcChoice);
}

function oneDisplay(numb){
    if (numb===0){
        return ("Shield");
    }
    else if (numb===1){
        return ("Axe");
    }
    else {
        return ("Bow");
    }
}

function isThereAWinner(){
    if (userChoice===pcChoice){
        whosSuperior.innerHTML="=";
    }
    else if ((userChoice===2&&pcChoice===1)||(userChoice===1&&pcChoice===0)||(userChoice===0&&pcChoice===2)){
        whosSuperior.innerHTML=">";
        userScore+=1;
    }
    else {
        whosSuperior.innerHTML="<";
        pcScore+=1;
    }
    tmpScore.innerHTML="Vous "+String(userScore)+" | "+String(pcScore)+" Bot"
}

function isThereARealWinner(){
    if (userScore===10){
        endScreen.classList.remove("loose");
        endScreen.classList.add("win");
        endScreen.style.display="flex";
        msg.innerHTML="Vous avez gagne !!! "+String(userScore)+" a "+String(pcScore);
        console.log("win");
    }
    else if (pcScore===10){
        endScreen.classList.remove("win");
        endScreen.classList.add("loose");
        endScreen.style.display="flex";
        msg.innerHTML="Vous avez perdu "+String(userScore)+" a "+String(pcScore);
        console.log("loose");
    }
}