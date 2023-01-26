import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';

function Portfolio() {
	return (
		<div>
			<div>
				{portfolio.map((project) => {
					<PortfolioItem
						imgUrl={project.imgUrl}
						title={project.title}
						stack={project.stack}
						link={project.link}
					/>;
				})}
			</div>
		</div>
	);
}

export default Portfolio;
