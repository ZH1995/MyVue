<template>
    姓名：<input v-model="salaryInfo.userName"/><br/>
    薪水：<input type="number" v-model="salaryInfo.salary"/><br/>
    {{ salaryInfo }}
</template>

<script lang="ts">
    export default {
        name:'MySalaryInfo'   
    }
</script>

<script setup lang="ts">
import type { SalaryInfo } from '@/types/salaryInfo';
defineProps<{salaryInfo:SalaryInfo}>()
</script>

<style></style>