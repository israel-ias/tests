let iteration = 0;
sudokuSolver = (puzzle) => {
    const dtStart = new Date();
    let nonPossibilities = {}, impossibleNumbes, emptySpaces = 81;
    while(emptySpaces > 0) {
        emptySpaces = 0;
        iteration++;
        for(let x = 0; x < puzzle.length; x++) {
            for(let y = 0; y < puzzle.length ; y++){
                
                if(puzzle[x][y] === 0){
                    nonPossibilities = {};
                    for(let i=0; i<9 ; i++){
                        if(puzzle[x][i] > 0) {
                            nonPossibilities[puzzle[x][i]] = true;
                        }
                        if(puzzle[i][y] > 0) {
                            nonPossibilities[puzzle[i][y]] = true;
                        }
                    }
                    for(let xBox = Math.floor(x/3) * 3; xBox < Math.floor(x/3) *3 +3 ; xBox ++){
                        for(let yBox = Math.floor(y/3) * 3; yBox < Math.floor(y/3) *3 +3 ; yBox ++){
                            if(puzzle[xBox][yBox] > 0){
                                nonPossibilities[puzzle[xBox][yBox]] = true;
                            }
                        }
                    }
                    impossibleNumbes = Object.keys(nonPossibilities);
                    if(impossibleNumbes.length === 8) {
                        for(let i = 1; i<10 ; i++){
                            if(impossibleNumbes.indexOf(i.toString()) < 0){
                                puzzle[x][y] = i;
                            }
                        }
                    }
                    else{
                        emptySpaces++;
                    }
                }
            }
        }
        if(iteration > 1000)
            emptySpaces = 0;
    }
    const time = new Date() - dtStart;
    console.log(`iterations: ${iteration} - ${time}`);
    return puzzle;
}

let initPuzzle = [
    [3,9,0,1,0,0,0,0,0],
[0,0,0,0,0,0,0,2,4],
[4,0,0,0,0,7,3,0,9],
[5,0,4,2,0,0,0,0,6],
[0,2,0,5,0,4,0,8,0],
[7,0,0,0,0,1,4,0,2],
[8,0,7,4,0,0,0,0,3],
[9,5,0,0,0,0,0,0,0],
[0,0,0,0,0,5,0,9,8]];

console.log(sudokuSolver(initPuzzle)); 


