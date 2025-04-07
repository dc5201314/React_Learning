import React, { useEffect, useState } from "react";
import { View } from "@tarojs/components";
import { AtAvatar, AtList, AtListItem, AtButton } from "taro-ui";
import Taro from "@tarojs/taro"; // 确保导入 Taro
import "./index.scss";

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("");
  const [username, setUsername] = useState("");

  const checkLoginStatus = () => {
    const isLoggedIn = Taro.getStorageSync("isLoggedIn"); // 确保这个方法存在
    if (isLoggedIn) {
      setIsLoggedIn(true);
      setAvatarUrl(Taro.getStorageSync("avatarUrl") || "");
      setUsername(Taro.getStorageSync("username") || "");
    } else {
      setIsLoggedIn(false);
      setAvatarUrl(
        "https://myqqis.oss-cn-beijing.aliyuncs.com/c2504db5-68bd-479f-8b3b-b632f2c43d78_1.jpg"
      );
      setUsername("未登录");
    }
  };

  useEffect(() => {
    checkLoginStatus();
    Taro.eventCenter.on("loginSuccess", checkLoginStatus);
    return () => {
      Taro.eventCenter.off("loginSuccess", checkLoginStatus);
    };
  }, []);

  return (
    <View className="profile">
      <View
        style={{
          padding: "20px",
          textAlign: "center",
          backgroundColor: "#ddd",
        }}
      >
        <AtAvatar circle image={avatarUrl} size="large" />
        <View style={{ color: "#fff", marginTop: "10px" }}>{username}</View>
      </View>
      {isLoggedIn ? (
        <AtList>
          <AtListItem
            title="我的订单"
            arrow="right"
            iconInfo={{ size: 25, color: "#78A4FA", value: "shopping-cart" }}
          />
          <AtListItem
            title="我的收藏"
            arrow="right"
            iconInfo={{ size: 25, color: "#FF4949", value: "heart" }}
          />
          <AtListItem
            title="设置"
            arrow="right"
            iconInfo={{ size: 25, color: "#6190E8", value: "settings" }}
          />
        </AtList>
      ) : (
        <View style={{ padding: "20px", textAlign: "center" }}>
          <AtButton
            type="primary"
            onClick={() => Taro.navigateTo({ url: "/pages/login/index" })}
          >
            登录
          </AtButton>
        </View>
      )}
    </View>
  );
};

export default Profile;
