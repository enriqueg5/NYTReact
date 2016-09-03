var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
//  Include the IndexRoute (catch-all route)
var IndexRoute	= Router.IndexRoute;

var Main = require('../components/main.js');
var Saved = require('../components/children/saved.js');
var Search = require('../components/children/search.js');
var Query = require('../components/children/grandChildren/query.js');
var Results = require('../components/children/grandChildren/results.js');

module.exports = (
  <Route path='/' component={Main}>

		{/* If user selects Child1 then show the appropriate component*/}
		<Route path='Search' component={Search}>
      <Route path='query' component={Query} />
      <Route path='results' component={Results}/>
      <IndexRoute component = {Query} />
		</Route>

		{/* If user selects Child2 then show the appropriate component*/}
		<Route path='Saved' component={Saved} />

		{/*If user selects any other path... we get the Home Route*/}
		<IndexRoute component={Search} />

	</Route>
);
