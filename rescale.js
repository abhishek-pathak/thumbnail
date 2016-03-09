
var input = process.argv[2];
var output = process.argv[3];
console.log(input+' - '+output);
require('lwip').open(input, function(err, image){

  // check err...
  // define a batch of manipulations and save to disk as JPEG:
  image.batch()
    .scale(0.50)          // scale to 75%
    .writeFile(output, function(err){
      // check err...
      // done.
    });

});
