import React from 'react';
import PropTypes from 'prop-types';
import {GoSync} from 'react-icons/go';
function Button({ariaLabel, children, className, loading, onClick, type}) {
	return (
		<button
			aria-label={ariaLabel}
			className={className}
			disabled={loading}
			onClick={onClick}
			type={type}
		>
			{loading ? <GoSync /> : children}
		</button>
	);
}

Button.defaultProps = {
	className: 'button',
	type: 'button',
	onClick(event) {
		console.log(event);
	},
};

Button.propTypes = {
	ariaLabel: PropTypes.string,
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	loading: PropTypes.bool,
	onClick: PropTypes.func,
	type: PropTypes.oneOf(['button', 'reset', 'submit']),
};

export default Button;
