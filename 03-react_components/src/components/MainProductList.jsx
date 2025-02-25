import { Row, Col } from "antd";
import MyCard from "./my-card";

const productData = [
  {
    coverImage: "https://myqqis.oss-cn-beijing.aliyuncs.com/fj.png",
    avatar: "https://myqqis.oss-cn-beijing.aliyuncs.com/w4.jpg",
    title: "标题1",
    content: "介绍1...",
  },
  {
    coverImage: "https://myqqis.oss-cn-beijing.aliyuncs.com/fj2.png",
    avatar: "https://myqqis.oss-cn-beijing.aliyuncs.com/w5.jpg",
    title: "标题2",
    content: "介绍2...",
  },
  {
    coverImage: "https://myqqis.oss-cn-beijing.aliyuncs.com/fj3.jpg",
    avatar: "https://myqqis.oss-cn-beijing.aliyuncs.com/w6.jpg",
    title: "标题3",
    content: "介绍3...",
  },
];

const MainProductList = () => {
  return (
    <>
      <Row gutter={[16, 16]} justify="center">
        {productData.map((product, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <MyCard
              coverImage={product.coverImage}
              avatar={product.avatar}
              title={product.title}
              content={product.content}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default MainProductList;
