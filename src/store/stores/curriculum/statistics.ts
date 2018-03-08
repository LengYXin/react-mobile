/**
 * 课程 统计
 */
import { observable, computed, autorun } from "mobx";
import Http from "../../public/http";
import ObjectPool from "./index";
export default class ObservableStore {
    /**
     * 构造
     * @param ObjectPool 对象池
     */
    constructor(public ObjectPool: ObjectPool) {

    }
    @observable Loading = true;
    @observable showStatistics = true;
    // 数据
    @observable data = {
        id: 0,
        name: "",
        semester: "", //学期
        courses_num: 0,//课程数
        class_num: 0,  //课数
        read_num: 0,   //已读
        surplus_num: 0,//剩余
        tag: [],       //标签
        list: [
            // {
            //     id: 0,
            //     name: "",
            //     read_num: 0,   //已读
            //     surplus_num: 0,//剩余
            // }
        ]
    };
    async  getData() {
        this.Loading = true;
        this.data = await Http.get("/curriculum/statistics").toPromise();
        this.Loading = false;
    }
    switch(show) {
        if (typeof show == "undefined") {
           return this.showStatistics = !this.showStatistics;
        }
        return this.showStatistics = show;
    }
}




