<template>
	<view>
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="u-flex user-box u-p-l-30 u-p-r-20 u-p-b-30 u-p-t-20 " style="background-image: url(../../static/images/navbg.png)">
			<view class="u-m-r-10">
				<u-avatar :src="pic" size="140"></u-avatar>
			</view>
			<view class="u-flex-2">
				<view class="u-font-18 u-p-b-20 text-color">小青年</view>
				<view class="u-font-14 text-color">账号:18030378169</view>
			</view>
			<view class="u-m-l-10 u-p-10">
				<u-icon name="arrow-right" color="#ffffff" size="28" @click="goToPersonInfo"></u-icon>
			</view>
		</view>

		<view class="wrap">
			<u-row gutter="16" class="u-m-t-10 u-m-b-10">
				<u-col span="3">
					<view class="u-text-center">
						<!-- flex布局垂直 -->
						<view class="u-flex-col">
							<!-- 行居中 -->
							<u-icon class="u-row-center u-m-b-10"  color="#F6AE65" size="70" name="star"></u-icon>
							<text>收藏</text>
						</view>
					</view>
					
				</u-col>
				<u-col span="3">
					<view class="u-text-center">
						<!-- flex布局垂直 -->
						<view class="u-flex-col">
							<!-- 行居中 -->
							<u-icon class="u-row-center u-m-b-10"  color="#F6AE65" size="70" name="photo"></u-icon>
							<text>相册</text>
						</view>
					</view>
					
				</u-col>
				<u-col span="3">
					<view class="u-text-center">
						<!-- flex布局垂直 -->
						<view class="u-flex-col">
							<!-- 行居中 -->
							<u-icon class="u-row-center u-m-b-10"  color="#F6AE65" size="70" name="coupon"></u-icon>
							<text>卡券</text>
						</view>
					</view>
				</u-col>
				<u-col span="3">
					<view class="u-text-center">
						<!-- flex布局垂直 -->
						<view class="u-flex-col">
							<!-- 行居中 -->
							<u-icon class="u-row-center u-m-b-10"  color="#F6AE65" size="70" name="heart"></u-icon>
							<text>关注</text>
						</view>
					</view>
				</u-col>
			</u-row>
		</view>

		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="rmb-circle" title="支付"></u-cell-item>
			</u-cell-group>
		</view>

		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item title="收藏1">
					<u-icon class="u-m-r-10" slot="icon" color="#F6AE65" size="40" name="star"></u-icon>
				</u-cell-item>
				<u-cell-item title="相册">
					<u-icon class="u-m-r-10" slot="icon" name="photo" color="#F6AE65" size="40"></u-icon>
				</u-cell-item>
				<u-cell-item title="卡券">
					<u-icon class="u-m-r-10" slot="icon" name="coupon" color="#F6AE65" size="40"></u-icon>
				</u-cell-item>
				<u-cell-item title="关注">
					<u-icon class="u-m-r-10" slot="icon" name="heart" color="#F6AE65" size="40"></u-icon>
				</u-cell-item>
			</u-cell-group>
		</view>

		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="setting" title="设置"></u-cell-item>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pic: 'https://uviewui.com/common/logo.png',
				show: true
			}
		},
		onLoad() {

		},
		methods: {
			goToPersonInfo() {
				uni.navigateTo({
					url: 'personalInfo'
				})
			}
		}
	}
</script>

<style lang="scss">
	
	.wrap {
			padding: 24rpx;
			margin: -20px 10px 0px 10px;
			background-color: #ffffff;
			 border-radius: 10px;
		}
	
		.u-row {
			margin: 40rpx 0;
		}
	
		.demo-layout {
			height: 80rpx;
			border-radius: 8rpx;
			background: #e5e9f2;
		}
	
		.bg-purple {
			background: #e5e9f2;
		}
	
		.bg-purple-light {
			background: #e5e9f2;
		}
	
		.bg-purple-dark {
			background: #e5e9f2;
		}
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;

	}

	.navbar {
		background-image: linear-gradient(#FFDE28, #FF3228) !important;
	}

	page {
		background-color: #ededed;
	}

	.camera {
		width: 54px;
		height: 44px;

		&:active {
			background-color: #ededed;
		}
	}

	.user-box {
		background-color: #fff;
	}
</style>
