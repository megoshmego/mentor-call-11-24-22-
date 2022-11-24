
let currentId = 0;


let moviesList = [];

$(function() {

  $("#new-movie-form").on("submit", function(evt) {
    evt.preventDefault();
    let title = $("#title").val();
    let rating = $("#rating").val();

    let movieData = { title, rating, currentId };
    const HTMLtoAppend = createMovieDataHTML(movieData);

    currentId++
    moviesList.push(movieData);

    $("#movie-table-body").append(HTMLtoAppend);
    $("#new-movie-form").trigger("reset");  // where is this value reset coming from? are they declaring a variable
  });                                       // or is this a known method?

  

  $("tbody").on("click", ".btn.btn-danger", function(evt) {  
    let indexToRemoveAt = moviesList.findIndex(movie => movie.currentId === +$(evt.target).data("deleteId"))   
    
    moviesList.splice(indexToRemoveAt, 1)
    
    $(evt.target)
      .closest("tr")
      .remove();
    
  }); 
    
    
    $("#movie-table-body").empty();  


function createMovieDataHTML(data) {
  return `
    <tr>
      <td>${data.title}</td>  
      <td>${data.rating}</td>
      <td>
        <button class="btn btn-danger" data-delete-id=${data.currentId}>
          Delete
        </button>
      </td>
    <tr>
  `;
}

// at the above function, why do we have to declare data.title? can we not use title and rating from the below 
// function used earlier in the script because both variables have only block scope? 
// $("#new-movie-form").on("submit", function(evt) {
//  evt.preventDefault();
//  let title = $("#title").val();
//  let rating = $("#rating").val();

//  let movieData = { title, rating, currentId };
//  const HTMLtoAppend = createMovieDataHTML(movieData);

//  currentId++
//  moviesList.push(movieData);

//  $("#movie-table-body").append(HTMLtoAppend);
//  $("#new-movie-form").trigger("reset");  // where is this value reset coming from? are they declaring a variable
// });                                       // or is this a known method?
