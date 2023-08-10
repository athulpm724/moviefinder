function search() {
    title = movieName.value;
    fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=a1bbc6fd&t=${title}`).then(data => data.json()).then(wdata => display(wdata));

    console.log(title);

    function display(data){

    
        // temperature
        release = data.Released;
        genre = data.Genre;
        imdb=data.imdbRating;

        dataResult=`<p>RELEASE DATE : ${release}<br>GENRE : ${genre} <br> IMDB RATING : ${imdb}</p>`;

        result.innerHTML=dataResult;
    }    
}
