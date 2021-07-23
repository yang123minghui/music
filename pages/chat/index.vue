<template>
	<view class="">
		<u-mask :show="show" @click="show = false" :custom-style="{background: 'rgba(0, 0, 0, 0)'}" :zoom="false">
			<ul class="tips-menu"  @tap.stop>
				<li>
					<span class="icon">图标</span>
					<div>发起群聊</div>
				</li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</u-mask>
		<view class="">
			<u-search placeholder="日照香炉生紫烟" v-model="keyword"></u-search>
		</view>
		<view class="">
			<u-cell-group>
				<u-cell-item>
					<view slot="icon" class="u-relative">
						<u-avatar src="https://uviewui.com/common/logo.png" size="140">
						</u-avatar>
						<u-badge type="error" :is-center="true" :absolute="true" count="7"></u-badge>
					</view>
					<view class="u-flex-col u-m-l-10" slot="title">
						<text class="u-font-18">杨明辉</text>
						<text class="u-font-14 u-light-color">今天吃饭了吗？</text>
					</view>
					<view class="u-light-color" slot="right-icon">
						晚上6:30
					</view>
					<!-- <u-switch slot="right-icon" v-model="checked"></u-switch> -->
				</u-cell-item>
				<u-cell-item>
					<view slot="icon" class="u-relative">
						<u-avatar src="https://uviewui.com/common/logo.png" size="140">
						</u-avatar>
						<u-badge type="error" :is-center="true" :absolute="true" count="7"></u-badge>
					</view>
					<view class="u-flex-col u-m-l-10" slot="title">
						<text class="u-font-18">杨明辉</text>
						<text class="u-font-14 u-light-color">今天吃饭了吗？</text>
					</view>
					<view class="u-light-color" slot="right-icon">
						{{nowDate}}
					</view>
					<!-- <u-switch slot="right-icon" v-model="checked"></u-switch> -->
				</u-cell-item>
				<u-cell-item>
					<view slot="icon" class="u-relative">
						<u-avatar src="https://uviewui.com/common/logo.png" size="140">
						</u-avatar>
						<u-badge type="error" :is-center="true" :absolute="true" count="7"></u-badge>
					</view>
					<view class="u-flex-col u-m-l-10" slot="title">
						<text class="u-font-18">杨明辉</text>
						<text class="u-font-14 u-light-color">今天吃饭了吗？</text>
					</view>
					<view class="u-light-color" slot="right-icon">
						晚上6:30
					</view>
					<!-- <u-switch slot="right-icon" v-model="checked"></u-switch> -->
				</u-cell-item>
				<u-cell-item>
					<view slot="icon" class="u-relative">
						<u-avatar src="https://uviewui.com/common/logo.png" size="140">
						</u-avatar>
						<u-badge type="error" :is-center="true" :absolute="true" count="7"></u-badge>
					</view>
					<view class="u-flex-col u-m-l-10" slot="title">
						<text class="u-font-18">杨明辉</text>
						<text class="u-font-14 u-light-color">今天吃饭了吗？</text>
					</view>
					<view class="u-light-color" slot="right-icon">
						晚上6:30
					</view>
					<!-- <u-switch slot="right-icon" v-model="checked"></u-switch> -->
				</u-cell-item>

			</u-cell-group>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
              show:false
			};
		},
		onLoad() {

		},
		methods: {

		},
		onShow() {


		},
		onBackPress() {

		},
		computed: {
			nowDate: function() {

				var date = new Date();
				var month = date.getMonth() + 1;
				var strDate = date.getDate();
				if (month >= 1 && month <= 9) {
					month = "0" + month;
				}
				if (strDate >= 0 && strDate <= 9) {
					strDate = "0" + strDate;
				}
				var currentDate = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
				return currentDate;
			}
		},
		onNavigationBarButtonTap() {
			this.show=!this.show
		}
	};
</script>

<style scoped>
	.tips-menu {
	    position: absolute;
	    z-index: 2;
	    width: 133px;
	    font-size: 16px;
	    right: -10px;
	    top: 54px;
	    text-align: left;
	    border-radius: 2px;
	    background-color: #49484b;
	    padding: 0 15px;
	    -webkit-transform-origin: 90% 0;
	    transform-origin: 90% 0;
	}
	.tips-menu li {
	    position: relative;
	    height: 40px;
	    line-height: 40px;
		list-style: none;
		color: #ffffff;
	}
	.tips-menu .icon{
	    float: left;
	    margin-right: 15px;
	}
</style>
