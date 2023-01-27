import React from 'react';

function StackItem({ title, image, skill }) {
	return (
		<div>
			<p>{title}</p>
			<p>{image}</p>
			<p>{skill}</p>
		</div>
	);
}

export default StackItem;
