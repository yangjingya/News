import * as types from './mutation-types'

const mutations={
    [types.SET_NEWS_DETAIL](state,detail){
        state.newsDetail=detail
    },
    [types.SET_REFRESH](state,refresh){
        state.refresh=refresh
    },
    [types.SET_HOT_NEWS](state,news){
        state.hotNews=news
    },
    [types.SET_GUESS_NEWS](state,news){
        state.guessNews=news
    },
    [types.SET_FAVOURITE_NEWS](state,news){
        state.favouriteNews=news
    },
    [types.SET_HISTORY_NEWS](state,news){
        state.historyNews=news
    }
}

export default mutations