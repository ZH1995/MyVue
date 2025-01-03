<template>
  <div>
    姓名：<input ref="name" abc="123"/><br/>
    <button v-on:click="showRes">提交</button>
  </div>  
</template>

<script setup lang="ts">
import {ref} from 'vue'
let name = ref()
  function showRes(){
    console.log(name)
    console.log(name.value)
    console.log(name.value.value)
    console.log(name.value.getAttribute('abc'))
  }
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
