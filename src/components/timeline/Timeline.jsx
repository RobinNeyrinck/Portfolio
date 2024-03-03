import React from "react";
import timeline from "../../data/timeline";
import Title from "../Title";
import TimelineItem from "./TimelineItem";

function Timeline() {
  return (
    <div className="my-10 flex flex-col justify-center md:flex-row">
      <div className="w-full md:w-7/12">
        <Title>Timeline</Title>
        {timeline.map((item) => (
          <TimelineItem
            key={item.title}
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
