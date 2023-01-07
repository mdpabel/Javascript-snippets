function curry(fn) {
  const length = fn.length;
  return function currify() {
    const context = this;
    const args = Array.prototype.slice.call(arguments);
    if (args.length >= length) {
      return fn.call(context, ...args);
    } else {
      return currify.bind(context, ...args);
    }
  };
}
