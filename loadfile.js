fetch('people.json')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    loadItem(data);
})
.catch(function (err) {
    console.log('error: ' + err);
});

function loadItem(data){
   
    const newH = document.createElement('h2');
    newH.innerHTML = data[6].title;
   
    const year = document.createElement('p');
    year.innerHTML = data[6].year;
    newH.appendChild(year);
    document.getElementById('tit').appendChild(newH);

    
    const gener = document.createElement('p');
    gener.innerHTML ='Genres: ' + data[6].genres;
    document.getElementById('texts').appendChild(gener);

    const director = document.createElement('p');
    director.innerHTML = 'Director: '+ data[6].director;
    document.getElementById('texts').appendChild(director);
    const actors = document.createElement('p');
    actors.innerHTML ='Actors: ' + data[6].actors;
    document.getElementById('texts').appendChild(actors);


    const des = document.createElement('p');
    des.innerHTML ='Description: '+ data[6].plot;
    document.getElementById('texts').appendChild(des);

    let newImg = document.createElement('img');
     let url = data[6].posterUrl;
    if(ImageExist(url))
        {
            newImg.src = data[6].posterUrl;
        }
    else{
        newImg.src = "no-image.png";
    }
    
    document.getElementById('imgs').appendChild(newImg);
    }  

    function ImageExist(url) 
    {
    var img = new Image();
    img.src = url;
    return img.height != 0;
    }