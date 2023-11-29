const url = new URL(
  'https://js-ovkpqq.stackblitz.io/?search=hello%20world&page=2'
);

let searchParams = url.searchParams;
let search = searchParams.get('search');
let page = searchParams.get('page');

searchParams.set('search', 'Updated');
searchParams.append('test', 'test');

let test = searchParams.get('test');

console.log(search, page, test);
