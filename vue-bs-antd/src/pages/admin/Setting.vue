<script>
import { useMenu } from "../../stores/useMenu";
export default {
  setup() {
    const menuStore = useMenu();
    menuStore.onSelectedKeys(["admin-settings"]);
    //useMenu().onSelectedKeys(['admin-users'])
  },
};
</script>
<template>Day la trang Setting</template>
