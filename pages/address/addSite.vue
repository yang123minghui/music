<template>
	<view class="wrap">
		<view class="top">
			<view class="item">
				<view class="left">收货人</view>
				<input type="text" v-model="addr.name" placeholder-class="line" placeholder="请填写收货人姓名" />
			</view>
			<view class="item">
				<view class="left">手机号码</view>
				<input type="number" v-model="addr.phone" placeholder-class="line" placeholder="请填写收货人手机号" />
			</view>
			<view class="item" @tap="showRegionPicker">
				<view class="left">所在地区</view>
				<input disabled type="text" v-model="addr.site" placeholder-class="line" placeholder="省市区县、乡镇等" />
			</view>
			<view class="item address">
				<view class="left">详细地址</view>
				<textarea type="text" v-model="detailedAddress" placeholder-class="line" placeholder="街道、楼牌等" />
			</view>
			<!-- <view class="site-clipboard">
				<textarea placeholder-class="line" value="" placeholder="智能解析：粘贴或者输入整段文字，自动识别姓名、号码、地址，如：段佳佳13112345678浙江省杭州市西湖区某某路某某某大厦001号" />
				<view class="clipboard">
					地址粘贴板
					<u-icon name="arrow-down" class="icon" :size="20"></u-icon>
				</view>
			</view> -->
		</view>
		<view class="bottom">
			<view class="tag">
				<view class="left">标签</view>
				<view class="right">
					<view class="">
						<u-radio-group v-model="selectTag">
							<u-radio active-color="#F6AE65" @change="radioChange" v-for="(item, index) in tagList"
								:key="index" :name="item.name" :disabled="item.disabled">
								{{item.name}}
							</u-radio>
						</u-radio-group>
					</view>
				</view>
			</view>
			<view class="default">
				<view class="left">
					<view class="set">设置默认地址</view>
					<view class="tips">提醒：每次下单会默认推荐该地址</view>
				</view>
				<view class="right">
					<!-- <switch color="red" v-model="addr.default" @change="checkedFn" /> -->
				</view>
			</view>
		</view>
		<u-picker mode="region" ref="uPicker" v-model="show" @confirm="setAddr" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				tagList: [{
						name: '家',
						disabled: false
					},
					{
						name: '公司',
						disabled: false
					},
					{
						name: '学校',
						disabled: false
					}
				],
				// u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
				selectTag: '家',
				detailedAddress:'',
				addr: {

					name: '',
					phone: '',
					tag:  '家',
					default:false,
					site: ''
				}
			};
		},
		methods: {
          
			showRegionPicker() {
				this.show = true;
			},
			setAddr(e) {
				const province = e.province.label
				const city = e.city.label
				const area = e.area.label
				this.addr.site = province + city + area
				console.log(this.addr.site)
			},
			// 选中某个单选框时，由radio时触发
			radioChange(e) {
				this.addr.tag=e
			
			}
		},
		onNavigationBarButtonTap() {
			
			this.addr.site=this.addr.site+this.detailedAddress
			this.$store.commit("setAddrInfo",this.addr)
			this.$u.toast("保存成功")
			
			//console.log(this.addr)
			//自动回退
			setTimeout(function() {
				uni.navigateBack()
			}, 1000)

		}
	};
</script>

<style lang="scss" scoped>
	/deep/ .line {
		color: $u-light-color;
		font-size: 28rpx;
	}

	.wrap {
		background-color: #f2f2f2;

		.top {
			background-color: #ffffff;
			border-top: solid 2rpx $u-border-color;
			padding: 22rpx;

			.item {
				display: flex;
				font-size: 32rpx;
				line-height: 100rpx;
				align-items: center;
				border-bottom: solid 2rpx $u-border-color;

				.left {
					width: 180rpx;
				}

				input {
					text-align: left;
				}
			}

			.address {
				padding: 20rpx 0;

				textarea {
					// width: 100%;
					height: 150rpx;
					background-color: #f7f7f7;
					line-height: 60rpx;
					margin: 40rpx auto;
					padding: 20rpx;
				}
			}

			.site-clipboard {
				padding-right: 40rpx;

				textarea {
					// width: 100%;
					height: 150rpx;
					background-color: #f7f7f7;
					line-height: 60rpx;
					margin: 40rpx auto;
					padding: 20rpx;
				}

				.clipboard {
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 26rpx;
					color: $u-tips-color;
					height: 80rpx;

					.icon {
						margin-top: 6rpx;
						margin-left: 10rpx;
					}
				}
			}
		}

		.bottom {
			margin-top: 20rpx;
			padding: 40rpx;
			padding-right: 0;
			background-color: #ffffff;
			font-size: 28rpx;

			.tag {
				display: flex;

				.left {
					width: 160rpx;
				}

				.right {
					display: flex;
					flex-wrap: wrap;

					.tags {
						width: 140rpx;
						padding: 16rpx 8rpx;
						border: solid 2rpx $u-border-color;
						text-align: center;
						border-radius: 50rpx;
						margin: 0 10rpx 20rpx;
						display: flex;
						font-size: 28rpx;
						align-items: center;
						justify-content: center;
						color: $u-content-color;
						line-height: 1;
					}

					.plus {
						//padding: 10rpx 0;
					}
				}
			}

			.default {
				margin-top: 50rpx;
				display: flex;
				justify-content: space-between;
				border-bottom: solid 2rpx $u-border-color;
				line-height: 64rpx;

				.tips {
					font-size: 24rpx;
				}

				.right {}
			}
		}
	}
</style>
