import React from 'react';
// import { Router, Route, Switch } from 'react-router-dom';
// import { History } from '../utils/History';
// import indexRoutes from '../routes';
// import { PrivateRoute } from '../routes/PrivateRoutes';
import BankInterface from './bank';

const App = () => {
	return (
		<>
			<BankInterface />
			{/* <Router history={History}>
				<Switch>
					<Route exact path="/" component={BankInterface} />

					{indexRoutes.map((prop, key) => {
						return <PrivateRoute path={prop.path} key={key} component={prop.component} />;
					})}
				</Switch>
			</Router> */}
		</>
	);
};
export default App;
