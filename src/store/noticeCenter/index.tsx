import Rx from "rxjs";

// 通知中心
export default class Observer {
    constructor(private store) {
        // 订阅通知
        this.subject.subscribe({
            next: this.subscribe.bind(this),
            error: e => {
                console.error("NoticeObserver Error", e);
            }
        });
    }
    subject = new Rx.Subject<NoticeObserver>();
    subscribe(x: NoticeObserver) {
        switch (x.type) {
            // 退出登录
            case EnumNotice.LoginOut:
                break;
            default:
                break;
        }
    }
}