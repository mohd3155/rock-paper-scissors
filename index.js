const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors =document.querySelector('#scissors');

let pChoice =[ "Rock" , "Paper" , "Scissors"];

const playerElement = document.getElementById('player');

function Rock() {
    let firstChoice = pChoice[0];

    playerElement.innerHTML='';
    playerElement.innerHTML= firstChoice;
}

rock.addEventListener('click',Rock);

function Paper() {
    let SecChoice = pChoice[1];

    playerElement.innerHTML='';
    playerElement.innerHTML= SecChoice;
}

paper.addEventListener('click',Paper);

function scissor() {
    let thirdChoice = pChoice[2];

    playerElement.innerHTML='';
    playerElement.innerHTML= thirdChoice;
}

scissors.addEventListener('click',scissor);

const computerElement = document.getElementById('computer')

function computer(){
    let comChoice =pChoice[Math.floor(Math.random()* pChoice.length)];

    computerElement.innerHTML='';
    computerElement.innerHTML= comChoice;
    result()
}

rock.addEventListener('click',computer);
paper.addEventListener('click',computer);
scissors.addEventListener('click',computer);

const resultElement = document.getElementById('gResult');

function result(){
    let gameResult = ["Hey! you WON", "Sorry! Hardluck", "No one won!"];
    resultElement.innerHTML='';
    if(computerElement.innerHTML === playerElement.innerHTML){
        resultElement.innerHTML= gameResult[2];
        return;
    }
    if(computerElement.innerHTML===pChoice[0] && playerElement.innerHTML===pChoice[1]){
        resultElement.innerHTML= gameResult[0];

    } else if (computerElement.innerHTML===pChoice[1] && playerElement.innerHTML===pChoice[2]) {
        resultElement.innerHTML= gameResult[0];

    }else if(computerElement.innerHTML===pChoice[2] && playerElement.innerHTML===pChoice[0])
    {
        resultElement.innerHTML= gameResult[0];
    } 
    
    else if(computerElement.innerHTML===pChoice[1] && playerElement.innerHTML===pChoice[0]) {
        resultElement.innerHTML= gameResult[1];
    } 
    else if(computerElement.innerHTML===pChoice[2] && playerElement.innerHTML===pChoice[1]){
        resultElement.innerHTML= gameResult[1];
    } 
    
    else if(computerElement.innerHTML===pChoice[0] && playerElement.innerHTML===pChoice[2]){
        resultElement.innerHTML= gameResult[1];
    }
    else{
        resultElement.innerHTML= "Undefined";
    }

}
const again = document.getElementById('again');
function clear(){

    computerElement.innerHTML=" ";
    playerElement.innerHTML=" ";
    resultElement.innerHTML=" ";
}

again.addEventListener('click',clear);