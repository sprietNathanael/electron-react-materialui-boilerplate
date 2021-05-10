/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import './views/Dashboard/Dashboard.jsx';
import './index.css';

import indexRoutes from './routes/index.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Switch } from 'react-router-dom';
import RouteWrapper from 'utils/RouteWrapper.jsx';

import { ThemeProvider } from '@material-ui/core/styles';
import globalTheme from './globalTheme.jsx';

const hist = createBrowserHistory();

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			themeType: 'dark',
		};
	}

	switchTheme = (themeType) => {
		this.setState({ themeType: themeType });
	};

	render() {
		return (
			<ThemeProvider theme={globalTheme(this.state.themeType)}>
				<Router history={hist}>
					<Switch>
						{indexRoutes.map((prop, key) => {
							return (
								<RouteWrapper
									path={prop.path}
									Component={prop.component}
									key={key}
									passedProps={{ currentTheme: this.state.themeType, switchTheme: this.switchTheme }}
								/>
							);
						})}
					</Switch>
				</Router>
			</ThemeProvider>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
