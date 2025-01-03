<template>
  <div>
    <MySalaryInfo :salary-info="salaryInfo"></MySalaryInfo>
    <button @click="showResult">薪水修改</button>
  </div>  
</template>

<script setup lang="ts">
import {reactive, ref} from 'vue'
import MySalaryInfo from './components/MySalaryInfo.vue'
let salaryInfo = reactive({
    userName:'zhangsan',
    salary:1000
})
function showResult(){
    salaryInfo.salary += 100
}
</script>

<style scoped>
 
</style>
