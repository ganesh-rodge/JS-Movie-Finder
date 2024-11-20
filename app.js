const fetchInfo = async (url) =>{
    const info = await fetch(url);

    const formatInfo = await info.json();
    return formatInfo;
}

const createElement = (info) => {
    const item = 
    `
            <div class="movie-block">
                <div class="movie-name">${info.Title}</div>
                <img src="${info.Poster}" alt="" class="poster">
                <div class="movie-info">
                    <div class="star-block">
                        <span class="imdb">IMDB:</span>
                        <img src="resources/star.png" alt="" class="star-img">
                        <span class="rating">${info.imdbRating}/10</span>
                    </div>
                    <div class="other-info">
                        
                        <div class="movie-details">
                            <p><span class="key">Language:</span><span class="value">${info.Language}</span></p>

                            <p><span class="key">Actors:</span><span class="value">${info.Actors}</span></p>

                            <p><span class="key">Directors:</span><span class="value">${info.Director}</span></p>

                            <p><span class="key">Writer:</span><span class="value">${info.Writer}</span></p>

                            <p><span class="key">Released:</span><span class="value">${info.Released}</span></p>

                            <p><span class="key">Awards:</span><span class="value">${info.Awards}</span></p>

                            <p><span class="key">Genre:</span><span class="value">${info.Genre}</span></p>

                            <p><span class="key">Boxoffice:</span><span class="value">${info.BoxOffice}</span></p>
                            
                            <p><span class="key">Runtime:</span><span class="value">${info.Runtime}</span></p>
                        </div>
                        
                    </div>
                </div>
            </div>`

        return item;
}

let item 
document.querySelector("#add-btn").addEventListener('click', async (evt)=>{
    evt.preventDefault();

    const input = document.querySelector("#input-box").value.trim().replace(/ /g,"+");
    
    if(input!==''){
        const url = `https://www.omdbapi.com/?t=${input}&apikey=ce4349db`

    const formatInfo = await fetchInfo(url);

    if(formatInfo.Response==='True'){
        item = createElement(formatInfo);

    document.querySelector(".movie-main").innerHTML = item;

    document.querySelector('#input-box').value = ''
    }
    else{
        document.querySelector(".movie-main").innerHTML = 'Invalid Name! Please Try again.'
    }
    }
});


