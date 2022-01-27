

export function greining(data){
    const sorted = data.sort();
    let sum = 0;
    let sumvar = 0;
    for(let i = 0;i < data.length;i++){
        sum += data[i];
    }
    const max = Math.max.apply(Math, data);
    const min = Math.min.apply(Math,data);
    const mean = sum/data.length;
    for(let i = 0; i < data.length;i++){
        sumvar += Math.pow(data[i] - mean,2);
    }
    const median = sorted[Math.floor(sorted.length/2)];
    const variance = (sumvar)/(data.length-1);
    const stddev = Math.sqrt(variance);
    const range = max-min;

    return {max: max,min: min,mean: mean,median:median,variance:variance,stddev:stddev,range:range,sum:sum};
}
