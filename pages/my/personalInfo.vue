<template>
	<view class="">
		<u-cell-group>
			<u-cell-item title="头像">
				<u-avatar :src="pic" size="100"></u-avatar>
			</u-cell-item>
			<u-cell-item title="昵称" value="小青年" @click="show=true"></u-cell-item>
			<u-cell-item title="密码" value="修改" @click="pwdShow=true"></u-cell-item>
			<u-cell-item title="更多" value=""></u-cell-item>
		</u-cell-group>
		<view class="u-m-t-10">
			<u-cell-group>
				<u-cell-item title="我的地址"></u-cell-item>
			</u-cell-group>
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
				pic: 'https://uviewui.com/common/logo.png',
				show: false,
				userName: '',
				pwdShow: false,
				oldPwd: "",
				newPwd:""
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
			updatePwdFn(){
				this.$u.toast("修改密码")
			}
		},
		onBackPress() {

			if (this.show) {
				this.show = false
				return true;
			}
		    if(this.pwdShow){
				this.pwdShow=false
				return true;
			}

		}
	}
</script>

<style lang="scss">
	page {
		background-color: #ededed;
	}
</style>
