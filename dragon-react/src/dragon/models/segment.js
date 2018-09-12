const average = require('../util/average');

class Segment {
  constructor(start, end, left) {
    this.start = start;
    this.end = end;
    this.left = left
  }

  midpoint(){
    return [
      average(this.start[0], this.end[0]), 
      average(this.start[1], this.end[1])
    ]
  }

  split(){

    // find the midpoint of the segment
    const midpoint = this.midpoint();

    // find the magnituide of half the segment
    const deltaX = midpoint[0] - this.start[0];
    const deltaY = midpoint[1] - this.start[1];

    // add it on, rotated appropriately
    const newPoint = this.left ? [ //if it's left
      midpoint[0] - deltaY, // yep, minus y
      midpoint[1] + deltaX // uh-huh, x
    ] : [ // else if it's right
      midpoint[0] + deltaY, // yep, y
      midpoint[1] - deltaX // uh-huh, minus x
    ];

    // there's your point, 
    return [this.start, newPoint, this.end];
  }
}

module.exports = Segment