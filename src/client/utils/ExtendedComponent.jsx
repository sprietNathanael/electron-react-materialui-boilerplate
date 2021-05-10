import React from 'react';

class ExtendedComponents extends React.Component {
	promisedSetState = (newState) => {
		return new Promise((resolve) => {
			this.setState(newState, () => {
				resolve();
			});
		});
	};
}

export default ExtendedComponents;
