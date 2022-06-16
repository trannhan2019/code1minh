<script>
import { storeToRefs } from "pinia";
import { useMenu } from "../stores/useMenu";
import { UserOutlined } from "@ant-design/icons-vue";
export default {
  components: {
    UserOutlined,
  },
  setup() {
    const menuStore = useMenu();
    return {
      ...storeToRefs(menuStore),
    };
  },
};
</script>

<template>
  <a-menu
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    mode="inline"
  >
    <a-menu-item key="admin-users">
      <router-link :to="{ name: 'admin-users' }">
        <span> <UserOutlined /> Tài khoản</span>
      </router-link>
    </a-menu-item>
    <a-menu-item key="admin-roles">
      <router-link :to="{ name: 'admin-roles' }">
        <span>Vai trò</span>
      </router-link>
    </a-menu-item>
    <a-menu-item key="admin-settings">
      <router-link :to="{ name: 'admin-settings' }">
        <span>Cài đặt</span>
      </router-link>
    </a-menu-item>
  </a-menu>
</template>

<style>
a {
  text-decoration: none;
}
</style>
