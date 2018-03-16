declare module "*.svg" {
    const value: any;
    export default value;
}
// declare var require;
declare enum EnumNotice {
    /**
     * 退出登录
     */ 
    LoginOut = 0,
    /**登录成功 */
    LoginSuccess = 1,
    /**音乐播放 */
    MusicPlay = 2,
    /**MV 播放*/
    MVPlay = 3,
}
declare interface NoticeObserver {
    type: EnumNotice;
    data?: any;
}