var fs = require('fs');

var list = './list.txt'
var listerr = './listerr.txt'

// sync

var productsListSync = fs.readFileSync(list, 'utf-8');
console.log('productsListSync:');
console.log(productsListSync);
console.log('---');

// async, return it

var productListReturn = fs.readFile(list, 'utf-8', function(err, data) {
  return(data);
});

console.log('productListReturn:');
console.log(productListReturn);
console.log('---');

// async, callback it

var productListCallback = fs.readFile(list, 'utf-8', function(err, data) {
  console.log('productListCallback:');
  console.log(data);
  console.log('---');
});

// async, catch errs and callback it

var productListCallbackAndCatchErrors = fs.readFile(list, 'utf-8', function(err, data) {
  console.log('productListCallbackAndCatchErrors:');
  if(err) {
    console.log(err);
  } else {
    console.log(data);
  }
  console.log('---');
});

// async, catch errs and callback it, with an error

var productListCallbackAndCatchErrorsWithError = fs.readFile(listerr, 'utf-8', function(err, data) {
  console.log('productListCallbackAndCatchErrorsWithError:');
  if(err) {
    console.log(err);
  } else {
    console.log(data);
  }
  console.log('---');
});
