/* global Plotly:true */

import React, { Component } from 'react';


import createPlotlyComponent from 'react-plotly.js/factory';
import "./Pages.css";


/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class Horizontal extends Component {
  render() {
    return (
      <Plot className="plot"
        data={[
            {
            type: 'bar',
            x: [1,5,4,7],
            y: [1,2,3,4],
            orientation: 'h',
            marker: {
             color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
              },
          } 
        ]}
        layout={ {width: 750, height: 520, title: 'Horizontal Bar Chart'} }
      />
    );
  }
}
export default Horizontal;