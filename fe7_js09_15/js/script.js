$(function() {

  var $form = $("search_button");
  var results = document.getElementById("output_block");

  $("#search_form").submit(function(event) {
    event.preventDefault();
    $.getJSON("https://pixabay.com/api/?key=3945822-7b538493454565a0f7a210cfe&q=" + $("#search_request").val(),
    function(data){
        console.log("data: ", data);
        console.log("results: ", data.hits);
        for (var variable in data.results) {
          console.log(variable, " title :", data.hits[variable].tags, "url: ", data.hits[variable].previewURL);
        }
        results.innerHTML = tmpl("output_script", data);
        console.log("results: ", results);
    });
  });
});
