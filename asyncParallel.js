const asyncTask = function (i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Completing ${i}`), 100 * i);
  });
};

function asyncParallel(promises, cb) {
  const result = [];
  let tasksCompleted = 0;

  promises.forEach((promise) => {
    promise.then((val) => {
      result.push(val);
      tasksCompleted += 1;
      if (tasksCompleted >= result.length) {
        cb(result);
      }
    });
  });
}

asyncParallel([asyncTask(3), asyncTask(2), asyncTask(2)], cb);

function cb(promises) {
  console.log(promises);
}

console.log('Hello');
