function processConfirm(answer) {
    let result = "";
    if (answer) {
        result = "Excellent. We'll play a nice game of chess.";
    } else {
        result = "Maybe later than.";
    }
    return result;
}

let confirmAnswer = confirm("Shall we play a game?");
let theAnswer = processConfirm(confirmAnswer);
alert(theAnswer);