import App from '../Components/Main';
import CreatePost from '../Components/NewPost';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import React from 'react';

const Routing = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/posts" component={CreatePost} />
      </div>
    </Router>
  );
}

export default Routing;
