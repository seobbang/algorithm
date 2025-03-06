const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);
const visited = Array.from({length: N}, ()=>0)

const inputArr = input[1].split("")

const map = new Map()

inputArr.forEach((c, idx)=>{
    if(map.has(c)) {
        const temp = map.get(c)
        temp.push(idx);
        map.set(c, temp)
    }else { 
        map.set(c, [idx])
    }
})

inputArr.forEach((item, curIdx)=>{
    const nextItem = (() => {
        switch(item) {
            case "B":
                return "O";
            case "O":
                return "J";
            case "J":
                return "B";
            default:
                break;
        }
    })()

    if(curIdx !== 0 && visited[curIdx] === 0) return;

    map.get(nextItem)?.forEach((nextIdx)=>{ 
        if(curIdx >= nextIdx) return;


        if(visited[nextIdx] === 0) visited[nextIdx] = visited[curIdx] + (nextIdx - curIdx)**2
        else visited[nextIdx] = Math.min(visited[nextIdx], visited[curIdx] + (nextIdx - curIdx)**2)
    })
})

console.log(visited[N-1] === 0 ? -1 : visited[N-1])