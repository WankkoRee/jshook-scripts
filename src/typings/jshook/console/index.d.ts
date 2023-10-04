/**
 * 用于输出日志
 */
declare const console: {
    /**
     * 输出日志
     * @param message object 会强转为string
     */
    log: (...message: any) => void,
    /**
     * 输出调试日志
     * @param message object 会强转为string
     */
    debug: (...message: any) => void,
    /**
     * 输出信息日志
     * @param message object 会强转为string
     */
    info: (...message: any) => void,
    /**
     * 输出告警日志
     * @param message object 会强转为string
     */
    warn: (...message: any) => void,
    /**
     * 输出错误日志
     * @param message object 会强转为string
     */
    error: (...message: any) => void,
};
