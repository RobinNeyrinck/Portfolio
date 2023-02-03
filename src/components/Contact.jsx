import React from 'react';
import Title from './Title';

function Contact() {
	return (
		<div className="mx-auto mb-10 flex flex-col">
			<div className="flex items-center justify-center">
				<form
					action="#"
					method="POST"
					className="flex w-full flex-col dark:border-black md:w-7/12"
				>
					<Title>Contact</Title>
					<input
						type="text"
						name="name"
						placeholder="Name"
						className="rounded-md border-2 bg-transparent p-2 focus:outline-none"
					></input>
					<input
						type="text"
						name="email"
						placeholder="Email"
						className="my-2 rounded-md border-2 bg-transparent p-2 focus:outline-none"
					></input>
					<textarea
						name="message"
						placeholder="Message"
						rows="10"
						className="mb-4 resize-none rounded-md border-2 bg-transparent p-2 focus:outline-none"
					></textarea>
					<button
						type="button"
						className="inline-block w-max rounded-md border-2 px-8 py-3 text-center text-base font-medium text-grey dark:drop-shadow-md dark:hover:stroke-white"
					>
						Work with me!
					</button>
				</form>
			</div>
		</div>
	);
}

export default Contact;
