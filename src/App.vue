<template>
  <div>
    姓名：<input v-model="userName"/>{{ userName }}<br/>
    薪水：<input type="number" v-model="salary"/>{{ salary }}<br/>
    <button v-on:click="addSalary">提交</button>
  </div>  
</template>

<script setup lang="ts">
import {reactive, toRef} from 'vue'
let salaryInfo = reactive({userName:'zhangsan',salary:1000})
let userName = toRef(salaryInfo, 'userName')
let salary = toRef(salaryInfo, 'salary')
function addSalary(){
    salary.value += 100
    console.log(salaryInfo)
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
