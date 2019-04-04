//
//  “Write a loop that makes seven calls to console.log to output the following triangle:”
//
//  #
//  ##
//  ###
//  ####
//  #####
//  ######
//  #######

for(var i = 0; i < 7; i++) {
  const hash = Array(i+1).fill("#").join('');
  console.log(hash);
}
