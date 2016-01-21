var countBy = function(countTo, multiplyTo) {
  var highestNum = countTo - (countTo % multiplyTo);
  for (var i=0; i < highestNum; i = i + multiplyTo) {
    console.log(i);
  }
  console.log(i);
  return i;
}
