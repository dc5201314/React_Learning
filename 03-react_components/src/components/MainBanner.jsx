import { Carousel } from "antd";

const MainBanner = () => (
  <Carousel autoplay>
    <div>
      <img
        src="https://myqqis.oss-cn-beijing.aliyuncs.com/f.png"
        alt="banner1"
        style={{ width: "100%", height: 300 }}
      />
    </div>
    <div>
      <img
        src="https://myqqis.oss-cn-beijing.aliyuncs.com/fj4.jpg"
        alt="banner2"
        style={{ width: "100%", height: 300 }}
      />
    </div>
  </Carousel>
);

export default MainBanner;
