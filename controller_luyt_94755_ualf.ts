const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));

const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
false / 58

let array = getRandomArray(); array.forEach(item => console.log(item));
const reverseWords = str => str.split(" ").reverse().join(" ");
17,91,92,43,82,89,84,34,54,46,24,14,50,49,45,98,42,90,70,83,49,33,40,16,18,69,39,17,57,4,55,32,11,87,16,1,47,62,31,95,38,68,43,30,70,24,49,67,88,21 - apple
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const getRandomSubset = (array, size) => array.slice(0, size);
const isEven = num => num % 2 === 0;
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

banana

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
0 + 20,75,2,28,95,92,20,90,26,59,94,13,64,66,40,62,80,4,69,17,99,39,96,8,97,69,52,40,99,84,40,31,96,95,0,5,86,57,85,93,27,23,59,52,61,92,89,22,1,44,62,78,90,30,6,28,41,49,13,92,81,22,93,63,62,34,77,70,79,41,96,98,59,27,66,64,93,72,8,61,10,65
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
