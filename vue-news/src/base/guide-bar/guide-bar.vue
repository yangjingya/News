<template>
    <div class="guide-bar">
        <ul class="nav">
            <li class="nav-item" v-for="(item,index) in nav" @click="selectItem(item,index)" :class="{'item_active':index===selectOne}" >{{item.text}}</li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        data(){
            return{
                nav:[
                    {tag: '__all__',as:'A1E5DBA65D86AB0',cp:'5B6D863A2BF07E1',text:'推荐'},
                    {tag: 'news_hot',as:'A1454B767D76A52',cp:'5B6D868A75928E1',text: '热点'},
                    {tag: 'news_society',as:'A1C58B968DC6AF1',cp:'5B6D360ADF31AE1',text: '社会'},
                    {tag: 'news_entertainment',as:'A1750BF6CD36B47',cp:'5B6D862B84978E1',text: '娱乐'},
                    {tag: 'news_military',as:'A1B56B464D46B60',cp:'5B6D267BB6801E1',text: '军事'},
                    {tag: 'news_tech',as:'A1A57B66AD26B85',cp:'5B6DE63BB855AE1',text: '科技'},
                    {tag: 'news_sports',as:'A1D5EB76FD56BB6',cp:'5B6D469BFB968E1',text: '体育'},
                    {tag: 'news_finance',as:'A1757BD63D86BE4',cp:'5B6D767B3E54CE1',text: '财经'},
                    {tag: 'news_world',as:'A1D59B365D16C00',cp:'5B6D66FCF070EE1',text: '国际'},
                    {tag: 'news_fashion',as:'A1157BC6CDC6C17',cp:'5B6DC6AC0117EE1',text: '时尚'}
                ],
                selectOne:0
            }
        },
        methods:{
            selectItem(item,index){
                this.selectOne=index
                this.$emit('select',item)
            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import '~common/stylus/variable'

    .guide-bar
        position fixed 
        top 44px
        left 0
        width 100%
        height 40px
        background #f4f5f6
        line-height 40px
        z-index 200
        .nav
            display flex
            align-items middle
            overflow auto
            .nav-item
                display inline-block
                flex 1
                text-align center
                flex-shrink 0
                flex-basis 60px
                font-size $font-size-medium-x
                color rgba(0,0,0,0.8)
            .item_active
                color:#f85959
</style>


