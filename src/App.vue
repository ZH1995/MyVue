<template>
  <div id="app">
    <h1>My Vue App</h1>
    
  </div>

</template>

<script setup lang="ts">

import { storeToRefs } from 'pinia';
import { userStore } from './store/user';
const user = userStore()
user.changeUserName('hello')
console.log(user.getUserName)
const userInfo = storeToRefs(user)
console.log(userInfo)
</script>

<style>
 
</style>
