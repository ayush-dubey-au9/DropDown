import  React, { useState } from "react";
import  '../component/dropDown.css';

function DropDown() {
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const arr = ["A", "B", "C", "D", "E"];
  const clickHandler = () => {
    if (option1 === "" || option2 === "" || option3 === "") {
      return console.error("Please select all");
    }
    console.log(option1, option2, option3);
  };
  return (
    <div className="App">
      <div>
        <select
          id="1"
          onClick={(e) => setOption1(e.target.value)}
          style={{  padding: "20px", margin: "100px" }}
        >
          <option value={option1}> {option1}</option>
          {arr
            .filter((item) => item !== option3 && item !== option2)
            .map((item) => (
              <option value={item}>{item}</option>
            ))}
        </select>
        <select
          id="2"
          onClick={(e) => setOption2(e.target.value)}
          style={{ padding: "20px", margin: "100px" }}
        >
          <option value={option2}> {option2}</option>
          {arr
            .filter((item) => item !== option3 && item !== option1)
            .map((item) => (
              <option value={item}>{item}</option>
            ))}
        </select>
        <select
          id="3 "
          onClick={(e) => setOption3(e.target.value)}
          style={{ padding: "20px", margin: "100px" }}
        >
          <option value={option3}> {option3}</option>
          {arr
            .filter((item) => item !== option1 && item !== option2)
            .map((item) => (
              <option value={item}>{item}</option>
            ))}
        </select>
      </div>
      <button onClick={clickHandler}>Submit</button>
    </div>
  );
}

export default DropDown;
