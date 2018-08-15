import * as types from './mutation-types'
import {saveFavourite,deleteFavourite,saveHistoryNewsIn,saveSearch,deleteSearch} from 'common/js/cache'

export const saveFavouriteNews=function({commit},news){
    commit(types.SET_FAVOURITE_NEWS,saveFavourite(news))
}

export const deleteFavouriteNews=function({commit},news){
    commit(types.SET_FAVOURITE_NEWS,deleteFavourite(news))
}

export const saveHistoryNews=function({commit},news){
    commit(types.SET_HISTORY_NEWS,saveHistoryNewsIn(news))
}

export const saveSearchHistory=function({commit},search){
    commit(types.SET_SEARCH_HISTORY,saveSearch(search))
}

export const deleteSearchHistory=function({commit},search){
    commit(types.SET_SEARCH_HISTORY,deleteSearch(search))
}