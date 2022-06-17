import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { Button, message, Drawer, List, Menu, Dropdown } from "ant-design-vue";

import "ant-design-vue/dist/antd.css";
// import "bootstrap/dist/css/bootstrap-reboot.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-utilities.min.css";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(Button);
app.use(Drawer);
app.use(List);
app.use(Menu);
app.use(Dropdown);
app.mount("#app");

app.config.globalProperties.$message = message;
