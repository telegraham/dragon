const map2 = require('../util/map2');
const Segment = require('./segment');

class Curve {

  constructor(start, end) {
    this.start = start;
    this.end = end;
    this.points = []
  }
  
  iterate(iterations){
    for (var i = 0; i < iterations; i++) {
      const path = this.path();

      const segments = map2(path, (startPoint, endPoint, index) => 
        new Segment(startPoint, endPoint, index % 2 == 0)
      );

      this.points = segments.reduce((accumulator, segment) => {
        return accumulator.concat(segment.split().slice(1))
      }, [])
        .slice(0, -1);
    }
  
    return this;
  }

  path(){
    return [this.start, ...this.points, this.end];
  }

}

module.exports = Curve