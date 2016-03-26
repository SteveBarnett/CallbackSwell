var fs = require('fs');

// 1. run it directly

fs.readdir('lists', function(err, data){
// ^ hey, fs, read this dir.
// when you're done, run `function(err, data)`
    if (err) {
      console.log('readdir err:', err);
    } else { // no erors, yay!
      // anything you want to do with `data` must happen inside here
      // that's why callback hell happens: you start to nest callbacks
      // (so that you can use the results)
      console.log('readdir data:', data);
    }
});

var dirContents1 =  fs.readdir('lists', function(err, data){
    if (err) {
      console.log('dirContents1 err:', err);
    } else {
      console.log('dirContents1 data:', data);
    }
});

// This will be undefined because it's not inside the callback:
// by the time this `console.log` runs, `dirContents1` isn't set.
console.log('dirContents1: ', dirContents1);

// ---
// 2. run it as a function, with arg

var linesInFilesAsync2 = function(folderName) {
  fs.readdir(folderName, function(err, data){
      if (err) {
        console.log('linesInFilesAsync2 err: ', err);
      } else {
        console.log('linesInFilesAsync2 data: ', data);
        // completion of the readdir `return`s `data`
        // do stuff here, don't `return` it
      }
  });
};

// this is undefined because it tries to do stuff outside of the callback
console.log("linesInFilesAsync2('lists'): ", linesInFilesAsync2('lists'));

// // 3. pull the callback out as a named function
//
// var linesInFilesAsync3 = function(folderName) {
//   fs.readdir(folderName, logTheReaddir);
// };
//
// function logTheReaddir(err, data){
//     if (err) {
//       console.log('linesInFilesAsync3 err: ', err);
//     } else {
//       console.log('linesInFilesAsync3 data: ', data);
//     }
// }
//
// linesInFilesAsync3('lists');

// 4. run something inside it

var linesInFilesAsync4 = function(folderName) {
  fs.readdir(folderName, function(err, data){
      if (err) {
        console.log('linesInFilesAsync4 readdir err: ', err);
      } else {
        console.log('linesInFilesAsync4 readdir data: ', data);
        data.forEach(function(files){
          console.log('linesInFilesAsync4 readdir forEach file: ', files);
          fs.readFile(folderName + '/' + files, 'utf8', function(errRF, dataRF) {
            if (errRF) {
              console.log('linesInFilesAsync4 readFile err: ', errRF);
            } else {
              console.log('linesInFilesAsync4 readFile data: ', dataRF);
              // if you want to do something with the file contents,
              // it has to happen here
            }
          });
        });
      }
  });
};

linesInFilesAsync4('lists');
