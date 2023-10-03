
const img = document.querySelector('img');
const nextButton = document.querySelector('.next');  
const newButton = document.querySelector('.search-button'); 
const clearButton = document.querySelector('.clear');  

clearButton.addEventListener('click', clearSearch)
nextButton.addEventListener('click', newGiphy)
newButton.addEventListener('click', newGiphy)

function newGiphy(){
    let newGiphySearch = document.getElementById('search-input').value;  
    if (!newGiphySearch) {
        console.error('No search term available');
        return;
    }
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=R6ICvZPl6hIYCu0CHQJyjc2wC01XqkL8&s=' + newGiphySearch, {mode: 'cors'})
.then(function(response) {
return response.json();
})
.then(function(response) {
    img.src = response.data.images.original.url;
})
.catch(function(error){
    console.error('Oops item not found', error)
})
}

function clearSearch(){
    document.getElementById('search-input').value = ''
}
