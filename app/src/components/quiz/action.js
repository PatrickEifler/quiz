import React from 'react';

export default (props) => {
	const { label, callback, actionTagClass } = props.action;

	return (
		<button className={actionTagClass}
				onClick={callback} >{label}
		</button>
	)
};

