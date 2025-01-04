<template>
  <div id="app">
    <h1>My Vue App</h1>
    <p>
      <RouterLink to="/home">首页</RouterLink>
      <RouterLink to="/about">关于</RouterLink>
      <RouterLink to="/news">新闻</RouterLink>
    </p>
    <div class="content">
      <RouterView></RouterView>
    </div>
  </div>

</template>

<script setup lang="ts">

</script>

<style>
  .content{
    background-color: yellowgreen;
    widows: 10%;
    height: 400px;
    border: 1cap;
    border-radius: 10px;
  }
</style>
