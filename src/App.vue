<template>
  <div>
    姓名：<input v-model="userName"/>{{ userName }}<br/>
    薪水：<input type="number" v-model="salary"/>{{ salary }}<br/>
    <button v-on:click="addSalary">提交</button><button @click="changeShowUserInfo">显示个人信息</button>
    <hr/>
    <div class="userInfo" v-if="showUserInfo">
      <h2>个人信息</h2>
      <p>年龄：<input type="number" v-model="userInfo.age"/></p>
      <p>性别：<input type="radio" value="1" v-model="userInfo.sex">男</input><input type="radio" value="2" v-model="userInfo.sex">女</input></p>
      <p>岗位：<select v-model="userInfo.job">
        <option value="dev">开发</option>
        <option value="test">测试</option>
        <option value="ops">运维</option>
      </select></p>
      <p>技术：<span v-for="skill in userInfo.skill" :key="skill">{{ skill }}</span></p>
      <p>新技术：<input v-model="newSkill"/><button @click="learnNewSkill">学习新技术</button></p>
      <p>个人信息汇总：{{ userInfo }}</p>
    </div>
  </div>  
</template>

<script lang="ts">
  export default{
    data() {
      return {
        userName: '张三',
        salary: 100,
        userInfo: {
          age: 0,
          sex: 1,
          job: 'dev',
          skill: ['java', 'python', 'go']
        },
        newSkill: '',
        showUserInfo: false
      }
    },
    methods: {
      addSalary() {
        this.salary += 100
      },
      learnNewSkill() {
        if (this.newSkill) {
          this.userInfo.skill.push(this.newSkill)
        }
      },
      changeShowUserInfo() {
        this.showUserInfo = !this.showUserInfo
      }
    }
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
