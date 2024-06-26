<template>
  <div>
    <h2>睡眠记录</h2>
    <form @submit.prevent="submitSleep">
      <div>
        <label for="start">开始时间:</label>
        <input id="start" type="datetime-local" v-model="sleep.start">
      </div>
      <div>
        <label for="end">结束时间:</label>
        <input id="end" type="datetime-local" v-model="sleep.end">
      </div>
      <button type="submit">记录</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sleep: {
        start: new Date().toISOString().substring(0, 16),
        end: new Date().toISOString().substring(0, 16)
      }
    };
  },
  methods: {
    submitSleep() {
      console.log(this.sleep);  // 这里可以是调用API保存数据的代码
      alert('睡眠记录已保存!');
      this.resetForm();
    },
    resetForm() {
      const now = new Date().toISOString().substring(0, 16);
      this.sleep = { start: now, end: now };
    }
  }
}
</script>

