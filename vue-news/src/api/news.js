import jsonp from 'common/js/jsonp'


export function getNews(tag,as,cp){
    const url=' https://m.toutiao.com/list/'
    let data={}
    let flag=tag||''

    data={
        tag: tag,
        ac: 'wap',
        count: 20,
        format: 'json_raw',
        as: as,
        cp: cp,
        min_behot_time: parseInt(new Date().getTime() / 1000),
        _signature: '9MVyMQAAr7Je6jKxQwuYiPTFci'
    }
    

    return jsonp(url,data)
}