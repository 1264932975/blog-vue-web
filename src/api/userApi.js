import {form, get, post} from '../util/Request.js'

export default {
    showUserList: query => get(`/api/article/open/showUserList`, query),
}