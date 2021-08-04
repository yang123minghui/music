<template>
	<view class="">
		<view class="u-m-b-20">
			<u-cell-group>
				<u-cell-item  title="新增好友" :arrow="false" @click="toAddfrient" >
					<view slot="icon" class="u-p-10 u-m-r-20 u-text-center" style="background-color: #F6AE65;border-radius: 10px;">
						<u-avatar style="vertical-align:middle; " src="../../static/images/addfrient.png" size="90"></u-avatar>
					</view>
				</u-cell-item>
				<u-cell-item  title="群聊" :arrow="false" >
					<view slot="icon" class="u-p-10 u-m-r-20 u-text-center" style="background-color: green;border-radius: 10px;">
						<u-avatar style="vertical-align:middle; " src="../../static/images/qun.png" size="90"></u-avatar>
					</view>
				</u-cell-item>
			</u-cell-group>
		</view>
		<view class="">
			<u-index-list :scrollTop="scrollTop" active-color="#F6AE65">
				<view v-for="(item, index) in indexList" :key="index">
					<u-index-anchor :index="item" />
					<view class="list-cell">
						列表1
					</view>
					<view class="list-cell">
						列表2
					</view>
					<view class="list-cell">
						列表3
					</view>
				</view>
			</u-index-list>
		</view>

	</view>
</template>
<script>
	export default {
		data() {
			return {
				scrollTop: 0,
				indexList: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
					"T", "U",
					"V", "W", "X", "Y", "Z"
				]
			}
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		methods:{
			toAddfrient(){
				uni.navigateTo({
					url:'../chat/addFriends'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.list-cell {
		display: flex;
		box-sizing: border-box;
		width: 100%;
		padding: 10px 24rpx;
		overflow: hidden;
		color: #323233;
		font-size: 14px;
		line-height: 24px;
		background-color: #fff;
	}
</style>
