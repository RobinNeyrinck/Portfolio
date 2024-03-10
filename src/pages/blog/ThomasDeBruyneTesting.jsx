import React from "react";
import "../../assets/css/blogs.css";

function ThomasDeBruyneTesting() {
  return (
    <div className="blog-container">
      <h1>Thomas De Bruyne – Testing</h1>
      <img
        src="assets/images/blogs/testing/thomas.png"
        alt="Image of the speaker Thomas De Bruyne"
        className="blog-image"
      />
      <p className="blog-content">
        In a recent session organized by Alexander, Thomas De Bruyne shared
        valuable insights on automation, focusing on simplicity and
        practicality. Thomas emphasized the significance of automation without
        delving into complex examples. Despite the absence of a practical
        segment, his talk provided a foundational understanding of applying
        automation in real-world scenarios. Thanks to Alexander’s event
        organization, the session remained accessible, ensuring that attendees
        could easily grasp the concepts discussed. Thomas’s insights served as a
        starting point for individuals looking to explore and implement
        automation in their projects. In conclusion, Thomas De Bruyne’s
        discussion on automation, facilitated by Alexander, offered a simplified
        perspective, laying the groundwork for practical application in the
        absence of hands-on examples.
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

export default ThomasDeBruyneTesting;
