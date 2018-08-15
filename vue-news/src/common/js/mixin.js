import {mapGetters,mapMutations,mapActions} from 'vuex'
import {getNews} from 'api/news'
import {createNews} from 'common/js/news'

const hot={tag: 'news_hot',as:'A1454B767D76A52',cp:'5B6D868A75928E1',text: '热点'}
const guess={tag: 'news_entertainment',as:'A1750BF6CD36B47',cp:'5B6D862B84978E1',text: '娱乐'}

export const newsMixin={
    data(){
        return{
            hotNews:[],
            guessNews:[]
        }
    },
    methods: {
        selectNews(newsDetail,road){
            this.setNewsDetail(newsDetail)
            this.saveHistoryNews(newsDetail)
            this.$router.push({
                path:`/${road}/${newsDetail.id}`
            })
            this._getHotNews()
            this._getGuessNews()
        },
        _getHotNews(){
            getNews(hot.tag,hot.as,hot.cp).then((res)=>{
                this.hotNews=[]
                res.data.forEach((item) => {
                    this.hotNews.push(createNews(item))
                })
                this.setHotNews(this.hotNews)    
            })
        },
        _getGuessNews(){
            getNews(guess.tag,guess.as,guess.cp).then((res)=>{
                this.guessNews=[]
                res.data.forEach((item) => {
                    this.guessNews.push(createNews(item))
                })
                this.setGuessNews(this.guessNews)    
            })
        },
        ...mapMutations({
            setNewsDetail:'SET_NEWS_DETAIL',
            setHotNews:'SET_HOT_NEWS',
            setGuessNews:'SET_GUESS_NEWS'
        }),
        ...mapActions({
            saveHistoryNews:'saveHistoryNews'
        })
    }
}
