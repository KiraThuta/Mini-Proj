const diceImg= document.querySelectorAll("img");
dice1 =document.getElementById("dice-1");
dice2 =document.getElementById("dice-2");
btn=document.querySelector(".btn-roll");

const image= [
    "./assets/dice-1.png",
    "./assets/dice-2.png",
    "./assets/dice-3.png",
    "./assets/dice-4.png",
    "./assets/dice-5.png",
    "./assets/dice-6.png",
];

function randomRoll(){
    let diceOneValue=Math.floor(Math.random()*6);
    let diceTwoValue=Math.floor(Math.random()*6);

    dice1.src=image[diceOneValue];
    dice2.src=image[diceTwoValue];
};

function rollDice(){
    diceImg.forEach((dice)=>{
        dice.classList.add("shake");
    })
    setTimeout(()=>{
        diceImg.forEach((dice)=>{
            dice.classList.remove("shake");
        });
        randomRoll();
    },800)
}

rollDice();
btn.addEventListener("click",rollDice);