<script setup>
import Header from '../components/Header.vue';
import TheMenu from '../components/TheMenu.vue';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];
</script>
<template>
  <Header />
  <div class="container-fluid mt-2">
    <div class="row">
      <div class="d-none d-sm-flex col-sm-3">
        <a-list bordered style="width: 100%">
          <TheMenu />
          <template #header>
            <div>BẢNG ĐIỀU KHIỂN</div>
          </template>
        </a-list>
      </div>
      <div class="cole-12 col-sm-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
