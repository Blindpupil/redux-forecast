import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart_component';

class WeatherList extends Component {
  renderWeather(data) {
    const name = data.city.name;
    // arrays with only the values
    const temps = data.list.map(weather => weather.main.temp);
    const pressures = data.list.map(weather => weather.main.pressure);
    const humidities = data.list.map(weather => weather.main.humidity);

    return (
      <tr key={name}>
        <th>{name}</th>
        <td>
          <Chart data={temps} color="red" unit="celsius"/>
        </td>
        <td>
          <Chart data={pressures} color="blue" unit="hPa"/>
        </td>
        <td>
          <Chart data={humidities} color="purple" unit="%"/>
        </td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">
              City
            </th>
            <th scope="col">
              Temperature
            </th>
            <th scope="col">
              Pressure
            </th>
            <th scope="col">
              Humidity
            </th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({weather}) {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList);