<template>
  <div>
    姓名：<input v-model="userName"/>{{ userName }}<br/>
    薪水：<input type="number" v-model="salary"/>{{ salary }}<br/>
    <button v-on:click="addSalary">提交</button>
  </div>  
</template>

<script setup lang="ts">
import MySalary from './components/MySalary';
let{userName, salary, addSalary} = MySalary();
  
</script>

<style scoped>
  .userInfo{
    background-color: cyan;
    widows: 80%;
  }
  .userInfo span{
    background-color: coral;
    margin-left: 10px;
    border: 1px;
    border-radius: 5px;
  }
</style>
