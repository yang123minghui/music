<template>
	<view class="">
		<u-cell-group>
			<u-cell-item title="头像">
				<u-avatar slot="right-icon" :src="pic" size="100" @click="toImgUpload">
				</u-avatar>
			</u-cell-item>
			<u-cell-item title="昵称" value="小青年" @click="show=true"></u-cell-item>
			<u-cell-item title="密码" value="修改" @click="pwdShow=true"></u-cell-item>
			<u-cell-item title="更多" value=""></u-cell-item>
		</u-cell-group>
		<view class="u-m-t-10">
			<u-cell-group>
				<u-cell-item title="我的地址" @click="toAddr"></u-cell-item>
			</u-cell-group>
		</view>
		<view class="u-m-t-20">
			<u-button type="error" @click="back">退出</u-button>
		</view>

		<view>
			<u-modal v-model="show" :title-style="{color: 'red'}" :show-cancel-button="true" cancel-text="不更新"
				confirm-color="#F6AE65" @cancel="cacelFn" @confirm="updateUserNameFn">
				<u-field v-model="userName" label="修改昵称" placeholder="请填写新的昵称">
				</u-field>
			</u-modal>
		</view>
		<view>
			<u-modal v-model="pwdShow" :title-style="{color: 'red'}" :show-cancel-button="true" cancel-text="不更新"
				confirm-color="#F6AE65" @cancel="cacelFn" @confirm="updatePwdFn">
				<u-field v-model="oldPwd" label="旧密码" placeholder="请填写旧的密码"></u-field>
				<u-field v-model="newPwd" label="新密码" placeholder="请填写新的密码">
				</u-field>
			</u-modal>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pic: '',
				show: false,
				userName: "",
				pwdShow: false,
				oldPwd: "",
				newPwd: ""
			
			}
		},
		onLoad() {
          
		},
		methods: {

			updateUserNameFn() {
				this.$u.toast("提交成功")
			},
			cacelFn() {
				this.$u.toast("取消成功")
			},
			updatePwdFn() {
				this.$u.toast("修改密码")
			},
			toImgUpload(){
				uni.navigateTo({
					url:"./uploadImg"
				})
			},
			back(){
				uni.navigateTo({
					url:'../login/index'
				})
			},
			toAddr(){
				uni.navigateTo({
					url:'../address/index'
				})
			}
		},
		onBackPress() {

			if (this.show) {
				this.show = false
				return true;
			}
			if (this.pwdShow) {
				this.pwdShow = false
				return true;
			}

		},
		onShow() {
			 this.pic=this.$BaseIp+this.$store.state.userInfo.userImg.imgUrl
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #ededed;
	}
</style>
