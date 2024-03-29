import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import Spinner from './modules/spinner';
import './assets/scss/style.scss';
import './assets/css/custom.css';
import './assets/css/responsive.css';

const App = lazy(
	() =>
		new Promise(resolve => {
			setTimeout(() => resolve(import('./modules/app')), 0);
		})
);
ReactDOM.render(
	<Suspense fallback={<Spinner />}>
		<App />
	</Suspense>,
	document.getElementById('root')
);
