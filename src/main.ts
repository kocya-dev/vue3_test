import { createApp } from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import News from './News.vue'
import About from './About.vue'
import { createRouter,createWebHashHistory } from 'vue-router';
import './style.css'

const router = createRouter({
    history : createWebHashHistory(), // HTML5 history mode
	routes : [
		{path:'/', name: 'home', component : Home},
		{path:'/news',name: 'new', component: News},
		{path:'/about',name: 'about', component: About}
	]
})

//(3)Vueインスタンスへrouterインスタンスを渡す
var app = createApp(App)
app.use(router)
app.mount('#app')
