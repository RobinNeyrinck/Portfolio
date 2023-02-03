import React from 'react';

function StackItem({ title, image }) {
	return (
		<div className="pt-2">
			<p className="pb-2 text-center">{title}</p>
			<img src={image} className="h-20 cursor-pointer object-cover" />
		</div>
	);
}

export default StackItem;
