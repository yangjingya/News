export default class News{
    constructor({id,title,content,imgs,tags,dateTime,media,comment,label_style,label}){
        this.id=id
        this.title=title
        this.content=content
        this.imgs=imgs
        this.tags=tags
        this.dateTime=dateTime
        this.media=media
        this.comment=comment
        this.label_style=label_style
        this.label=label
    }
}

export function createNews(item){
    return new News({
        id:item.tag_id,
        title:item.title,
        content:item.abstract,
        imgs:item.image_list,
        tags:item.keywords,
        dateTime:item.datetime,
        media:item.media_name,
        comment:item.comment_count,
        label_style:item.label_style,
        label:item.label
    })
}