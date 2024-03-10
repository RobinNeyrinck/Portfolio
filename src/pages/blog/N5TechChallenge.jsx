import React from "react";
import "../../assets/css/blogs.css";

function N5TechChallenge() {
  return (
    <div className="blog-container">
      <h1>November Five Tech Challenge</h1>
      <img
        src="assets/images/blogs/n5/thumbnail.png"
        alt="thumbnail of the n5 tech challenge"
        className="blog-image"
      />
      <p className="blog-content">
        Our recent adventure at the November Five Hackathon in Antwerp was
        nothing short of thrilling. Embarking on a long train journey, eight
        enthusiastic students, including ourselves, made a concerted effort to
        participate in this exciting event. The hackathon offered a unique
        challenge that captivated our interest. Collaborating with seven other
        students, in 2 teams of four, we dove into the task with determination
        and creative fervor. The challenge not only tested our technical skills
        but also encouraged innovative problem-solving and teamwork.
      </p>
      <img src="assets/images/blogs/n5/group.png" className="blog-image" />
      <p className="blog-content">
        Throughout the event, the atmosphere buzzed with excitement as
        participants huddled together, exchanging ideas and strategies. The
        November Five Hackathon provided an ideal platform to showcase our
        skills, learn from others, and contribute to an atmosphere of collective
        innovation. Despite the challenges, the sense of accomplishment at the
        end of the hackathon was palpable. The journey back on the train was
        filled with reflections on the experience and the satisfaction of
        participating in a great and interesting challenge. Our November Five
        adventure was not just about the destination but the journey of
        learning, collaboration, and pushing the boundaries of our abilities.
      </p>
      <img src="assets/images/blogs/n5/result.png" className="blog-image" />
      <div className="source">
        <p>
          Source:{" "}
          <a href="https://www.eventbrite.com/e/n5-tech-challenge-2023-tickets-740034542237">
            N5 Tech Challenge 2023
          </a>
        </p>
      </div>
      <p className="tags">Tags:</p>
      <ul className="tag-list">
        <li>Antwerpen</li>
        <li>November Five</li>
        <li>Challenge</li>
      </ul>
    </div>
  );
}

export default N5TechChallenge;
