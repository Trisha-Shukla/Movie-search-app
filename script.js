let movieName="pyar";
async function movieSearch(movie){
    let apiUrl=`https://www.omdbapi.com/?s=${movie}&apikey=4d51c03a`;
    let response=await fetch(apiUrl);
    let data= await response.json();
    console.log(data);
    console.log(data.Search);
    console.log(count++);
    document.querySelector(".Movies").innerHTML="";
    data.Search.forEach(element => {
        document.querySelector(".Movies").innerHTML+=`<div class="movie-div">
            <img src="${element.Poster}" alt="">
            <h3>${element.Title}</h3>
            <h5>${element.Year}</h5>

        </div>`
    
    });
    // console.log(data.Poster);
    
}
let count=0;
let debounceSearchResult= debounceSearch(movieSearch,2000);
document.querySelector("#search-input").addEventListener("keyup",(e)=>{
    movieName=e.target.value;
    e.preventDefault();
    debounceSearchResult(movieName);
})
document.querySelector("#btn").addEventListener("click",(e)=>{
    e.preventDefault();
    // console.log("hi");
    
})
function debounceSearch(movieSearch,delay) {
    let timerId;
    return function(...args){
        clearTimeout(timerId);
        timerId=setTimeout(()=>{
            movieSearch.apply(this,args) 
        },delay)
    }
}

movieSearch(movieName);
