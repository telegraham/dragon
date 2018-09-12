

function map2(array, callback){
  const returnArray = []
  for (var i = 0; i < (array.length - 1); i++) {
    returnArray.push(callback(array[i], array[i + 1], i, i + 1));
  }
  return returnArray;
}


module.exports = map2