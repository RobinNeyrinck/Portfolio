import React from 'react';

function Footer() {
	return (
		<div>
			<div>
				<div>
					<div>
						<a>Twitter</a>
						<a>LinkedIn</a>
						<a>Github</a>
					</div>
				</div>
			</div>
			<p>
				&copy; {new Date().getFullYear()} Robin Neyrinck. All rights reserved.
			</p>
		</div>
	);
}

export default Footer;
