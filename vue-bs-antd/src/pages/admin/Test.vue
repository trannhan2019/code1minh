<script>
//import { Dropdown } from "ant-design-vue";
import { DownOutlined } from "@ant-design/icons-vue";
import { useMenu } from "../../stores/useMenu";
export default {
  components: {
    DownOutlined,
  },
  setup() {
    const menuStore = useMenu();
    menuStore.onSelectedKeys(["admin-test"]);

    const handleMenuClick = (e) => {
      console.log("click", e);
    };
    return {
      handleMenuClick,
    };
  },
};
</script>
<template>
  <h1>Day la trang quan ly Test</h1>
  <h3>Test Dropdown</h3>
  <a-dropdown>
    <template #overlay>
      <a-menu @click="handleMenuClick">
        <a-menu-item key="1">
          <UserOutlined />
          1st menu item
        </a-menu-item>
        <a-menu-item key="2">
          <UserOutlined />
          2nd menu item
        </a-menu-item>
        <a-menu-item key="3">
          <UserOutlined />
          3rd item
        </a-menu-item>
      </a-menu>
    </template>
    <a-button>
      Button
      <DownOutlined />
    </a-button>
  </a-dropdown>
</template>

<style scoped>
.demo-dropdown-wrap :deep(.ant-dropdown-button) {
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
