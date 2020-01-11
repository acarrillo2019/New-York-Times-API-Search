/*

query url
two onclick events
    -search
        -ajax call
            - for loop
            - link between var & html IDs
    -reset
        - .val?


*/

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=6HGjEBtdUgM4BboKpQU4W3rByLFoyQC5";



$("#searchBtn").on("click", function(event) {
    event.preventDefault();
    var searchTerm = $("#searchTerm").val();
    console.log(searchTerm);
    $( "#searchBtn" ).submit();

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        

        console.log(response);


        //for (var i = 0; i < results.length; i++) {

    
     

  });

});


