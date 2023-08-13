function all(arr, callback){
  for (var i = 0; i < arr.length; i++) {
      if (!callback(arr[i])) {
          return false;
      }
  }
return true;
}

var test1 = all([1, 2, 7], function(num) {
  return num < 7;
});
var test2 = all([1, 2, 6], function(num) {
  return num < 7;
});

console.log(test1);
console.log(test2);