import React from 'react';

function StackItem({ title, image, skill }) {
	return (
		<div>
			<p>{title}</p>
			<img src={image} className="h-20 cursor-pointer object-cover" />
		</div>
	);
}

export default StackItem;
