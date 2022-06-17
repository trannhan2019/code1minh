<script setup>
import { ref } from "vue";
import { MenuOutlined } from "@ant-design/icons-vue";
import TheMenu from "./TheMenu.vue";

const visible = ref(false);
const visibleUser = ref(false);

const showDrawer = () => {
  visible.value = true;
};

const showDrawerUser = () => {
  visibleUser.value = true;
};
</script>

<template>
  <div class="container-fluid">
    <div
      class="row text-white"
      style="background-color: #0c713d; padding: 1rem"
    >
      <div
        class="col-1 d-flex d-sm-none align-items-center justify-content-center"
      >
        <span @click="showDrawer"><MenuOutlined /></span>
      </div>
      <div
        class="col-10 d-flex align-items-center justify-content-center justify-content-sm-start col-sm-9"
      >
        <img
          src="../assets/logo.png"
          alt="logo"
          height="32"
          width="34"
          class="mx-3"
        />
        <span class="d-none d-sm-flex">QUẢN TRỊ</span>
      </div>
      <div
        class="d-none d-sm-flex col-sm-3 align-items-center justify-content-end"
      >
        Admin
      </div>
      <div
        class="col-1 d-flex d-sm-none align-items-center justify-content-center"
      >
        <span @click="showDrawerUser">X</span>
      </div>
    </div>
  </div>

  <a-drawer v-model:visible="visible" title="DANH MỤC" placement="left">
    <TheMenu />
  </a-drawer>

  <a-drawer v-model:visible="visibleUser" title="ADMIN" placement="right">
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>

<style scoped></style>
