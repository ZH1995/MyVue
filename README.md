# baby-tracker

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Url

- http://localhost:8080/feed-record —— 访问喂食记录页面

- http://localhost:8080/sleep-record —— 访问睡眠记录页面

### Check port status
sudo lsof -i :[port]

### Structure
```
/src
	/components：存放 Vue 组件
		FeedForm.vue：喂食记录组件
		SleepForm.vue：睡眠记录组件
		ChartData.vue：图表显示组件
	/views：存放视图
		Home.vue：主页视图，可能会包含以上的表单和图表组件
		FeedRecord.vue: 喂食记录页面
		SleepRecord.vue: 睡眠记录页面
	App.vue：主应用文件，整合各个视图和组件
	main.js：Vue 应用的入口文件
	/router
		index.js：定义路由，连接不同的视图
	/public
	index.html：项目的HTML入口文件
```
