import React from "react";
import "../../assets/css/blogs.css";

function SimonVerdonckCombell() {
  return (
    <div className="blog-container">
      <h1>Simon Verdonck – Combell</h1>
      <img
        src="assets/images/blogs/combell/thumbnail.png"
        alt="thumbnail of Simon Verdonck – Combell"
        className="blog-image"
      />
      <p className="blog-content">
        In a session organized by Alexander, Simon Verdonck shared insights
        about Combell. However, the talk took a marketing-oriented approach
        rather than delving into the intricacies of hosting. The presentation
        offered a promotional overview of Combell, falling short of providing
        the anticipated in-depth exploration of hosting and its workings. While
        it didn’t meet expectations in terms of technical depth, attendees
        gained a promotional understanding of Combell’s services. In summary,
        the event provided a marketing-focused perspective on Combell, leaving
        the technical aspects of hosting somewhat unexplored.
      </p>
      <p className="tags">Tags:</p>
      <ul className="tag-list">
        <li>Attended Event</li>
        <li>Brugge</li>
        <li>Howest</li>
      </ul>
    </div>
  );
}

export default SimonVerdonckCombell;
