import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import { isMobileDevice } from "@/utils/index";
import App from "./App.vue";
import { Lazyload } from "vant";
import "vant/es/notify/style";
import "vant/es/dialog/style";
import "@/styles/responsive.scss";
import "@/styles/common.scss";

import router from "./router/index";

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(createPinia());
app.use(Lazyload);
app.use(router);
app.use(ElementPlus, {
  locale: zhCn,
});

app.mount("#app");

const setRootFontSize = () => {
  const isMobile = isMobileDevice();
  if (!isMobile) {
    return;
  } // PC端不干预
  const clientWidth = document.documentElement.clientWidth;
  const baseSize = clientWidth / 7.5; // 按750px设计稿
  document.documentElement.style.fontSize = baseSize + "px";
};

// 初始化执行
setRootFontSize();
// 监听窗口变化
window.addEventListener("resize", setRootFontSize);
