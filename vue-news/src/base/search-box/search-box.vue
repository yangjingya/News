<template>
    <div class="search-box">
        <i class="icon-back" @click="back"></i>
        <div class="search">
            <i class="icon-search"></i>
            <input class="box" v-model="query"  :placeholder="placeholder">
        </div>
        <span @click="clear" class="clear" v-show="query"><i class="icon-close"></i></span>
        <span @click="addSearch" class="searchBtn">搜索</span>
    </div>
</template>

<script type="rext/ecmascript-6">
    import {mapActions} from 'vuex'

    export default{
        props:{
            placeholder:{
                type:String,
                default:'搜你想搜的'
            }
        },
        data(){
            return{
                query:''
            }
        },
        created(){
            this.$watch('query',(newQuery)=>{
                this.$emit('query',newQuery)
            })
        },
        methods:{
            clear(){
                this.query=''
            },
            setQuery(query){
                this.query=query
            },
            addSearch(){
                if(!this.query){
                    return
                }
                this.saveSearchHistory(this.query)
            },
            back(){
                this.$router.back()
            },
            ...mapActions({
                saveSearchHistory:'saveSearchHistory'
            })
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" >
    @import "~common/stylus/variable"

    .search-box
        position fixed
        top 0
        left 0
        right 0
        z-index 500
        display flex
        align-items center
        box-sizing border-box
        padding 10px
        height 56px
        background #d43d3d
        font-size 0
        .icon-back
            font-size 28px
            color  white
            margin-right 10px
        .search
            background white
            flex 1
            display flex
            padding-left 5px
            align-items center
            border-radius 5px
            .icon-search
                flex:0 0 24px
                font-size: 24px
                color:  rgba(0,0,0,0.3)
                line-height 36px
            .box
                flex: 1
                line-height: 18px
                background: white
                height 32px
                color:  rgba(0,0,0,0.3)
                font-size: 16px
                outline none
                padding 0 5px
                &::placeholder
                    color: rgba(0,0,0,0.3)
        .clear
            flex 0 0 32px
            font-size: 20px
            text-align center
            color: white
            .icon-close
                font-size 16px
        .searchBtn
            flex 0 0 40px
            font-size 16px
            text-align center
            color white
</style>
