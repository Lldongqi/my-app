export class Event {
  events: Record<string, Array<Function>>;
  constructor() {
    this.events = {};
  }

  on(eventName: string, callBack: () => void) {
    const callBacks: any = this.events[eventName] || [];
    callBacks.push(callBack);
    this.events[eventName] = callBacks;
  }

  emit(eventName: string, ...arg: any[]) {
    const callBacks = this.events[eventName] || [];
    callBacks.forEach((cb) => cb(arg));
  }

  off(eventName: string, callBack: () => void) {
    const callBacks = this.events[eventName] || [];
    const newCallBack = callBacks.filter((fn) => fn !== callBack);
    this.events[eventName] = newCallBack;
  }
}

export const debounce = (fn: any, delay: number) => {
  return function (args: any) {
    let _arg = args;
    clearTimeout(fn.id);
    fn.id = setTimeout(() => {
      fn(_arg);
    }, delay);
  };
};

export const throttle = (fn: any, delay: number) => {
  let timer: any;
  return function (args: any) {
    if (!timer) {
      timer = setTimeout(() => {
        fn(args);
        timer = null;
      }, delay);
    }
  };
};
