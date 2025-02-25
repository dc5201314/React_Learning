import PropTypes from "prop-types";
const StudentCard = ({ student }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <img
        src={student.avatar}
        alt={`${student.name}'s avatar`}
        style={{ width: "100px", height: "100px" }}
      />
      <h2>{student.name}</h2>
      <p>年龄: {student.age}</p>
      <a href={student.homepage} target="_blank" rel="noopener noreferrer">
        主页
      </a>
    </div>
  );
};
StudentCard.propTypes = {
  student: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    avatar: PropTypes.string,
    homepage: PropTypes.string,
  }),
};
export default StudentCard;
