// 引入的不再是Vue的构造函数了，引入的是一个名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')--app(类似于之前Vue2中的vm，但app比vm更"轻")
// 创建应用实例对象
const app = createApp(App);
// 挂载
app.mount('#app');
