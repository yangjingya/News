import * as types from './mutation-types'

const mutations={
    [types.SET_NEWS](state,news){
        state.news=news
    },
    [types.SET_NEWS_DETAIL](state,detail){
        state.newsDetail=detail
    }
}

export default mutations