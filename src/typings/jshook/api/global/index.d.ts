// 简易调用的全局函数

declare function toast(message: string): void;

declare function alert(message: string): void;

declare function confirm(message: string, callback: { ok?: Function, cancel?: Function }): void;

/**
 * 返回32位小写uuid
 */
declare function uuid(): string;

type TimeoutId = string;

/**
 * 一次性定时任务
 * @param callback 触发函数
 * @param time 时长, 毫秒
 * @return TimeoutId 事件标识
 */
declare function setTimeout(callback: Function, time: number): TimeoutId;

/**
 * 取消一次性定时任务
 * @param id 事件标识
 */
declare function clearTimeout(id: TimeoutId): void;

type IntervalId = string;

/**
 * 周期性定时任务
 * @param callback 触发函数
 * @param time 时长, 毫秒
 * @return IntervalId 事件标识
 */
declare function setInterval(callback: Function, time: number): IntervalId;

/**
 * 取消周期性定时任务
 * @param id 事件标识
 */
declare function clearInterval(id: IntervalId): void;
