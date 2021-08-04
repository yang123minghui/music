<template>
    <view class="flexbox flex_col">
        <header-bar :isBack="true" title="朋友圈" :bgColor="{background: headerBarBackground}" transparent>
            <text slot="back" class="uni_btnIco iconfont icon-arrL"></text>
            <text slot="iconfont" class="uni_btnIco iconfont icon-publish mr_5" @tap="handlePublish"></text>
        </header-bar>
        
        <view class="uni__scrollview flex1">
            <view class="uni-friendZone">
                ...
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                headerBarBackground: 'transparent'
            }
        },
        onPageScroll : function(e) {
            // console.log("滚动距离为：" + e.scrollTop);
            this.headerBarBackground = 'rgba(65,168,99,'+e.scrollTop / 200+')'
        },
        methods: {
           
        }
    }
</script>

<style>

</style>