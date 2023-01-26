import React from 'react';

function PortfolioItem({ title, imgUrl, stack, link }) {
	return (
		<a href={link} target="_blank" rel="noreferrer noopener">
			<img src={imgUrl} alt={title} />
			<div>
				<h3>{title}</h3>
				<p>
					{stack.map((language) => {
						<span>{language}</span>;
					})}
				</p>
			</div>
		</a>
	);
}

export default PortfolioItem;
