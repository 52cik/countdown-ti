# countdown-ti

> Countdown based on relative timestamps
> 基于时间戳的倒计时插件

  [![Linux Build][travis-image]][travis-url]
  [![Coverage Status][coveralls-image]][coveralls-url]
  [![Dependencies][dependencies-image]][dependencies-url]
  [![node][node-image]][node-url]
  [![license MIT][license-image]][license-url]

## 使用

> 通过 npm 安装

```sh
$ yarn add countdown-ti
# 或者
$ npm i -S countdown-ti
```

```js
import countdown from 'countdown-ti';
// const countdown = require('countdown-ti');

countdown(3, (sec) => {
  console.log('tick', sec);
}, () => {
  console.log('complete');
});
```

或者直接在 html 中引入。

```html
<script src="dist/countdown.js"></script>
<script>
countdown(3, function (sec) {
  console.log('tick', sec);
}, function () {
  console.log('complete');
});
</script>
```

### API

#### countdown(seconds, onTick?, onComplete)

##### seconds

Type: `number` `string`

倒计时时间：
* 可以是剩余秒数，如 3
* 可以是结束时间戳，如 1513844655238 或 1513844655 (支持13位和10位时间戳)
* 可以是日期格式的字符串，如 '2017-12-21 16:24:54' 或 'Thu, 21 Dec 2017 08:25:15 GMT'

##### onTick

Type: `callback`

倒计时回调，参数可以得到当前剩余秒数。

##### onComplete

Type: `callback`

倒计时完成回调，没有参数。


[travis-url]: https://travis-ci.org/52cik/countdown-ti
[travis-image]: https://img.shields.io/travis/52cik/countdown-ti/master.svg?label=linux

[coveralls-url]: https://coveralls.io/github/52cik/countdown-ti?branch=master
[coveralls-image]: https://coveralls.io/repos/52cik/countdown-ti/badge.svg?branch=master&service=github

[license-url]: https://opensource.org/licenses/MIT
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg

[dependencies-url]: https://david-dm.org/52cik/countdown-ti
[dependencies-image]: https://img.shields.io/david/52cik/countdown-ti.svg?style=flat

[node-url]: https://nodejs.org
[node-image]: https://img.shields.io/badge/node-%3E%3D%204-brightgreen.svg
