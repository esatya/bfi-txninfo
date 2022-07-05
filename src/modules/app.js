import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { History } from '../utils/History';
// import indexRoutes from '../routes';
// import { PrivateRoute } from '../routes/PrivateRoutes';
import BankInterface from '../modules/bank';
import Header from '../layouts/layout-components/header/Header';

const App = () => {
	return (
		<>
		

			<Header />
			{/* <BankInterface /> */}
			<Router history={History}>
				<Switch>
					<Route exact path="/" component={BankInterface} />
					<Route path="/:biscode/:projectId" component={BankInterface} />

					{/* {indexRoutes.map((prop, key) => {
						return <PrivateRoute path={prop.path} key={key} component={prop.component} />;
					})} */}
				</Switch>
			</Router>
		</>
	);
};
export default App;
