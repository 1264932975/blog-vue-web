import {form, get, post} from '../util/Request.js'

export default {
    getClassify: query => get(`/api/article/open/getClassify`, query),
    indexPage: query => post(`/api/article/open/indexPage`, query),
    shoWebSetting: query => get(`/api/webSetting/show`, query),
}