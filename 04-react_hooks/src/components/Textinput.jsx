import { useState } from "react";

function Textinput() {
  const [inputValue, setInputValue] = useState("abc");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <>
      <input type="text" value={inputValue} onChange={handleChange} />

      <p>输入的是：{inputValue}</p>
    </>
  );
}

export default Textinput;
