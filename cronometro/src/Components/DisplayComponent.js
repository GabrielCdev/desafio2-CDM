import React from 'react';

function DisplayComponent(props) {
  return (
    <div>
      <span>{(props.time.h >= 10) ? props.time.h : "0" + props.time.h}</span>&nbsp;&nbsp;:&nbsp;
      <span>{(props.time.m >= 10) ? props.time.m : "0" + props.time.m}</span>&nbsp;&nbsp;:&nbsp;
      <span>{(props.time.s >= 10) ? props.time.s : "0" + props.time.s}</span>&nbsp;&nbsp;:&nbsp;
      <span>{(props.time.ms >= 10) ? props.time.ms : "0" + props.time.ms}</span>&nbsp;&nbsp;:&nbsp;
      <span>{(props.time.cs >= 10) ? props.time.cs : "0" + props.time.cs}</span>
    </div>
  );
}

export default DisplayComponent;
