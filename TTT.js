xTurn = true;
var count = 0;
let winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],
];
btn = document.querySelectorAll('.button');
btn.forEach((element) => {
    element.addEventListener("click", () => {
        if (xTurn) {
            xTurn = false;
            element.innerText = "X";
            element.disabled = true;
        } else {
            xTurn = true;
            element.innerText = "O";
            element.disabled = true;
        }
        count += 1;
        if (count == 9) {
            drawFunction();
        }
        winChecker();
    });
});
function drawFunction(){
    btn.forEach((element) => {
        element.disabled = true;
    });
    document.getElementById('print').innerHTML = "Draw better luck next time 😊"  
}
function winFunction(letter){
    btn.forEach((element) => {
        element.disabled = true;
    });
    if (letter == "X") {
    document.getElementById('print').innerHTML = "Player1 wins 😎"
    } else {
        
    document.getElementById('print').innerHTML = "Player2 wins 😎"
    }
}
function winChecker(){
    for(let i in winningPattern){
        // console.log(i)
        let [element1 ,element2, element3] = [
            btn[winningPattern[i][0]].innerHTML,
            btn[winningPattern[i][1]].innerHTML,
            btn[winningPattern[i][2]].innerHTML
        ]

        console.log('element1->', element1,'element2->', element2,'element3->', element3);
        // console.log(winningPattern[i][0]);
        if (element1 != "" && (element2 != "") && (element3 != "")) {
            // console.log('working')
            if (element1 == element2 && element2 == element3) {
                winFunction(element1);
            }
        }
    }
}
function reset(){
    btn.forEach((element) => {
        element.innerText = "";
        count = 0;
        xTurn= true;
        element.disabled = false;
        document.getElementById('print').innerHTML = ""
    });
}