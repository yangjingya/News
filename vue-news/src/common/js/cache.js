import storage from 'good-storage'

const FAVOURITE_KEY="__favourite__"
const FAVOURITE_LENGTH=200

const HISTORYNEWS_KEY="__historynews__"
const HISTORYNEWS_LENGTH=200

function insertArray(arr,val,compare,maxLen){
    const index=arr.findIndex(compare)
    if(index===0){
        return
    }
    if(index>0){
        arr.splice(index,1)
    }
    arr.unshift(val)
    if(maxLen&&arr.length>maxLen){
        arr.pop()
    }
}

function deleteArray(arr,compare){
    const index = arr.findIndex(compare)
    if (index > -1) {
        arr.splice(index, 1)
    }
}

export function saveFavourite(news){
    let oldNews=storage.get(FAVOURITE_KEY,[])
    insertArray(oldNews,news,(item)=>{
        return item.id===news.id
    },FAVOURITE_LENGTH)
    storage.set(FAVOURITE_KEY,oldNews)
    return oldNews
}

export function deleteFavourite(news){
    let oldNews=storage.get(FAVOURITE_KEY,[])
    deleteArray(oldNews,(item)=>{
        return item.id===news.id
    })
    storage.set(FAVOURITE_KEY,oldNews)
    return oldNews
}

export function loadFavourite(){
    return storage.get(FAVOURITE_KEY,[])
}

export function saveHistoryNewsIn(news){
    let oldNews=storage.get(HISTORYNEWS_KEY,[])
    insertArray(oldNews,news,(item)=>{
        return item.id===news.id
    },HISTORYNEWS_LENGTH)
    storage.set(HISTORYNEWS_KEY,oldNews)
    return oldNews
}

export function loadHistoryNews(){
    return storage.get(HISTORYNEWS_KEY,[])
}


