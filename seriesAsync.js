const asyncTask = function (i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Completing ${i}`), 100 * i);
  });
};

async function seieseAsync(promises, cb) {
  const result = [];

  for (const promise of promises) {
    try {
      const res = await promise;
      result.push(res);
    } catch (err) {
      console.error(err);
    }
  }

  cb(result);
}

seieseAsync([asyncTask(1), asyncTask(2), asyncTask(3)], cb);

function cb(promises) {
  console.log(promises);
}

console.log('test');
