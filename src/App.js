import React, { Fragment } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";

import Posts from "./Posts";
import Post from "./Post";
import NotFound from "./NotFound";
import data from "./data";

export default () => (
  <Fragment>
    <Helmet titleTemplate="%s | My Blog" />
  
    <Router basename={process.env.REACT_APP_BASENAME}>
      <Routes>
        <Route exact path="/" render={routeProps => <Posts {...data} />} />

        {Object.entries(data.posts).map(([slug, post]) => (
          <Route 
            key={slug}
            exact
            path={`/${slug}`}
            render={({ match }) => <Post {...post} />}
          />
        ))}

        <Route render={routeProps => <NotFound />} />
      </Routes>
    </Router>
  </Fragment>
);