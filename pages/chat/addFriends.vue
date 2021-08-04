<template>
	<view class="u-flex-col u-p-20">
		<view class="u-m-t-30" style="width: 100%;">
			<u-input placeholder="输入好友账号" v-model="value" type="text" :border="true" />
		</view>
		<view class="u-text-center u-tips-color u-m-t-30">
			<view class="" style="width: 100%;">
				<text >我的微信号：180</text>
				<u-avatar style="vertical-align: text-bottom;" @click="dj" src="../../static/images/qrcCode.png" size="55"></u-avatar>
			</view>
			
		</view>
		<view class="u-m-t-30">
			<u-button type="success">搜索</u-button>
		</view>
		
		<u-modal v-model="show" :show-title="false" :zoom="false" :show-confirm-button="false"
			:show-cancel-button="false" :mask-close-able="true">
			<view class="u-flex-col u-p-10">
				<view class="u-text-center">
					 <tki-qrcode
					    ref="qrcode"
					    :cid="cid"
					    :val="val"
					    :size="size"
					    :unit="unit"
					     background="#000000"
					    foreground="#ffffff"
					    pdground="#ffffff"
					  
					   
					   
					    
					    loadMake="true"
					    usingComponents="true"
					    showLoading="true"
					   
					    @result="qrR" />
				</view>
				<view class="u-text-center">
					扫一扫，加我微信
				</view>
			</view>
		</u-modal>
	</view>
</template>

<script>
	import tkiQrcode from "@/components/tki-qrcode/tki-qrcode.vue"
	export default {
		components:{tkiQrcode},
		data() {
			return {
				cid:"1",
				val:"http://www.baidu.com",
				size:200,
				unit:"200",
				show:false
				
			};
		},
		onLoad() {
	
		},
		methods: {
			dj(){
				this.show=true
			}
	
		},
		onShow() {
	
	
		},
		onBackPress() {
	
		},
		computed: {
			
		}
	};
</script>

<style>
</style>
