// src/pages/name-card/index.jsx
import React, { useState } from "react";
import { View } from "@tarojs/components";
import { AtCard, AtButton, AtInput } from "taro-ui";
import NameCard from "../../components/NameCard"; // 确保导入正确
import "./index.scss"; // 自定义样式

export default function NameCardPage() {
  // 使用 state 来管理用户输入的信息
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");

  // 用于控制名片是否显示的状态
  const [showCard, setShowCard] = useState(false);

  // 生成名片的点击事件处理
  const handleGenerateCard = () => {
    setShowCard(true);
    // 可以在此添加更多的逻辑，如存储信息等
    alert("名片生成成功！");
  };

  return (
    <View className="name-card-page">
      <AtCard title="个人名片" note="请填写您的信息" className="card">
        {/* 输入框供用户填写信息 */}
        <AtInput
          name="name"
          title="姓名"
          type="text"
          placeholder="请输入姓名"
          value={name}
          onChange={(value) => setName(value)}
        />
        <AtInput
          name="position"
          title="职位"
          type="text"
          placeholder="请输入职位"
          value={position}
          onChange={(value) => setPosition(value)}
        />
        <AtInput
          name="company"
          title="公司"
          type="text"
          placeholder="请输入公司"
          value={company}
          onChange={(value) => setCompany(value)}
        />
        <AtInput
          name="contact"
          title="联系方式"
          type="text"
          placeholder="请输入联系方式"
          value={contact}
          onChange={(value) => setContact(value)}
        />
        <AtInput
          name="email"
          title="邮箱"
          type="text"
          placeholder="请输入邮箱"
          value={email}
          onChange={(value) => setEmail(value)}
        />

        {/* 生成名片按钮 */}
        <AtButton type="primary" onClick={handleGenerateCard}>
          生成名片
        </AtButton>
      </AtCard>

      {/* 只有在点击生成名片后才渲染用户输入的信息作为名片 */}
      {showCard && (
        <AtCard title="您的名片" className="generated-card">
          <NameCard
            name={name}
            position={position}
            company={company}
            contact={contact}
            email={email}
          />
        </AtCard>
      )}
    </View>
  );
}
