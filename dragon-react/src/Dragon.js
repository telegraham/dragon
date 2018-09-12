import React, { Component } from 'react';
import Two from 'two.js';
import Curve from './dragon/models/curve';

class Dragon extends Component {

  render() {
    return (<div id="dragon" />);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.iterations != this.props.iterations;
  }

  componentDidMount() {
    const elem = document.getElementById('dragon');
    const two = new Two({ width: 900, height: 600 }).appendTo(elem);

    this.two = two;

    this.draw();
  }

  componentDidUpdate() {
    this.draw()
  }

  draw(){
    const two = this.two

    const curve = new Curve([1, 0], [-1, 0]);

    curve.iterate(this.props.iterations);

    if (!this.path) {

      const vertices = curve.path().map(coord => new Two.Anchor(coord[0] * 300 + 400, coord[1] * 300 + 400));
      const closed = false;
      const curved = false;
      const manual = undefined;

      const path = new Two.Path(vertices, closed, curved, manual);
      this.path = path;

      two.add(path);
      two.update();
    } else {
      this.path.vertices = curve.path().map(coord => new Two.Anchor(coord[0] * 300 + 400, coord[1] * 300 + 400));
      two.update();
    }

  }
}

export default Dragon;
