import Input from "./input";
import { useState } from "react";

const InputParent = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (newVal) => {
    setInputValue(newVal);
  };

  return (
    <>
      <h2>输入的数值是：{inputValue}</h2>
      <Input onInputChange={handleInputChange}></Input>
    </>
  );
};

export default InputParent;
