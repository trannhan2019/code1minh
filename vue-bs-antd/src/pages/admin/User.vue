<script>
import { useMenu } from "../../stores/useMenu";
export default {
  setup() {
    const menuStore = useMenu();
    menuStore.onSelectedKeys(["admin-users"]);
    //useMenu().onSelectedKeys(['admin-users'])
  },
};
</script>
<template>Day la trang quan ly user</template>
