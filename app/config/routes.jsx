import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { MainContainer, HomePageContainer, SearchPageContainer, ModelPageContainer } from 'containers';

export default function getRoutes(history) {
  return (
    <Router history={history}>
      <Route path="/" component={MainContainer}>
        <IndexRoute component={HomePageContainer} />
        <Route path="search" component={SearchPageContainer} />
        <Route path="make/model/:id" component={ModelPageContainer} />
        <Route path="*" component={HomePageContainer} />
      </Route>
    </Router>
  );
}
