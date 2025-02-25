
import  { useState } from 'react';
const RegistForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // 阻止默认表单提交行为
        onSubmit({ name, email }); // 将数据传递给父组件
        setName(''); // 清空输入框
        setEmail(''); // 清空输入框
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    姓名:
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </label>
            </div>
            <div>
                <label>
                    邮箱:
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </label>
            </div>
            <button type="submit">提交</button>
        </form>
    );
};

export default RegistForm;
