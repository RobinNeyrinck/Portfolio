import React from 'react';

function Intro() {
	return (
		<div className="flex flex-col items-center justify-center pt-20 pb-6 text-center">
			<h1 className="mb-1 text-4xl font-bold dark:text-white md:mb-3 md:text-7xl">
				Robin Neyrinck
			</h1>
			<p className="mb-3 text-base font-medium md:text-xl">
				Software Engineer & Web developer
			</p>
			<p className="mb-6 max-w-xl text-sm font-bold">
				A developer-in-training, who codes for fun.
			</p>
		</div>
	);
}

export default Intro;
