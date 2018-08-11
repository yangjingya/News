import * as types from './mutation-types'

const mutations={
    [types.SET_NEWS](state,news){
        state.news=news
    }
}

export default mutations