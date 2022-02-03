export function parse(input){
    const arr = input.toString('utf-8').split('\n').map(Number);
    var parsed = [];
    for(let i = 0;i < arr.length;i++){
        if(Number.isInteger(arr[i]) & (arr[i] != NaN)){
            parsed.push(arr[i]);
        }
    }
    return parsed;
}