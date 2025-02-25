// import StudentCard from "./components/StudentCard";
// import Header from "./components/Header";
// import Main from "./components/Main";
// import Footer from "./components/Footer";

// import Button from "./components/Button";

// import UserP from "./components/UserPage";
// import {  } from "antd";

// import InputParent from "./components/InputParent";
// import RegistPage from "./components/RegistPage";

// import Card from "./components/card/index";
// import { Button } from "antd";
import BookApp from "./components/Book/BookApp";
const App = () => {
  // const studentData = {
  //   name: "张三",
  //   age: 20,
  //   avatar:
  //     "https://myqqis.oss-cn-beijing.aliyuncs.com/08d791f2-d024-4762-8398-ad8736b54d4b.jpg", // 这里的链接可以更换为真实的头像链接
  //   homepage: "https://example.com",
  // };
  // const handleClick = () => {
  //   alert("按钮被点击了");
  // };

  return (
    // <div>
    //   <h1>学生信息</h1>
    //   <StudentCard student={studentData} />
    // </div>
    <>
      {/* <Layout>
        <Header />
        <Layout.Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <Main />
        </Layout.Content>
        <Footer />
      </Layout> */}
      {/* <UserPage /> */}
      {/* <Button1 onClick={handleClick}>点击我</Button1> */}
      {/* 
      <RegistPage /> */}
      {/* <Card
        header={<h2>今天天气真好</h2>}
        body={<p>这是卡片的主要内容。</p>}
        footer={<Button type="primary">点击操作</Button>}
      />

      <Card
        header={<h2>今</h2>}
        body={<p>这是卡片的主要内容 2。</p>}
        footer={<Button type="default">另一个操作</Button>}
      /> */}

      <BookApp />
    </>
  );
};

export default App;
