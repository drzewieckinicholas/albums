import React from 'react';
import PropTypes from 'prop-types';

function Title({text}) {
	return (
		<h1>
			{text}
		</h1>
	);
}

Title.defaultProps = {
	children: 'Title',
};

Title.propTypes = {
	text: PropTypes.string,
};

export default Title;
