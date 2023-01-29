function makeMove(sticks) {
    let move = getOptimalMove(sticks);
    return move;
}

function getOptimalMove(sticks) {
    if (sticks % 4 !== 0) {
        return sticks % 4;
    } else {
        return Math.floor(Math.random() * 3) + 1;
    }
}
