
       fetch('people.json')
      .then(function (response) {
          return response.json();
      })
      .then(function (data) {
          loadPage(page,data);
      })
      .catch(function (err) {
          console.log('error: ' + err);
      });
    

  function appendData(data){
    
    const array = data;
        let m = new Array(array.length+1).fill(0);
       //  console.log(m);
        for(let i = 0; i<array.length; ++i){   
        const randomElement = array[Math.floor(Math.random() * array.length)];
            
        if( m[randomElement.id] == 1){
            --i;
        }
        else{
            m[randomElement.id] = 1;
          

        const newDiv = document.createElement('div');
        newDiv.classList.add('block-films');

        const year = document.createElement('p');
        year.innerHTML = randomElement.year;
        year.classList.add('years');
        
        newDiv.appendChild(year);

        let newImg = document.createElement('img');
         let url = randomElement.posterUrl;
        if(ImageExist(url))
            {
                newImg.src = randomElement.posterUrl;
            }
        else{
            newImg.src = "no-image.png";
        }
        
        
        newImg.classList.add("item-img");

        newDiv.appendChild(newImg);

        const newp = document.createElement('p');
        newp.innerHTML = randomElement.title;
        newDiv.appendChild(newp);

        document.getElementById('films').appendChild(newDiv);
        }  }

        const but1 = document.createElement('button');
        but1.classList.add('prev');
        but1.innerHTML='Previous Page';
        document.getElementById('buttons').appendChild(but1);
        const but2 = document.createElement('button');
        but2.classList.add('next');
        but2.innerHTML= 'Next Page';
        document.getElementById('buttons').appendChild(but2);

       
     }
     function ImageExist(url) 
        {
        var img = new Image();
        img.src = url;
        return img.height != 0;
        }
    
      

    function loadPage(page,data)
    {  
        let arr1;
        switch (page){
        case 0: appendData(data);
         case 1 :  arr1 = data.filter(d => d.year > 2013);
                  // console.log(arr1);
                  appendData(arr1);
                 
         break;
         case 2:  arr1 = data.filter(d => d.year <= 2013 && d.year >=2009);
                // console.log(arr1);
                 appendData(arr1);
         break;
         case 3 : 
         break;
        }
        

}




   





