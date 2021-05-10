import React from 'react';
import ExtendedComponents from 'utils/ExtendedComponent.jsx';
import PropTypes from 'prop-types';

import { withStyles, AppBar, Toolbar, Typography, Button, IconButton, MenuItem, Menu, Grid } from '@material-ui/core';

import { Lightbulb, LightbulbOutline } from 'mdi-material-ui';

const styles = (theme) => ({
	appBarTitle: {
		flexGrow: 1,
	},
	userMenu: {
		zIndex: 5,
	},
	translateButton: {
		color: 'white',
		textTransform: 'none',
	},
	leftIcon: {
		marginRight: theme.spacing(),
	},
	rightIcon: {
		marginLeft: theme.spacing(),
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
	},
});

class Header extends ExtendedComponents {
	constructor(props) {
		super(props);
	}

	switchTheme_click = (theme) => () => {
		this.props.switchTheme(theme);
	};

	//======================= Page Render ========================

	render() {
		const { classes, t } = this.props;
		return (
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					<Typography variant="h6" color="inherit" className={classes.appBarTitle}>
						Test
					</Typography>
					<div>
						<Grid container spacing={2} alignItems="center">
							<Grid item>
								{this.props.currentTheme === 'light' ? (
									<IconButton color="inherit" onClick={this.switchTheme_click('dark')}>
										<LightbulbOutline color="inherit" />
									</IconButton>
								) : (
									<IconButton color="inherit" onClick={this.switchTheme_click('light')}>
										<Lightbulb color="inherit" />
									</IconButton>
								)}
							</Grid>
						</Grid>
					</div>
				</Toolbar>
			</AppBar>
		);
	}
}

Header.propTypes = {
	history: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
	currentTheme: PropTypes.string.isRequired,
	switchTheme: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(Header);
