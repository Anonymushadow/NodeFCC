const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
//aca escribimos bien el array
const newItems = _.flattenDeep(items);
console.log(newItems);