<template>
    <div class="wrapper">
        <search-box></search-box>
        <div class="searchHistory">
            <div v-show="searchHistory.length===0" class="notify">因数据限制，暂无搜索功能，仅能保存搜索记录</div>
            <div class="title" v-show="searchHistory.length>0">搜索历史</div>
            <search-list></search-list> 
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import SearchBox from 'base/search-box/search-box'
    import SearchList from 'base/search-list/search-list'
    import {mapGetters} from 'vuex'

    export default{
        computed:{
            ...mapGetters([
                'searchHistory'
            ])
        },
        components:{
            SearchBox,
            SearchList
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .wrapper
        position fixed
        top 0
        left 0
        right 0
        bottom 0
        background white
        .searchHistory
            position:absolute
            top 56px
            left 0
            right 0
            bottom 0
            .title
                height 30px
                font-size 18px
                line-height 18px
                margin-top 15px
                padding-left 10px
            .notify
                font-size 18px
                color #d43d3d
                text-align center
                margin-top 20px
</style>


