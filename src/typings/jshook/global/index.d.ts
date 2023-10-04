// 简易调用的全局函数

declare function toast(message: rhino_string): void;

declare function alert(message: rhino_string): void;

declare function confirm(message: rhino_string, callback: { ok?: Function, cancel?: Function }): void;

/**
 * 返回32位小写uuid
 */
declare function uuid(): java_lang_String;

type TimeoutId = number;

/**
 * 一次性定时任务
 * @param callback 触发函数
 * @param time 时长, 毫秒
 * @returns TimeoutId 事件标识
 */
declare function setTimeout(callback: Function, time: number): TimeoutId;

/**
 * 取消一次性定时任务
 * @param id 事件标识
 */
declare function clearTimeout(id: TimeoutId): void;

type IntervalId = number;

/**
 * 周期性定时任务
 * @param callback 触发函数
 * @param time 时长, 毫秒
 * @returns IntervalId 事件标识
 */
declare function setInterval(callback: Function, time: number): IntervalId;

/**
 * 取消周期性定时任务
 * @param id 事件标识
 */
declare function clearInterval(id: IntervalId): void;
