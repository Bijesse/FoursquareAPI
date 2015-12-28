$( document ).ready(function() {
    
    var client_id="ZQS3S2ZWFOC4ZW1HQT41U2RXKRHEMEXOIPW4OZMIYFMLITZP";
    var client_secret="IQJ30SJKZL12BHBRYI0IHQU5FAPX4BEGZHRGH40VMLFHX4GL";
    
   
    
    $( "#submit" ).click(function() {
            $.get("https://api.foursquare.com/v2/venues/search" +
        "?client_id=" + client_id +
        "&client_secret=" + client_secret +
        "&v=20151209" +
        "&near=" + $("#address").val() +
        "&query=pizza",
        function(data) {
            //console.log(data);
         var answer = data["response"]["venues"][0]["name"] + data["response"]["venues"][0]["contact"]["phone"];
            $('#results').append(answer);
        });
    });

});


