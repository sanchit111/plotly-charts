/* global Plotly:true */

import React, { Component } from 'react';



import createPlotlyComponent from 'react-plotly.js/factory';
import "./Pages.css";


/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class Line extends Component {
  render() {
    return (
      <Plot className="plot" 
        data={[
          {
            x: [1,2,3,4],
            y: [1,3,7,6],
            type: 'scatter',
            marker: {
             color: 'rgb(93, 164, 214)',
              },
          }
        ]}
        layout={ {width: 750, height: 520, title: 'Line Chart'} }
      />
    );
  }
}

export default Line;