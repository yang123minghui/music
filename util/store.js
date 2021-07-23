//引用Vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//实例store对象
const store = new Vuex.Store({
	state: {
		count: 6,
		userInfo: {
			userImg: {
				imgUrl: 'g',
				imgId: ''
			},
			addrInfo: [{

					name: '游X',
					phone: '183****5523',
					tag: '家',
					default: false,
					site: '广东省深圳市宝安区 自由路66号'
				},
				{

					name: '李XX',
					phone: '183****5555',
					tag: '家',
					default: false,
					site: '广东省深圳市宝安区 翻身路xx号'
				}
			]
		}
	},
	mutations: {
		//设置用户图片
		setUserImg(state, json) {
			state.userInfo.userImg = json
		},
		setAddrInfo(state, json) {
			state.userInfo.addrInfo.push(json);
		}
	}
})

//导出store对象
export default store
