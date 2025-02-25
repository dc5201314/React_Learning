
const Input = ({ onInputChange }) => {
  return (
    <input
      type="text"
      onChange={(e) => onInputChange(e.target.value)}
      placeholder="输入"
    />
  );
};

export default Input;
