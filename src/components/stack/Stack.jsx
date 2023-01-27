import React from 'react';
import stack from '../../data/stack.js';
import Title from '../Title';
import StackItem from './StackItem';

function Stack() {
	return (
		<div className="my-20 flex flex-col justify-center md:flex-row">
			<div className="w-full md:w-7/12">
				<Title>Stack</Title>
				{stack.map((item) => (
					<StackItem title={item.title} image={item.image} skill={item.skill} />
				))}
			</div>
		</div>
	);
}

export default Stack;
