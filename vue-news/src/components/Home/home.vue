<template>
    <div class="home">
        <guide-bar @select="selectItem"></guide-bar>
    </div>
</template>

<script type="text/ecmascript-6">
    import GuideBar from 'base/guide-bar/guide-bar'
    import {getNews} from 'api/news'
    export default{
        data(){
            return{
                news:[]
            }
        },
        methods:{
            selectItem(item){
                if(item.time!=""){
                    this.news=getNews(item.tag,item.as,item.cp,item.time)
                }else{
                    this.news=getNews(item.tag,item.as,item.cp,0)
                }
                // console.log(this.news)
            }
        },
        components:{
            GuideBar
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>


