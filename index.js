

function displayImage(data){
     //we can add html tag using jquery and then append to another container
     $('<img>',{
         src:data.url,
         height:'100%',
         width:'100%'
     }).appendTo('#image-container');
}


$.ajax(
    {
        url:'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2018-07-14',
        method:'GET',
        success:displayImage
    }
);

