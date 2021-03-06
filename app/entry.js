import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';

// Featured
import About from './views/About';
import Contact from './views/Contact';
import Index from './views/Index';
import NotFound from './views/NotFound';
// import Endeavors from './views/Endeavors';
import Resume from './views/Resume';
// import Blog from './views/Blog';

// All of our CSS
import './static/css/main.scss';

ReactDOM.render(
  <Router basename={BASE_PATH}>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route path="/about" component={About} />
      {/* <Route path="/blog" component={Blog} />
      <Route path="/endeavors" component={Endeavors} /> */}
      <Route path="/contact" component={Contact} />
      <Route path="/resume" component={Resume} />
      {/* Only useful in development mode */}
      <Route component={NotFound} status={404} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);
