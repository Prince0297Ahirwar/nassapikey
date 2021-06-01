

function displayImage(data){
     //we can add html tag using jquery and then append to another container
    //  $('<img>',{
    //      src:data.url,
    //      height:'100%',
    //      width:'100%'
    //  }).appendTo('#image-container');

    var img = $(document.createElement('img'));
    img.attr('src',data.url);
    img.appendTo('#image-container');
}


$.ajax(
    {
        url:'https://api.nasa.gov/planetary/apod',
        method:'GET',
        success:displayImage,
        data:{
            api_key:'HTdy91oO6D6EzEIb3yozi3AoIAXVbjtd8EVbzML8',
            date:'2018-07-04'
        }
    }
);

