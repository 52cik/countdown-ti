/**
 * 什么都不做
 */
function noop() {}

/**
 * 倒计时工具
 *
 * @param {number|string} seconds
 * @param {function} onTick
 * @param {function} onComplete
 */
function countdown(seconds, onTick = noop, onComplete = noop) {
  let expires = 0; // 到期时间戳 (只精确到秒)
  let interval = 0; // setTimeout 句柄
  let isAbort = false; // 是否终止

  // 设置时间
  function setTime(sec) {
    const isTimeStamp = /^(\d{10}|\d{13})$/.test(sec); // 时间戳
    const isString = typeof sec === 'string'; // 时间格式日期字符串
    const now = parseInt(+new Date() / 1000, 10);

    // 时间参数类型处理
    if (isTimeStamp) {
      expires = sec > 1e11 ? parseInt(sec / 1000, 10) : sec;
    } else if (isString) {
      expires = parseInt(+new Date(sec) / 1000, 10);
    } else {
      expires = now + sec; // 到期时间戳 (只精确到秒)
    }

    if (expires <= now) {
      expires -= 1;
    }
  }

  const ctrl = {
    /**
     * 终止倒计时
     */
    abort() {
      isAbort = true;
      clearTimeout(interval);
    },
    /**
     * 设置时间
     */
    setTime,
  };

  // 倒计时
  function tick() {
    const time = parseInt(expires + 1 - new Date() / 1000, 10); // 剩余时间
    onTick.call(ctrl, time);
    if (time <= 0) {
      onComplete.call(ctrl); // 完成
    } else if (!isAbort) {
      interval = setTimeout(tick, 1000);
    }
  }

  setTime(seconds); // 设置时间
  tick(); // 启动

  return ctrl;
}

export default countdown;
