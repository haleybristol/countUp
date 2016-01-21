var countBy = function(countTo, multiplyTo) {
  var highestNum = countTo - (countTo % multiplyTo);
  for (var i=0; i < highestNum; i = i + multiplyTo) {
    console.log(i);
  }
  console.log(i);
  var output = i;
  return output;
}

$(document).ready(function() {
  $("form").submit(function(event){
    var countTo = parseInt($("input#countTo").val());
    var multiplyTo = parseInt($("input#multiplyTo").val());
    var result = countBy(countTo, multiplyTo);
    console.log("Test", result);
    // $(".pig-latin").text(word);
    $("#numbers").append(result);
    $("#result").show();
    event.preventDefault();
  });
});
