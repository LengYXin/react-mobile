
import NoticeCenter from "./noticeCenter";
import User from "./stores/user";
import Curriculum from "./stores/curriculum";

class store {
    constructor() {

        this.ready();
        this.init();
    }
    // 通知中心
    NoticeCenter = new NoticeCenter(this);
    // user
    User = new User(this.NoticeCenter);
    // 课程
    Curriculum = new Curriculum(this.NoticeCenter);
    /**
     * 定义全局 变量 枚举 ===
     */
    ready() {
        console.log("-----------ready Store------------", this);
    }
    init() {

    }
};
export default new store();