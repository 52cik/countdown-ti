interface iCtrl {
  /**
   * 终止倒计时方法
   */
  abort(): void;
  /**
   * 设置新的时间方法
   *
   * @param seconds 倒计时秒数
   */
  setTime(seconds: number): void;
}

/**
 * 使用例子:
 *
 * ```js
 * // 2参数 倒计时秒数，结束回调
 * countdown(10, () => {
 *   console.log('done');
 * });
 *
 * // 3参数 倒计时秒数，倒计时回调，结束回调
 * countdown(10, (sec) => {
 *   console.log(sec); // 显示剩余秒数
 * }, () => {
 *   console.log('done');
 * });
 *
 * // 2参数 10位时间戳，结束回调
 * countdown(1513826388, () => {
 *   console.log('done');
 * });
 *
 * // 2参数 13位时间戳，结束回调
 * countdown(1513826388000, () => {
 *   console.log('done');
 * });
 *
 * // 2参数 日期格式字符串，结束回调
 * countdown('2017-11-11 11:11:11', () => {
 *   // 要兼容id6/safari，请将时间改成 '2017/11/11 11:11:11'
 *   console.log('done');
 * });
 * ```
 *
 * @param seconds 倒计时秒数
 * @param onTick 每一秒的回调
 * @param onComplete 倒计时结束时回调
 */
declare function countdown(
  seconds: number | string,
  onTick: (this: iCtrl, seconds: number) => void,
  onComplete: () => void
): iCtrl;

export = countdown;
