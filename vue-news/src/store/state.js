import {loadFavourite,loadHistoryNews} from 'common/js/cache'

const state={
    newsDetail:{},
    refresh:false,
    hotNews:[],
    guessNews:[],
    favouriteNews:loadFavourite(),
    historyNews:loadHistoryNews()
}

export default state