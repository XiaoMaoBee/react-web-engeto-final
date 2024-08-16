import "./sentenceChanger.css";
import sentences from "../sentences";

const SentenceChanger = () => {
  return (
    <div className="sentence-box">
      <p>{sentences[Math.floor(Math.random() * 4)].sentence}</p>
    </div>
  );
};

export default SentenceChanger;
