<template>
	<view>
		<view class="u-p-20">
			<view :class="{backColor:res.default,item:true}" v-for="(res, index) in siteList" :key="res.id"
				@click="selectDefault(index,res)">
				<view class="top">
					<view class="name">{{ res.name }}</view>
					<view class="phone">{{ res.phone }}</view>
					<view class="tag">
						<text v-if="res.default" :class="{red:true}">默认</text>
						<text>{{ res.tag }}</text>
					</view>
				</view>
				<view class="bottom">
					{{res.site}}
					<u-icon name="edit-pen" :size="40" :class="{bottom:true}" @tap="$u.toast('点击了')"></u-icon>
				</view>
			</view>
		</view>
		<view style="height: 120rpx;">

		</view>
		<view class="addSite" @tap="toAddSite">
			<view class="add">
				<u-icon name="plus" color="#ffffff" class="icon" :size="30"></u-icon>新建收货地址
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				siteList: []
			};
		},
		onLoad() {
			this.siteList =this.$store.state.userInfo.addrInfo;
		},
		methods: {
			getData() {
				
			},
			toAddSite() {
				//页面跳转
				uni.navigateTo({
					url: './addSite'
				});
			},
			selectDefault(e, res) {
				this.siteList.forEach(item => {
					item.default = false
				})
				res.default = true
			}
		},
		onShow() {
			/* const addrJson = this.$store.state.userInfo.addrInfo
			if (JSON.stringify(addrJson) != "{}") {
				this.siteList.push(addrJson);
			} */

		},
		onBackPress() {
			var ischeck = false
			//判断是否有选择一个默认地址
			this.siteList.forEach(item => {
				if (item.default) {
					ischeck = true
				}
			})
			if (!ischeck) {
                this.$u.toast("请选择一个默认地址")
				return true
			}
		}
	};
</script>

<style lang="scss" scoped>
	.item {
		padding: 40rpx 20rpx;

		.top {
			display: flex;
			font-weight: bold;
			font-size: 34rpx;

			.phone {
				margin-left: 60rpx;
			}

			.tag {
				display: flex;
				font-weight: normal;
				align-items: center;

				text {
					display: block;
					width: 60rpx;
					height: 34rpx;
					line-height: 34rpx;
					color: #ffffff;
					font-size: 20rpx;
					border-radius: 6rpx;
					text-align: center;
					margin-left: 30rpx;
					background-color: rgb(49, 145, 253);
				}

				.red {
					background-color: red
				}
			}
		}

		.bottom {
			display: flex;
			margin-top: 20rpx;
			font-size: 28rpx;
			justify-content: space-between;
			color: #999999;
		}
	}

	.addSite {
		display: flex;
		justify-content: space-around;
		width: 600rpx;
		line-height: 100rpx;
		position: fixed;
		bottom: 30rpx;
		left: 80rpx;
		background-color: #F6AE65;
		border-radius: 60rpx;
		font-size: 30rpx;

		.add {
			display: flex;
			align-items: center;
			color: #ffffff;

			.icon {
				margin-right: 10rpx;
			}
		}
	}

	//默认状态下样式
	.backColor {
		background-color: #F6AE65;
		color: #ffffff;
		border-radius: 10px;

		.bottom {
			color: #ffffff;
		}
	}
</style>
