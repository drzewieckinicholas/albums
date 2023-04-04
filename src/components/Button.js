import React from 'react';
import PropTypes from 'prop-types';

function Button({ariaLabel, children, className, onClick, type}) {
	return (
		<button
			aria-label={ariaLabel}
			className={className}
			onClick={onClick}
			type={type}
		>
			{children}
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
	onClick: PropTypes.func,
	type: PropTypes.oneOf(['button', 'reset', 'submit']),
};

export default Button;
