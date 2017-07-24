// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import store from './store/store.js'


Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	data:{
		datas:[]
	},
	store,
	router,
	template: '<App/>',
	components: { App },
	created:function(){
		this.$http.get('../static/server/data.json').then((res)=>{
				this.datas = res.data;
				//console.log(this.datas)
				this.$store.dispatch('datalist',this.datas);
		})
	}
})
