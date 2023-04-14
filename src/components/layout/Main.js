import React from 'react';
import PropTypes from 'prop-types';

function Main({children}) {
	return (
		<main>
			{children}
		</main>
	);
}

Main.defaultProps = {
	children: 'Main',
};

Main.propTypes = {
	children: PropTypes.node,
};

export default Main;
