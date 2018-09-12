import React, { Fragment } from 'react';


export default (props) =>
  (<Fragment>
    <button onClick={ () => props.change(props.number - 1) }>&minus;</button>
    <span>{ props.number }</span>
    <button onClick={ () => props.change(props.number + 1) }>+</button>
  </Fragment>)