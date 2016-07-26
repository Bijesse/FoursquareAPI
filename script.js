$( document ).ready(function() {
    
    var client_id="ZQS3S2ZWFOC4ZW1HQT41U2RXKRHEMEXOIPW4OZMIYFMLITZP";
    var client_secret="IQJ30SJKZL12BHBRYI0IHQU5FAPX4BEGZHRGH40VMLFHX4GL";
    
   
    
    $( "#submit" ).click(function() {
            $.get("https://api.foursquare.com/v2/venues/search" +
        "?client_id=" + client_id +
        "&client_secret=" + client_secret +
        "&v=20151209" +
        "&near=" + $("#address").val() +
        "&query=" + $("#food").val(),
        function(data) {
            //console.log(data);
            for(var i=0;i<10;i++){
         var answer = "Name of the resturant is : " + data["response"]["venues"][i]["name"] + ",  Phone number is " + data["response"]["venues"][i]["contact"]["formattedPhone"]+"Address is: "+data["response"]["venues"][i]["location"]["formattedAddress"][0]+" "+data["response"]["venues"][i]["location"]["formattedAddress"][1]+" "+data["response"]["venues"][i]["location"]["formattedAddress"][2];
            $('#results').append("<li>" + answer + "</li>");
            }
        });
    
        $("#clear").click(function (evaluate){
        $("#results").empty();
        
        
    });
    });
    

});


