import React from 'react';
import Title from './Title';

function Contact() {
	return (
		<div>
			<div>
				<form action="#" method="POST">
					<Title>Contact</Title>
					<input type="text" name="name" placeholder="Name"></input>
					<input type="text" name="email" placeholder="Email"></input>
					<textarea name="message" placeholder="Message" rows="10"></textarea>
					<button type="button">Work with me!</button>
				</form>
			</div>
		</div>
	);
}

export default Contact;
