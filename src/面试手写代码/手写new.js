export function myNew(fn, ...arg) {
  const obj = Object.create(fn.prototype);
  let result = fn.apply(obj, arg);
  return typeof result === 'object' ? result : obj;
}
