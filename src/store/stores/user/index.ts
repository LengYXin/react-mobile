/**
 * 用户
 */
import { observable, computed, autorun } from "mobx";
import noticeCenter from "../../noticeCenter";
import Http from "../../public/http";

export default class ObservableStore {
   /**
    * 构造函数
    * @param noticeCenter 通知中心
    */
    constructor(public noticeCenter: noticeCenter) {

    }
    //当前用户
    @observable User = {};
    // 登录状态
    @observable login = false;
    // 首次加载用户数据中
    @observable Loading = true;

}




