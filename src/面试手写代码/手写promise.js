const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECT = 'reject';

export class MyPromise {
  constructor(handle) {
    this.status = PENDING;
    this.value = null;
    this.reason = null;
    this.onRejectCallBacks = [];
    this.onResolveCallBacks = [];
    if (!this.isFunction(handle)) {
      throw new Error('请传入一个函数');
    }
    handle(this.resolve(), this.reject());
  }

  resolve(value) {
    if (this.status === PENDING) {
      this.value = value;
      this.status = FULFILLED;
      this.onResolveCallBacks.forEach((fn) => {
        fn(this.value);
      });
    }
  }

  reject(reason) {
    if (this.status === PENDING) {
      this.status = REJECT;
      this.value = reason;
      this.onRejectCallBacks.forEach((fn) => {
        fn(this.value);
      });
    }
  }

  then(onResolved, onReject) {
    if (this.isFunction(onResolved)) {
      if (this.status === FULFILLED) {
        onResolved(this.value);
      }
    }

    if (this.isFunction(onReject)) {
      if (this.status === REJECT) {
        onReject(this.value);
      }
    }
    if (this.status === PENDING) {
      if (this.isFunction(onResolved)) {
        this.onResolveCallBacks.push(onResolved);
      }
    }
    if (this.status === PENDING) {
      if (this.isFunction(onReject)) {
        this.onRejectCallBacks.push(onReject);
      }
    }
  }

  isFunction(fn) {
    return typeof fn === 'function';
  }
}

function all(list) {
  return new Promise((resolve, reject) => {
    let arr = [];
    let count = 0;
    for (let i = 0; i < list.length; i++) {
      let p = list[i];
      // eslint-disable-next-line no-loop-func
      p.then((data) => {
        arr[i] = data;
        count++;
        if (count === list.length) {
          resolve(arr);
        }
      }).catch((err) => {
        reject(err);
      });
    }
  });
}

function race(list) {
  return new Promise((resolve, reject) => {
    for (let p of list) {
      p.then((value) => {
        resolve(value);
      }).catch((err) => {
        reject(err);
      });
    }
  });
}
