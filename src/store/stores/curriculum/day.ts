/**
 * 课程
 */
import { observable, computed, autorun } from "mobx";
import Http from "../../public/http";
import Help from "../../public/help";

import ObjectPool from "./index";
export default class ObservableStore {
    /**
     * 构造
     * @param ObjectPool 对象池
     */
    constructor(public ObjectPool: ObjectPool) {

    }
    tabs = [
        { title: "周一" },
        { title: "周二" },
        { title: "周三" },
        { title: "周四" },
        { title: "周五" },
        { title: "周六" },
        { title: "周日" },
    ]
    @observable Loading = true;
    @observable data = [
        // { title: "", time: "", list: [
        // {title:"",name:"",address:"",teacher:[]}
        // ] }
        null, null, null, null, null, null, null
    ];
    async getData() {
        this.Loading = true;
        this.data = await Http.get("/curriculum/day").toPromise();
        this.Loading = false;
    }


}




