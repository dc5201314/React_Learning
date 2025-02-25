const UserProfile = ({ name,age,onAgeChange }) => {
    return (
        <div>
        <h1>用户信息</h1>
        <p>姓名: {name}</p>
        <p>年龄: {age}</p>
        <button onClick={onAgeChange}>增加年龄</button>
        </div>
    );
    }
    export default UserProfile;
