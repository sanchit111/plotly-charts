/* global Plotly:true */

import React, { Component } from 'react';


import createPlotlyComponent from 'react-plotly.js/factory';
import "./Pages.css";


/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class Scatter extends Component {
  render() {
    return (
      <Plot className="plot"
        data={[
          {
            x: [1,2,3,4],
            y: [1,3,7,6],
            mode: 'markers',
            type: 'scatter',
            marker: {
             color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
             size: 12 },

        }
        ]}
        layout={ {width: 750, height: 520, title: 'Scatter Plot'} }
      />
    );
  }
}
export default Scatter;