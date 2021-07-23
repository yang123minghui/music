<template>
	<view>
		<u-upload ref="uUpload" :action="action" :auto-upload="true" max-count="1"></u-upload>
		<u-button @click="submit">提交</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 非真实地址
				action: this.$BaseIp+'/uploadFile',
			}
		},
		methods: {
			submit() {
				let files = [];
				// 通过filter，筛选出上传进度为100的文件(因为某些上传失败的文件，进度值不为100，这个是可选的操作)
				files = this.$refs.uUpload.lists.filter(val => {
					return val.progress == 100;
				})
				// 如果您不需要进行太多的处理，直接如下即可
				// files = this.$refs.uUpload.lists;
				if(files.length<=0){
					this.$u.toast("空文件无法上传")
				}else{
					this.$store.commit("setUserImg",files[0].response.data)
					this.$u.toast("提交成功")
				}
				
			},
		}
	}
</script>
