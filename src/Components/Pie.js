/* global Plotly:true */

import React, { Component } from 'react';



import createPlotlyComponent from 'react-plotly.js/factory';

import "./Pages.css";

/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class Pie extends Component {
  render() {
    return (
      <Plot className="plot"
        data={[
          {
            values: [15, 20 , 40 , 25],
            labels: ['Summer', 'Winter', 'Spring','Autumn'],
            type: 'pie',
            marker: {
             color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
              },
          }
        ]}
        layout={ {width: 750, height: 520, title: 'Pie Chart'} }
      />
    );
  }
}

export default Pie;