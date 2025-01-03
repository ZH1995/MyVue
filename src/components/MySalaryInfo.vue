<template>
    姓名：<input v-model="userName"/><br/>
    薪水：<input type="number" v-model="salary"/><br/>
    
</template>

<script lang="ts">
    export default {
        name:'MySalaryInfo'   
    }
</script>

<script setup lang="ts">
import {ref} from 'vue'
let userName = ref('zhangsan')
let salary = ref(1000)
defineExpose({userName,salary})
</script>

<style></style>