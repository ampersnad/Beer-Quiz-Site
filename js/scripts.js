

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
	
  
	
    if (result <= 9) {
      $("#resultBeer").text("You're a refreshing Pilsner!");
	  $("img#pilsner").show();
    } else if (result <= 15) {

      $("#resultBeer").text("You're a bold IPA!");
	  $("img#ipa").show();
    } else if (result <= 25) {

      $("#resultBeer").text("You're a formidable Imperial Stout!");
	  $("img#stout").show();
    }
	
  $("#reset").click(function() {
	  document.location.reload(true);
  });
	


  });
  
});
