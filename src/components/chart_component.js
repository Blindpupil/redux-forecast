import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default (props) => {
  function average(data) {
    const sum = data.reduce((v, n) => v+n);
    return Math.round(sum / data.length);
  }
  function avgInfo(data) {
    if (props.unit === 'celsius') {
      const kelvins = average(data);
      const celsius = Math.round(kelvins - 273.15);
      return <div>Average: {celsius}℃</div>;
    } else {
      return <div>Average: {average(data)} {props.unit}</div>;
    }
  }
  return (
    <div>
      <Sparklines data={props.data} height={50}>
        <SparklinesLine color={props.color}  />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      {avgInfo(props.data)}
    </div>
  )
}