import React from 'react';
import ExtendedComponents from 'utils/ExtendedComponent.jsx';
import PropTypes from 'prop-types';
import { withStyles, Grid, Card, Typography, CardContent, Button } from '@material-ui/core';

const styles = (theme) => ({});

class Dashboard extends ExtendedComponents {
	constructor(props) {
		super(props);
	}

	changePage = (page) => (event) => {
		this.props.history.push(page);
	};

	render() {
		return (
			<Grid container spacing={2}>
				<Card>
					<CardContent>
						<Typography>Test</Typography>

						<Button variant="contained" color="secondary" onClick={this.changePage('/machin')}>
							Test
						</Button>
					</CardContent>
				</Card>
			</Grid>
		);
	}
}

Dashboard.propTypes = {
	classes: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired,
	currentTheme: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(Dashboard);
