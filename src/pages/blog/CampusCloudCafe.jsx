import "../../assets/css/blogs.css";
function CampusCloudCafe() {
  return (
    <div className="blog-container">
      <h1>Campus Cloud Cafe</h1>
      <img
        src="assets/images/blogs/campus-cloud-cafe/thumbnail.png"
        alt="thumbnail of Campus Cloud Cafe"
        className="blog-image"
      />
      <p className="blog-content">
        Recently, at the Campus Cloud Cafe, three outstanding professionals from
        Noest, an IT company based in Kortrijk, Belgium, enlightened us with
        their expertise on Microsoft Azure. Klaas Lauwers kicked off the event,
        delving into the world of Azure Durable Functions. He provided a clear
        understanding of what these functions are, their practical applications,
        and how their syntax operates. In the second part of the event, Toon
        Vanhoutte, Azure MVP, took the stage to shed light on IoT (Internet of
        Things) and its relevance in various industries. He emphasized how Azure
        makes IoT implementation seamless, explaining the concept of a message
        broker and how IoT devices communicate with the cloud. Toon’s insights
        are invaluable, particularly for those of us working on the CCETT
        project in semester 5. The event’s conclusion was marked by Mathias
        Cheyns, who demonstrated real-world applications of OpenAI technology.
        He showcased the versatility of OpenAI models, covering not only
        language models like ChatGPT but also image recognition and other AI
        models. Mathias, drawing from his own experiences using OpenAI models in
        projects for Accent, left us inspired. These presentations at Campus
        Cloud Cafe were a great opportunity to gain insights into cutting-edge
        technologies like Microsoft Azure and OpenAI, and how they can be
        applied in real-world scenarios. Thanks to Klaas, Toon, and Mathias for
        sharing their knowledge and expertise with us.
      </p>
      <img
        src="assets/images/blogs/campus-cloud-cafe/group.png"
        alt="Image of the group that went to visit the event"
        className="blog-image"
      />
      <div className="source">
        <p>
          Source:{" "}
          <a href="https://www.eventbrite.be/e/campus-cloud-cafe-howest-tickets-714420158927">
            Campus Cloud Cafe 2023
          </a>
        </p>
      </div>
      <p className="tags">Tags:</p>
      <ul className="tag-list">
        <li>Attended Event</li>
        <li>Kortrijk</li>
        <li>Noest</li>
      </ul>
    </div>
  );
}

export default CampusCloudCafe;
