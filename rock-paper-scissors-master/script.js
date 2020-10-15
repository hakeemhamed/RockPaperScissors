
const clickable= document.querySelectorAll("#clickable");
const scoreEl= document.getElementById("score");
const main= document.getElementById("main");
const playShow= document.getElementById("paly-show");
const playAgain =document.getElementById("play-again");
const msg = document.getElementById("msg");
const userSelect=document.getElementById('userMatch');
const computerSelect=document.getElementById('computerMatch');
const close=document.getElementById("close");
const rules=document.getElementById("rules");
const showRules=document.getElementById("show-rules");
const match=['paper','scissors','rock'];
let score=0;
let userMatch= undefined;

showRules.addEventListener('click', ()=>{
    rules.style.display='block'
})
close.addEventListener('click', ()=>{
    rules.style.display='none'
})
clickable.forEach( button=> {
    button.addEventListener('click', ()=>{
        userMatch= button.getAttribute("data-match");
        checkWinner();
    })
});

playAgain.addEventListener('click',()=>{
    main.style.display='block';
    playShow.style.display='none'
})
function checkWinner(){
    const computerMach= pickRandomMach();
    
    // update the playshow
    updatePlayShow(userSelect,userMatch);
    updatePlayShow(computerSelect,computerMach);

    if(userMatch===computerMach){
        main.style.display='none';
        playShow.style.display='flex';
        msg.innerHTML='drow'

    }else if(userMatch==='paper'&&computerMach==='rock' || userMatch==='roch'&&computerMach==='scissors' || userMatch==='scissors'&&computerMach==='paper'){
        updateScore(1);
        main.style.display='none';
        playShow.style.display='flex';
        msg.innerHTML='You win'    

    }else{
        updateScore(-1);
        main.style.display='none';
        playShow.style.display='flex'
        msg.innerHTML='You Lost';   
    }

}
function updateScore(value){
    score += value;
}

function pickRandomMach(){
    return match[Math.floor(Math.random()*match.length)]
}
function updatePlayShow(playShowEl,user){
    const img=playShowEl.querySelector('img');

    playShowEl.classList.remove('paper');
    playShowEl.classList.remove('rock');
    playShowEl.classList.remove('scissors');

    playShowEl.classList.add(user);
    img.src='./images/icon-'+user+'.svg';
    img.alt=user;
}