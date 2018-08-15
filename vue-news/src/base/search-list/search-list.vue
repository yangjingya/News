<template>
    <div class="search-list" v-show="this.searchHistory.length">
        <transition-group name="list" tag="ul">
            <li :key="item" class="search-item" v-for="item in this.searchHistory">
                <span class="text">{{item}}</span>
                <span class="icon" @click.stop="deleteOne(item)">
                    <i class="icon-close"></i>
                </span>
            </li>
        </transition-group>
    </div>
</template>

<script type="text/ecmascript-6">
    import {mapGetters,mapActions} from 'vuex'

    export default{
        methods:{
            deleteOne(item){
                this.deleteSearchHistory(item)
            },
            ...mapActions({
                deleteSearchHistory:"deleteSearchHistory"
            })
        },
        computed:{
            ...mapGetters([
                'searchHistory'
            ])
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/variable"

    .search-list
        padding 0 20px
        background white
        height 100%
        .search-item
            display flex
            align-items center
            height 40px
            border-bottom 0.5px solid rgba(0,0,0,0.2)
            &.list-enter-active, &.list-leave-active
                transition all 0.1s
            &.list-enter, &.list-leave-to
                height 0
            .text
                flex 1
                color rgba(0,0,0,0.5)
            .icon
                extend-click()
                .icon-close
                    font-size $font-size-small
</style>

