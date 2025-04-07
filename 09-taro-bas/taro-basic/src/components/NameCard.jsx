// src/components/Card.js
import { View, Text, Image } from "@tarojs/components";
import "./NameCard.scss";

export default function NameCard({ name, position, company, contact, email }) {
  const avatarUrl =
    "https://myqqis.oss-cn-beijing.aliyuncs.com/c2504db5-68bd-479f-8b3b-b632f2c43d78_1.jpg"; // 固定头像路径

  return (
    <View className="card">
      <Image className="avatar" src={avatarUrl} mode="aspectFill" />
      <View className="info-line">
        <Text className="name">姓名：{name}</Text>
      </View>
      <View className="info-line">
        <Text className="position">职位：{position}</Text>
      </View>
      <View className="info-line">
        <Text className="company">公司：{company}</Text>
      </View>
      <View className="info-line">
        <Text className="contact">联系方式: {contact}</Text>
      </View>
      <View className="info-line">
        <Text className="email">邮箱: {email}</Text>
      </View>
    </View>
  );
}
