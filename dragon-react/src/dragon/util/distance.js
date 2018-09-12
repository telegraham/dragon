
  function distance(start, end) {
    return Math.sqrt(
      Math.pow(end[0] - start[0], 2)
      +
      Math.pow(end[1] - start[1], 2)
    )
  }



module.exports = distance