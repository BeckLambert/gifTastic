
var keyword = '';
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + keyword + "&api_key=1UDXeUjPXD7dVqzhJqMItp1MDQrx5uth&limit=10";
var topics = ['v for vendetta', 'ice fails', 'snowboarding', 'cats', 'puppies', 'bobs burgers', 'disenchantment'];

//function that displays the gif buttons
function displayGifButtons() {
    for (var i = 0; i < topics.length; i++) {
        var gifButton = $("<button>").addClass("subjects","btn btn-primary").attr("data-name", topics[i]).text(topics[i]);
        $("#gifButtonsView").append(gifButton);
    }
}
displayGifButtons();
//function to add new button

//function to remove last button

// function that displays the gifs
//show results

//put gifs in a div

//pull rating of gif

//pull gif

//paused images

//animated images

//how images come in, already paused

//add new div to existing divs

//list of already created gifs

//event listeners