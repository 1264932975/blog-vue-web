import {form, get, post} from '../util/Request.js'

export default {
    getClassify: query => get(`/api/article/open/getClassify`, query),
    getProject: query => get(`/api/article/open/getProject`, query),
    indexPage: query => post(`/api/article/open/indexPage`, query),
    shoWebSetting: query => get(`/api/webSetting/show`, query),
    showBlog: query => get(`/api/article/open/show`, query),
    indexProjectPage: query => post(`/api/article/open/indexProjectPage`, query),

}