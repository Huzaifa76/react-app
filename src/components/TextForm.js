import React, { useState } from "react";

const TextForm = (props) => {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("Button is Change");
    setText(event.target.value);
  };
  const handleClearClick = () => {
    setText("");
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container text_form">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Enter Text"
            onChange={handleOnChange}
            value={text}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleDownClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div className="container text_form1">
        <h3>Your Text Summary</h3>
        <p>
          {text.split(" ").length} Words, {text.length} character in your text.
        </p>
        <p>{0.08 * text.split(" ").length} minutes to read this text.</p>
        <h3 className="mt-5">Preview Text</h3>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the TextBox above to peview it here......"}
        </p>
      </div>
    </>
  );
};

export default TextForm;
