var fs = require('fs');

var list = 'list.txt';
var listerr = 'listerr.txt';
// var listForDir = 'list.txt';
var listDir = 'lists';

// sync

// var productsListSync = fs.readFileSync(list, 'utf8');
// console.log('productsListSync:');
// console.log(productsListSync);
// console.log('---');
//
// // async, return it
//
// var productListReturn = fs.readFile(list, 'utf-8', function(err, data) {
//   // console.log(data);
//   return data;
// });
//
// console.log('productListReturn:');
// console.log(productListReturn);
// console.log('---');

// async, callback it

// var productListCallback = fs.readFile(list, 'utf-8', function(err, data) {
//   console.log('productListCallback:');
//   console.log(data);
//   console.log('---');
// });
//
// async, catch errs and callback it

// var productListCallbackAndCatchErrors = fs.readFile(list, 'utf-8', function(err, data) {
//   console.log('productListCallbackAndCatchErrors:');
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
//   console.log('---');
// });
//
// async, catch errs and callback it, with an error

// var productListCallbackAndCatchErrorsWithError = fs.readFile(listerr, 'utf-8', function(err, data) {
//   console.log('productListCallbackAndCatchErrorsWithError:');
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
//   console.log('---');
// });
//
// async, catch errors, named callback

// var productListNamedCallbackAndCatchErrors = fs.readFile(list, 'utf-8', function callback(err, data) {
//   console.log('productListNamedCallbackAndCatchErrors:');
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
//   console.log('---');
// });

// async, catch errors, named external callback
//
// var productListNamedExternalCallback = fs.readFile(list, 'utf-8', qwerty);
//
// function qwerty(err, data) {
//   console.log('productListNamedExternalCallback:');
//   console.log(data);
//   console.log('---');
// }

// var productListTwoCallBacks = fs.readdir(listDir, function(err, dirData) {
//   // console.log("readdir result:");
//   // console.log(dirData);
//   // console.log('---');
//
//   dirData.forEach(function(file) {
//     // console.log("readdir file:");
//     // console.log(file);
//     // console.log('---');
//
//     var currentFile = fs.readFile(listDir + '/' + file, 'utf8', function(err, fileData) {
//       // console.log("fileData inside:" + file);
//       // console.log(fileData);
//       // console.log('---');
//     });
//
//   //   console.log("currentFile outside the callback:");
//   //   console.log(currentFile);
//   //   console.log('---');
//   });
//
// });

// var productListTwoCallBacksReturn = fs.readdir(listDir, function(err, dirData) {
//
//   // dirData.forEach(function(file) {
//     var currentFile = fs.readFile('lists/list1.txt', 'utf8', function(err, fileData) {
//       return fileData;
//     });
//
//
//
//   // });
//
// });

var fs = require('fs');

//
//
// function addOne(callback) {
//   fs.readFile('numbers.txt', 'utf8', function doneReading(err, fileContents) {
//     callback(fileContents);
//   })
// }
//
// function logMyNumber(chips) {
//   console.log(chips);
// }
//
// addOne(logMyNumber);

// ---

function linesInFilesAsync(callback) {
  fs.readFile('lists/list1.txt', 'utf8', function(err, data){
    if (err) {
      console.log(err);
    } else {
      callback(data);
    }
  });
}

function cbRadio(filestuff) {
  console.log(filestuff);
}

linesInFilesAsync(cbRadio);


// function linesInFilesAsync(folderName, callback) {
//   var fish = fs.readFile(folderName, 'utf8', function(err, data){
//     // if (err) {
//     //   console.log(err);
//     // } else {
//       // callback(data);
//       // console.log(data);
//       return(data);
//     // }
//   });
// }
//
// // function cbRadio(filestuff) {
// //   console.log(filestuff);
// // }
//
// // linesInFilesAsync(cbRadio);
//
// linesInFilesAsync('lists/list1.txt', function(err, data){
//   console.log(fish);
// });
