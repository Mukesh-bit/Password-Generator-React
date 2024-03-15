import React, { useState } from "react";
import usePasswordGeneratore from "./hooks/usePasswordGenerator";
import StrengthChecker from "./components/StrengthChecker";
import Button from "./components/Button";
import CheckedBox from "./components/CheckedBox";

const App = () => {
  const [charLength, setCharLength] = useState(4);
  const [copied, setCopied] = useState(false);
  const [checkBoxData, setCheckBoxData] = useState([
    { title: "Includes Uppercase Letters", state: false },
    { title: "Includes Lowercase Letters", state: false },
    { title: "Includes Numbers", state: false },
    { title: "Includes Symbols", state: false },
  ]);

  const handleCheckBoxChange = (i) => {
    const updatedCheckBoxData = [...checkBoxData];
    updatedCheckBoxData[i].state = !updatedCheckBoxData[i].state;
    setCheckBoxData(updatedCheckBoxData);
  };

  const { password, errorMessage, generatePassword } = usePasswordGeneratore();

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div className="container">
      <h1 style={{textAlign:"center"}}>PASSWORD GENERATOR</h1>
      {password && (
        <div className="header">
          <div className="title">{password}</div>
          <Button text={copied ? "copied" : "copy"} onClick={handleCopy} className="copyBtn"/>
        </div>
      )}

      <div className="charLength">
        <span>
          <label> Character Length </label>
          <label> {charLength} </label>
        </span>
        <input
          type="range"
          min="4"
          max="20"
          value={charLength}
          onChange={(e) => setCharLength(e.target.value)}
        />
      </div>

      <div className="checkBoxes">
        {checkBoxData.map((checkBox, index) => (
          <CheckedBox key={index} onChange={() => handleCheckBoxChange(index)} state={checkBox.state} title={checkBox.title}/>
        ))}
      </div>

      {errorMessage && <div className="errorMessage">{errorMessage} !</div>}

          <StrengthChecker password={password}/>

      
      <Button text="Generate Password" onClick={() => generatePassword(charLength, checkBoxData)} className="generatePassBtn"/>

    </div>
  );
};

export default App;
