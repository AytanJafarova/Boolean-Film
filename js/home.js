const api_key="api_key=ed941a776913419663aae71e9bcc1c15";
const main_url="https://api.themoviedb.org/3";
const getAll_url=main_url+"/discover/movie?sort_by=popularity.desc&"+api_key;
const getAll_url2=main_url+"/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc&"+api_key;
const getAll_url3=main_url+"/discover/movie?with_genres=18&primary_release_year=2014&"+api_key;
const search_url=main_url+"/search/movie?"+api_key;

class GetAll
{
    get(url)
    {
        return new Promise( function(resolve,reject)
        {
            fetch(url)
            .then(response=>response.json())
            .then(resp=>resolve(resp))
            .catch(error=>reject(new Error(error)))
        })
    }
}
const getAll=new GetAll();




getAll.get(getAll_url)
.then(data=>
    {
    data.results.forEach(function (element)
    {
        document.querySelector('#mainFilm').innerHTML+=
        `
        <div class="film">
        <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt="">
        <div class="film-info">
            <h3>${element.title}</h3>
            <span class="${rateColor(element.vote_average)}">&#11088;${element.vote_average}</span>
        </div>
        <div class="overview">
        ${element.overview}
        </div>
        </div>
        `
    }); 
})
.catch(err=>console.log(err))




getAll.get(getAll_url2)
.then(data=>
    {
    data.results.forEach(function (element)
    {
        document.querySelector('#mainFilm').innerHTML+=
        `
        <div class="film">
        <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt="">
        <div class="film-info">
            <h3>${element.title}</h3>
            <span class="${rateColor(element.vote_average)}">&#11088;${element.vote_average}</span>
        </div>
        <div class="overview">
        ${element.overview}
        </div>
        </div>
        `
    }); 
})
.catch(err=>console.log(err))





getAll.get(getAll_url3)
.then(data=>
    {
    data.results.forEach(function (element)
    {
        document.querySelector('#mainFilm').innerHTML+=
        `
        <div class="film">
        <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt="">
        <div class="film-info">
            <h3>${element.title}</h3>
            <span class="${rateColor(element.vote_average)}">&#11088;${element.vote_average}</span>
        </div>
        <div class="overview">
        ${element.overview}
        </div>
        </div>
        `
    }); 
})
.catch(err=>console.log(err))



const form=document.getElementById('searchMovies');
const search=document.getElementById('searchNamefilm');

form.addEventListener('submit', (e)=>
{
    e.preventDefault();
    const textSearch=search.value;
    console.log(textSearch)
    if (textSearch) 
    {
        document.querySelector('#mainFilm').innerHTML=""
        getAll.get(search_url+"&query="+textSearch)
        .then(data=>
            {
            data.results.forEach(function (element)
            {
                document.querySelector('#mainFilm').innerHTML+=
                `
                <div class="film">
                <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt="">
                <div class="film-info">
                    <h3>${element.title}</h3>
                    <span class="${rateColor(element.vote_average)}">&#11088;${element.vote_average}</span>
                </div>
                <div class="overview">
                ${element.overview}
                </div>
                </div>
                `
            }); 
        })
        .catch(err=>console.log(err))
        search.value="";

    }
    else
    {
        window.location.reload();
    }
})


function rateColor(elem)
{
    if (elem<=4)
    {
        {
            return('red')
        }
    }
    else if(elem<=6)
    {
        return('orange')
    }
    else if (elem<=9)
    {
        return('green')
    }
}




var index = 1;
Show(index);

function nextSlide(n) 
{
    Show(index += n);
}
function Show(n) 
{
  var slides = document.getElementsByClassName("slides");
  if (n > slides.length) 
  {
      index = 1
  }    
  if (n < 1) 
  {
      index = slides.length
  }
  for (i = 0; i < slides.length; i++) 
  {
      slides[i].style.display = "none";  
  }
  slides[index-1].style.display = "block";

}


function showMore() 
{
    document.getElementById('listHidden').style.zIndex=2;
}
