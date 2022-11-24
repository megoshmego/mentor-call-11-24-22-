
// **THIS WAS MY ORIGINAL SOLUTION**
$("#ul").append($("#title").val(), $("#rating").val(), '<button class="remove">Remove</button>');
// are my issues declaring a variable in an appropriate manner? 
$("#remove").on("click", function(evt) {  
$("#ul").remove("li");
}) 
 

// **ANOTHER FAILED SOLUTION 
let title = $("#title").val();
let rating = $("#rating").val();
$("#ul").append(title, rating, '<button class="remove">Remove</button>');
$("#remove").on("click", function(evt) {
$("#ul").remove("li");
})



