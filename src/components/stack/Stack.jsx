import React from 'react';
import stack from '../../data/stack.js';
import Title from '../Title';
import StackItem from './StackItem';

function Stack() {
	return (
		<div>
			<Title>Stack</Title>
			{stack.map((item) => {
				<StackItem title={item.title} skill={item.skill} image={item.image} />;
			})}
		</div>
	);
}

export default Stack;
