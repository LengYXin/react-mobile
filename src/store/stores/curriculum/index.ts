/**
 * 课程 对象池
 */
import { observable, computed, autorun } from "mobx";
import noticeCenter from "../../noticeCenter";
import day from "./day"
import details from "./details"
import week from "./week"
import statistics from "./statistics"


export default class ObservableStore {
    /**
     * 构造函数
     * @param noticeCenter 通知中心
     */
    constructor(public noticeCenter: noticeCenter) {

    }
    // 日
    day = new day(this);
    // 详情
    details = new details(this);
    // 周
    week = new week(this);
    // 统计
    statistics=new statistics(this);

}




