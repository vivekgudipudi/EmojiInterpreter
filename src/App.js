import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "smiling",
  "😲": "disbelief",
  "😂": "lol",
  "🤩": "excited",
  "😔": "sad",
  "🥡": "takeout box",
  "🤣": "rolling on the floor laughing",
  "❤️": "love",
  "😍": "looking lovely",
  "😉": "Winky Face",
  "😛": "Face with tongue out",
  "✋": "High Five",
  "😑": "annoyance"
};

const emojiKeys = Object.keys(emojiDictionary);

export default function App() {
  let [meaning, setMeaning] = useState("");

  function emojiHandler() {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we dont have this in our database";
    }

    setMeaning(meaning);
  }

  function emojiClickEvent(emoji) {
    setMeaning(emojiDictionary[emoji]);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter </h1>
      <input
        placeholder="Give me an emoji from below set"
        onChange={emojiHandler}
      />
      <div className="meaningText">{meaning}</div>

      <div className="emojiDiv">
        {emojiKeys.map((emoji) => (
          <span className="emojies" onClick={() => emojiClickEvent(emoji)}>
            {emoji}
          </span>
        ))}
      </div>
    </div>
  );
}
