const url = require('url');

const myUrl = new URL('https://mywebsite.com:8000/hello.html?id=100&status=active');

console.log(myUrl.toString());
console.log(myUrl.href);

console.log(myUrl.host);
console.log(myUrl.hostname);

console.log(myUrl.search);
console.log(myUrl.searchParams);

myUrl.searchParams.append('abc', '123');

myUrl.searchParams.forEach((value, name) => {
    console.log(`The search key is ${name} and value is ${value}`);
});