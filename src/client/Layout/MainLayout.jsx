import React from 'react';
import ExtendedComponents from 'utils/ExtendedComponent.jsx';
import PropTypes from 'prop-types';

import { Switch, Redirect } from 'react-router-dom';
import RouteWrapper from 'utils/RouteWrapper.jsx';

import { withStyles } from '@material-ui/core';

import mainRoutes from 'routes/mainRoutes.jsx';
import Header from 'components/Header/Header.jsx';

const styles = (theme) => ({
	app: {
		display: 'flex',
		backgroundColor: theme.palette.background.default,
		height: '100vh',
	},
	footer: {
		backgroundColor: theme.palette.secondary.main,
		zIndex: theme.zIndex.drawer + 1,
		position: 'fixed',
		bottom: 0,
		textAlign: 'center',
		width: '100%',
	},
	toolbar: theme.mixins.toolbar,

	mainPage: {
		padding: '1.5vh',
		flexGrow: 1,
		paddingBottom: 0,
		height: '96vh',
		overflowY: 'auto',
	},
});

class MainLayout extends ExtendedComponents {
	constructor(props) {
		super(props);

		this.props.history.listen(() => {});
	}

	switchTheme = (theme) => {
		this.props.switchTheme(theme);
	};

	switchRoutes = (passedProps) => {
		let toReturn = (
			<Switch>
				{mainRoutes.map((prop, key) => {
					if (prop.redirect) {
						return <Redirect from={prop.path} to={prop.to} key={key} />;
					}
					return (
						<RouteWrapper path={prop.path} Component={prop.component} key={key} passedProps={passedProps} />
					);
				})}
			</Switch>
		);
		return toReturn;
	};

	//======================= Page Render ========================

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.app}>
				<Header
					history={this.props.history}
					currentTheme={this.props.currentTheme}
					switchTheme={this.switchTheme}
				/>
				<div className={classes.mainPage} ref={this.scrollWrapperRef}>
					<div className={classes.toolbar} />
					{this.switchRoutes({
						history: this.props.history,
						currentTheme: this.props.currentTheme,
					})}
				</div>
			</div>
		);
	}
}

MainLayout.propTypes = {
	classes: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired,
	location: PropTypes.object.isRequired,
	switchTheme: PropTypes.func.isRequired,
	currentTheme: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(MainLayout);
