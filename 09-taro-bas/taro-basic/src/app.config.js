export default defineAppConfig({
  pages: [
    "pages/index/index",
    "pages/discover/index",
    "pages/profile/index",
    "pages/product/index",
    "pages/login/index",
    "pages/account-book/index",
    "pages/music/index",
    "pages/name-card/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#4594D5",
    navigationBarTitleText: "我的应用",
    navigationBarTextStyle: "white",
  },
  tabBar: {
    color: "#999",
    selectedColor: "#4594D5",
    backgroundColor: "#fff",
    borderStyle: "black",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "./assets/zhuye.png",
        selectedIconPath: "./assets/zhuye1.png",
      },
      {
        pagePath: "pages/discover/index",
        text: "发现",
        iconPath: "./assets/daohang.png",
        selectedIconPath: "./assets/danghang1.png",
      },
      {
        pagePath: "pages/profile/index",
        text: "我的",
        iconPath: "./assets/touxiang1.png",
        selectedIconPath: "./assets/touxiang.png",
      },
    ],
  },
});
