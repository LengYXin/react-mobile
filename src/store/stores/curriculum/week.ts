/**
 * 课程
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
    @observable LoadingTabs = true;
    @observable LoadingData = true;
    @observable tabsShow = false;
    @observable tabs = [
    ]
    @observable data = {};
    async getData() {
        this.Loading = true;
        await this.getTabs();
        this.Loading = false;
        this.getWeek(this.tabs[0].id);
    }
    async getTabs() {
        this.LoadingTabs = true;
        this.tabs = await Http.get("/curriculum/week").toPromise();
        this.LoadingTabs = false;
    }
    async getWeek(id) {
        this.LoadingData = true;
        this.data = await Http.get("/curriculum/week/" + id).toPromise();
        this.tabsShow = false;
        this.LoadingData = false;
    }
    setTabsShow() {
        this.tabsShow = !this.tabsShow;
    }

}




