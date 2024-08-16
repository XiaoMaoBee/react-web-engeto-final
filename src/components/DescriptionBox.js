import "./descriptionBox.css";
import { useState } from "react";
import artDescriptions from "../data";

const DescriptionBox = () => {
  const [topic, setTopic] = useState(artDescriptions[0].description);

  return (
    <section className="description-box">
      <div className="buttons-row">
        {artDescriptions.map((oneItem) => {
          const { id, image, artist_name, art, skill_level, description } =
            oneItem;
          return (
            <button key={id} onClick={() => setTopic(description)}>
              {art}
            </button>
          );
        })}
      </div>
      <p>{topic}</p>
    </section>
  );
};

export default DescriptionBox;
