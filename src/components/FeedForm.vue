<template>
  <div>
    <h2>喂食记录</h2>
    <form @submit.prevent="submitFeed">
      <div>
        <label for="type">喂食类型:</label>
        <select id="type" v-model="feed.type">
          <option value="breast">母乳</option>
          <option value="formula">配方奶</option>
          <option value="solid">固体食物</option>
        </select>
      </div>
      <div>
        <label for="amount">数量 (毫升或克):</label>
        <input id="amount" type="number" v-model="feed.amount">
      </div>
      <div>
        <label for="time">时间:</label>
        <input id="time" type="datetime-local" v-model="feed.time">
      </div>
      <button type="submit">记录</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      feed: {
        type: 'breast',
        amount: 0,
        time: new Date().toISOString().substring(0, 16)
      }
    };
  },
  methods: {
    submitFeed() {
      console.log(this.feed);  // 这里你可以替换为调用API保存数据的代码
      alert('喂食记录已保存!');
      this.resetForm();
    },
    resetForm() {
      this.feed = { type: 'breast', amount: 0, time: new Date().toISOString().substring(0, 16) };
    }
  }
}
</script>

<style>
/* CSS for FeedForm */
</style>

