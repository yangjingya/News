<template>
    <div class="home">
        <guide-bar @select="selectItem"></guide-bar>
        <news-list :data="news"></news-list>
    </div>
</template>

<script type="text/ecmascript-6">
    import GuideBar from 'base/guide-bar/guide-bar'
    import NewsList from 'base/news-list/news-list'
    import {getNews} from 'api/news'
    export default{
        data(){
            return{
                news:[]
            }
        },
        created() {
            this.firstTime=true
            if(this.firstTime){
                getNews('__all__','A1E5DBA65D86AB0','5B6D863A2BF07E1','1533897250').then((res)=>{
                    this.news=res.data
                    console.log(this.news)
                })
            } 
            this.firstTime=false
        },
        methods:{
            selectItem(item){
                this.news=[]
                if(item.time!=""){
                    getNews(item.tag,item.as,item.cp,item.time).then((res)=>{
                       this.news=res.data
                    })
                }else{
                    getNews(item.tag,item.as,item.cp,0).then((res)=>{
                        this.news=res.data
                    }) 
                }   
            }
        },
        components:{
            GuideBar,
            NewsList
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>


