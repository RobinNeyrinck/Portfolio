import React from 'react';
import stack from '../../data/stack.js';
import Title from '../Title';
import StackItem from './StackItem';

function Stack() {
	return (
		<div className="mt-10 flex flex-col justify-center md:flex-row">
			<div className="md:w-7/12">
				<div className="mb-10">
					<Title>Stack</Title>
					<h3 className="text-xl font-semibold">Frontend</h3>
					<div className="flex flex-row justify-between">
						{stack
							.filter((item) => item.technology === 'frontend')
							.map((item) => (
								<StackItem title={item.title} image={item.image} />
							))}
					</div>
				</div>
				<div className="mb-10">
					<h3 className="text-xl font-semibold">Backend</h3>
					<div className="flex flex-row justify-between">
						{stack
							.filter((item) => item.technology === 'backend')
							.map((item) => (
								<StackItem title={item.title} image={item.image} />
							))}
					</div>
				</div>
			</div>
		</div>
	);

	// TODO: style this stuff
}

export default Stack;
