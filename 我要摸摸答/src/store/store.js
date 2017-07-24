import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		datas:[],
		sum:0,
		cnt:0
	},
	mutations:{
		data:function(state,list){
			state.datas = list;
		},
		sum:function(state,num){
			state.sum+=num
		},
		count:function(state){
			state.cnt++
		}
	},
	actions:{
		datalist:function(context,list){
			context.commit('data',list)
		},
		sums:function(context,num){
			context.commit('sum',num)
		},
		counts:function(context){
			context.commit('count')
		}
	}
})