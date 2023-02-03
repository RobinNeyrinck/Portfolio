import React from 'react';
import stack from '../../data/stack.js';
import Title from '../Title';
import StackItem from './StackItem';

function Stack() {
	return (
		<div className="my-20 flex flex-col justify-center md:flex-row">
			<div className="flex flex-row md:w-7/12">
				<Title>Stack</Title>
				<h3 className="text-xl font-semibold">Frontend</h3>
				{stack
					.filter((item) => item.technology === 'frontend')
					.map((item) => (
						<StackItem
							title={item.title}
							image={item.image}
							skill={item.skill}
						/>
					))}
			</div>
			<div className="flex flex-row md:w-7/12">
				<h3 className="text-xl font-semibold">Backend</h3>
				{stack
					.filter((item) => item.technology === 'backend')
					.map((item) => (
						<StackItem
							title={item.title}
							image={item.image}
							skill={item.skill}
						/>
					))}
			</div>
		</div>
	);

	// TODO: style this stuff
}

export default Stack;
