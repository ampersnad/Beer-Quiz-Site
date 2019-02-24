

var add = function(color, dessert, activity, glass, smell) {
  return color + dessert + activity + glass + smell;
};



$(document).ready(function() {
  console.log("Hello!")
  $("form#favoriteColor").submit(function(event) {
    event.preventDefault();
    var color = parseInt($("input:radio[name=color]:checked").val());
    console.log(color)
    var dessert = parseInt($("input:radio[name=dessert]:checked").val());
    var activity = parseInt($("input:radio[name=activity]:checked").val());
    var glass = parseInt($("input:radio[name=glass]:checked").val());
    var smell = parseInt($("input:radio[name=smell]:checked").val());
    var result = add(color, dessert, activity, glass, smell);
    console.log(result)
    if (result <= 8) {
      $("#resultBeer").text("You're sippin' on a Pilsner!");
    } else if (result <= 15) {

      $("#resultBeer").text("You're sippin' on an IPA!");
    } else if (result <= 25) {

      $("#resultBeer").text("You're sippin' on an Imperial Stout!");
    }

  });
  // $("form#calculator").submit(function() {
  //   event.preventDefault();
  //   var number1 = parseInt($("#input1").val());
  //   var number2 = parseInt($("#input2").val());
  //   var operator = $("input:radio[name=operator]:checked").val();
  //   var result;
  //   if (operator === "add") {
  //     result = add(number1, number2);
  //   } else if (operator === "subtract") {
  //     result = subtract(number1, number2);
  //   } else if (operator === "multiply") {
  //     result = multiply(number1, number2);
  //   } else if (operator === "divide") {
  //     result = divide(number1, number2);
  //   }
  // });
  //
});
