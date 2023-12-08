var Box = document.querySelectorAll(".box")

var turnO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

Box.forEach((box) => {
    box.addEventListener("click",()=>{
        // console.log("box is clicked ")
        if(turnO === true)
        {
         box.innerText = "0";
        turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })

})


function checkWinner() {
    for (patterns of winPatterns){
        // console.log(patterns[0],patterns[1],patterns[2])
        // console.log(
        //     Box[patterns[0]],
        //     Box[patterns[1]],
        //     Box[patterns[2]]
        //     )

        let pos1V = Box[patterns[0]].innerText;
        let pos2V= Box[patterns[1]].innerText;
        let pos3V = Box[patterns[2]].innerText;

        if( pos1V!="" && pos2V!="" && pos3V!= ""){
            if(pos1V === pos2V && pos2V === pos3V){
                // console.log(`winner! is ${pos1V}`)
                document.querySelector(".winner").innerText = `congratulations winner is ${pos1V} 🎊`
                disableBtns();
                document.querySelector(".buttons").innerHTML = `    <button class="newgame border-4 border-black p-2 rounded-lg font-extrabold hover:bg-green-500 " onclick="newGame()">New Game</button>
                <button class=" border-4 border-black p-2 rounded-lg font-extrabold hover:bg-red-500 ">Reset Game</button>`
            }

        }
    }

}


function disableBtns(){
    for (box of Box){
        box.disabled = true;
    }
}

function resetBtn(){
    
    enableBtn();
    
}

function newGame(){

enableBtn();
document.querySelector(".winner").innerText = ``;
document.querySelector(".buttons").innerHTML = `
<button class=" border-4 border-black p-2 rounded-lg font-extrabold hover:bg-red-500 ">Reset Game</button>`


}

function enableBtn(){
    for (box of Box){
        box.innerText = "";
        box.disabled = false;
    }
    turnO = true;  
}
