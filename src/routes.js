import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import CreateWineReview from './containers/wine_review_create';
import WineList from './containers/wine_list';

export default (
	<Route path="/" component={App}>
    <IndexRoute component={WineList} />
	</Route>
);