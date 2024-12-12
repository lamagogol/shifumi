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
let rules=document.querySelector(".rulesButton");
let rulesPopup=document.querySelector(".rules");
let rulesClosingButton=document.querySelector(".rules div p");

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

submit.addEventListener("click", function(){
    event.preventDefault();
    selectigPlayer.style.display="none";
    // if (nickname === "") {
    //     console.log(nickname)
    //     error.textContent = "Veuillez entrez un pseudo"
    // }
})

rules.addEventListener("click", function(){
    rulesPopup.style.display="flex";
})

rulesClosingButton.addEventListener("click", function(){
    rulesPopup.style.display="none";
})

