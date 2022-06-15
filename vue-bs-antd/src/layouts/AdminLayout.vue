<script setup>
import Header from "../components/Header.vue";
</script>
<template>
  <Header />
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-3">SIDER BAR</div>
      <div class="col-sm-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
