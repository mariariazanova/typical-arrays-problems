exports.min = function min (array) {
  if(!array || !array.length) return 0;
  let result = array[0]; 
  for(let i = 0; i < array.length; i++){
      if (result > array[i]) result = array[i]
  }
  return result;
}

exports.max = function max (array) {
  if(!array || !array.length) return 0;
  let result = array[0]; 
  for(let i = 0; i < array.length; i++){
      if (result < array[i]) result = array[i]
  }
  return result;
}

exports.avg = function avg (array) {
  if(!array || !array.length) return 0;
  return array.reduce((sum, i) => sum + i,0)/array.length;
}