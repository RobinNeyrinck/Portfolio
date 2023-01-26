import React from 'react';
import timeline from '../../data/timeline';
import Title from '../Title';
import TimelineItem from './TimelineItem';

function Timeline() {
	return (
		<div>
			<div>
				<Title>Timeline</Title>
				{timeline.map((item) => (
					<TimelineItem
						year={item.year}
						title={item.title}
						duration={item.duration}
						details={item.details}
					/>
				))}
			</div>
		</div>
	);
}

export default Timeline;
