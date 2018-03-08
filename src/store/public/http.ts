import Rx from "rxjs";
import Toast from 'antd-mobile/lib/toast';
class Http {
    constructor() {
        // if (window.location.port == "3002") {
        //     this.address = "/api/"
        // }
    }
    // address = "/"
    address = "https://www.easy-mock.com/mock/5a7181af8d311b0183c28630/ClassSchedule"
    post(url: string, body?: any, headers?: Object) {
        return Rx.Observable.ajax.post(`${this.address}${url}`,
            { ...body },
            {
                credentials: 'include',
                ...headers
            }).catch(err => Rx.Observable.of(err)).map(this.map);
    }
    get(url: string, headers?: Object) {
        return Rx.Observable.ajax.get(`${this.address}${url}`,
            {
                credentials: 'include',
                ...headers
            }).catch(err => Rx.Observable.of(err)).map(this.map);
    }
    map(x) {
        if (x.status == 200) {
            if (x.response.code == 200) {
                return x.response.data;
            }
            console.log(x.response);
            Toast.offline(x.response.message, 5);
            throw x.response.message;
        }
        console.log(x);
        Toast.offline(x.message, 5);
        throw x;
    }
}
export default new Http();