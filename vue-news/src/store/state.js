import {loadFavourite,loadHistoryNews,loadSearch} from 'common/js/cache'

const state={
    newsDetail:{},
    refresh:false,
    hotNews:[],
    guessNews:[],
    favouriteNews:loadFavourite(),
    historyNews:loadHistoryNews(),
    searchHistory:loadSearch()
}

export default state