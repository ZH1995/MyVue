<template>
  <div>
    <MySalaryInfo ref="salaryInfo"></MySalaryInfo>
    <button @click="showResult">查看薪水</button>
  </div>  
</template>

<script setup lang="ts">
import {ref} from 'vue'
import MySalaryInfo from './components/MySalaryInfo.vue'
let salaryInfo = ref()

function showResult(){
  console.log(salaryInfo)
  console.log(salaryInfo.value)
  console.log(salaryInfo.value.userName)
  console.log(salaryInfo.value.salary)
}
</script>

<style scoped>
 
</style>
