$(document).ready(function() {


    $("#searchButton").click(function(search) {
    
       search.preventDefault();
    
       // Pick up search terms written in form
       var searchTerm = $("#searchTerm").val().trim();
    
       // Pick up number of results selected by user
    //    nResults = $("#records").val();
    
       // Pick up start/end year
       startYear = $("#startYear").val().trim();
    
       endYear = $("#endYear").val().trim();
    
       url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        
       var apiKey = "e7948dec1c844cbb8fa93edcd9d9e65b";
       url += '?' + $.param({
       'api-key': "e7948dec1c844cbb8fa93edcd9d9e65b",
       'q': searchTerm,
       'begin_date' : startYear + "0101",
       'end_date' : endYear + "0101"

    });
    $.ajax({
        url: url,
        method: 'GET',
    }).done(function(result) {
        console.log(result);
     $('#output').html(JSON.stringify(result));
     //  prints object onto page
 //    }).ffunction(err) {
 //        throw err;
    });
       });
       
    
    //    // Test to see if values are working
    //     $("#output").html(searchTerm);
    //     $("#output").html(nResults);
    //     $("#output").html(endYear);
    //    console.log(url);
    
    
    });
    
    