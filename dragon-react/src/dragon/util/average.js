
module.exports = function(){
  return [].slice.call(arguments).reduce((accumulator, number) => accumulator + number, 0) / arguments.length
}