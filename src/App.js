import Bar from "./Components/Bar";
import Line from "./Components/Line";
import Pie from "./Components/Pie";
import Scatter from "./Components/Scatter";
import Bubble from "./Components/Bubble";
import Horizontal from "./Components/Horizontal";
import "./App.css";

import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

document.body.style.backgroundColor = "#A9A9A9"
// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

class App extends Component {
  render() {
  return (
    <Router>
      <div>
       <h1>
         Plotly - React.js
       </h1>
       <ol>
       <li>
         <Link to="/Pie-Chart">Pie-Chart</Link>
       </li>
       <li>
         <Link to="/Scatter-Plot">Scatter-Plot</Link>
       </li>
       <li>
         <Link to="/Bubble-Chart">Bubble-Chart</Link>
       </li>
       <li>
         <Link to="/Line-Chart">Line-Chart</Link>
       </li>
       <li>
         <Link to="/Bar-Graph">Bar-Graph</Link>
       </li>
       </ol>
       
       
            
       <Route exact path="/Bar-Graph">
          <Bar />
       </Route>
       <Route path="/Line-Chart">
          <Line />
       </Route>
       <Route path="/Pie-Chart">
          <Pie />
       </Route>
       <Route exact path="/Scatter-Plot">
          <Scatter/>
       </Route>
       <Route path="/Bubble-Chart">
          <Bubble />
       </Route>
       <Route path="/Horizontal-Bar-Chart">
          <Horizontal />
       </Route>
       
       
      </div>
    </Router>
  );
}
}

export default App;