import jsonp from 'common/js/jsonp'


export function getNews(tag,as,cp,time){
    const url=' https://m.toutiao.com/list/'
    let data={}
    let flag=tag||''

    if(flag=='__all__'){
        data={
            tag: tag,
            ac: 'wap',
            count: 20,
            format: 'json_raw',
            as: as,
            cp: cp,
            max_behot_time: time,
            _signature: '9MVyMQAAr7Je6jKxQwuYiPTFci',
            i: time
        }
    }else{
        data={
            tag: tag,
            ac: 'wap',
            count: 20,
            format: 'json_raw',
            as: as,
            cp: cp,
            min_behot_time: parseInt(new Date().getTime() / 1000),
            _signature: '64lJ5gAAsO5Bpglmlfa4.euJSf'
        }
    }
    

    return jsonp(url,data)
}