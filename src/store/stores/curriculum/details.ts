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
    @observable Loading = true;
    // 教师？学生？
    @observable isTeacher = false;
    // 课程数据
    @observable data = {
        id: 0,
        name: "中学地理教育教学研究问题讲座",
        teacher: "张三",
        list: [
            //    {
            //     title: "",             //标题
            //     cycle: "",             //周期
            //     type: "单周",          //周期类型
            //     classHour: "第1-7节",  //课...
            //     classes: "1班、2班",    //班级
            //     address: "一号楼",      //地址
            //     intr: "与位帅哥同课哦~", //人员信息
            //     number:11               //上课人数
            //    }
        ]
    };
    async  getData() {
        this.Loading = true;
        this.data = await Http.get("/curriculum/details").toPromise();
        this.Loading = false;
    }
}




