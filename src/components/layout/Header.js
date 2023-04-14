import React from 'react';
import PropTypes from 'prop-types';

function Header({children}) {
	return (
		<header>
			{children}
		</header>
	);
}

Header.defaultProps = {
	children: 'Header',
};

Header.propTypes = {
	children: PropTypes.node,
};

export default Header;
