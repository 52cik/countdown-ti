import test from 'ava';
import countdown from '..';

test.cb('base tick', (t) => {
  t.plan(4);
  let i = 3;
  countdown(3, (sec) => {
    t.true(i === sec);
    i -= 1;
  }, () => t.end());
});

test('base complete', (t) => {
  t.plan(1);
  return new Promise((resolve) => {
    countdown(1, () => resolve());
  }).then(() => t.pass());
});

test('base noop', (t) => {
  t.plan(1);
  return new Promise((resolve) => {
    countdown(1);
    resolve();
  }).then(() => t.pass());
});

test.cb('abort', (t) => {
  t.plan(2);

  const cb = countdown(3, (sec) => {
    t.true(sec === 3);
  }, () => {});
  cb.abort();

  countdown(3, function (sec) {
    this.abort();
    t.true(sec === 3);
  }, () => {});

  setTimeout(() => t.end(), 1000);
});

test.cb('setTime', (t) => {
  t.plan(6);

  const cb = countdown(10, () => t.pass(), () => {});
  cb.setTime(2);

  countdown(10, function (sec) {
    if (sec === 10) {
      this.setTime(2);
    }
    t.pass();
  }, () => {});

  setTimeout(() => t.end(), 3000);
});

test.cb('time stamp (13)', (t) => {
  t.plan(4);
  let i = 3;
  const timeStamp = Date.now() + 3000;
  countdown(timeStamp, (sec) => {
    t.true(i === sec);
    i -= 1;
  }, () => t.end());
});

test.cb('time stamp (10)', (t) => {
  t.plan(4);
  let i = 3;
  const timeStamp = parseInt(Date.now() / 1000, 10) + 3;
  countdown(timeStamp, (sec) => {
    t.true(i === sec);
    i -= 1;
  }, () => t.end());
});

test.cb('time dataString', (t) => {
  t.plan(4);
  let i = 3;
  const dataString = new Date(Date.now() + 3000).toGMTString();
  countdown(dataString, (sec) => {
    t.true(i === sec);
    i -= 1;
  }, () => t.end());
});

test.cb('expiration', (t) => {
  t.plan(3);
  countdown(Date.now() - 1000, () => t.pass());
  countdown(0, () => t.pass());
  countdown(-1, () => t.pass());
  t.end();
});
