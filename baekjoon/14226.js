const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const S = Number(input[0]);

const queue = [];
const visited = Array.from({length: 1001},()=>Array.from({length: 1001}).fill(-1))

visited[1][0] = 0;
queue.push({curLength: 1, clipboard: 0});

function bfs() {
    while(queue.length) {
        const {curLength, clipboard} = queue.shift();

        if(curLength === S) {
            console.log(visited[curLength][clipboard])
            break;
        }
        
        copy(curLength, clipboard)
        paste(curLength, clipboard);
        deleteOne(curLength, clipboard)
    }
}

bfs()

function copy(curLength, clipboard) {
    if(curLength === 0) return;

    const newClipboard = curLength;

    if(isValidate(curLength, newClipboard) && visited[curLength][newClipboard] === -1) {
        visited[curLength][newClipboard] = visited[curLength][clipboard] + 1 
        queue.push({curLength, clipboard: newClipboard}) 
    }
}

function paste (curLength, clipboard) {
    const nextLength = curLength + clipboard;

    if(isValidate(nextLength, clipboard) && visited[nextLength][clipboard] === -1) {
        visited[nextLength][clipboard] = visited[curLength][clipboard] + 1
        queue.push({curLength: nextLength, clipboard})
    }
}

function deleteOne (curLength, clipboard) {
    const nextLength = curLength - 1;

    if(isValidate(nextLength, clipboard) && visited[nextLength][clipboard] === -1) {
        visited[nextLength][clipboard] = visited[curLength][clipboard] + 1
        
        queue.push({curLength: nextLength, clipboard})
    }

}

function isValidate(curLength, clipboard){
    return curLength >= 0 && curLength <= 1000 && clipboard >=0 && clipboard <=1000
}