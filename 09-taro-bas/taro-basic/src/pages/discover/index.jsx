import React from "react";
import { View } from "@tarojs/components";
import { AtButton, AtCard } from "taro-ui";
import "./index.scss"; // 自定义样式
import { navigateTo } from "@tarojs/taro";
export default function Discover() {
  return (
    <View className="discover-container">
      <AtCard title="工具箱" note="选择您想要使用的工具" className="card">
        <View className="button-group">
          <AtButton
            type="primary"
            onClick={() => navigateTo({ url: "/pages/account-book/index" })}
            className="button"
          >
            记账本
          </AtButton>
          <AtButton
            type="primary"
            onClick={() => navigateTo({ url: "/pages/music/index" })}
            className="button"
          >
            音乐盒子
          </AtButton>
          <AtButton
            type="primary"
            onClick={() => navigateTo({ url: "/pages/name-card/index" })}
            className="button"
          >
            个人名片
          </AtButton>
        </View>
      </AtCard>
    </View>
  );
}
