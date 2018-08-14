import * as types from './mutation-types'

const mutations={
    [types.SET_NEWS](state,news){
        state.news=news
    },
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
    }
}

export default mutations