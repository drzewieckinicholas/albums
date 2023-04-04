import React from 'react';
import PropTypes from 'prop-types';

function Panel({children}) {
	return (
		<div>
			{children}
		</div>
	);
}

Panel.defaultProps = {
	children: 'Panel',
};

Panel.propTypes = {
	children: PropTypes.node,
};

export default Panel;
