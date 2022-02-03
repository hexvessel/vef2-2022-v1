export function greining(data) {
  let sum = 0;
  let sumvar = 0;

  for (var i = 0; i < data.length; i++) {
    // Last i elements are already in place
    for (var j = 0; j < data.length - i - 1; j++) {
      // Checking if the item at present iteration
      // is greater than the next iteration
      if (data[j] > data[j + 1]) {
        // If the condition is true then swap them
        var temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }
  for (let i = 0; i < data.length; i++) {
    sum += data[i];
  }
  var max = -Infinity;
  for (let i = 0; i < data.length; i++) {
    if (data[i] > max) {
      max = data[i];
    }
  }

  var min = Infinity;
  for (let i = 0; i < data.length; i++) {
    if (data[i] < min) {
      min = data[i];
    }
  }
  const mean = sum / data.length;
  for (let i = 0; i < data.length; i++) {
    sumvar += Math.pow(data[i] - mean, 2);
  }
  const median = data[Math.floor(data.length / 2)];
  const variance = sumvar / (data.length - 1);
  const stddev = Math.sqrt(variance);
  const range = max - min;

  return {
    max: max,
    min: min,
    mean: mean,
    median: median,
    variance: variance,
    stddev: stddev,
    range: range,
    sum: sum,
  };
}
