
var keyword = "";
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + keyword + "&api_key=1UDXeUjPXD7dVqzhJqMItp1MDQrx5uth&limit=10";
var topics = ['v for vendetta', 'ice fails', 'snowboarding', 'cats', 'puppies', 'bobs burgers', 'disenchantment'];

//function that displays the gif buttons
function displayGifButtons() {
    for (var i = 0; i < topics.length; i++) {
        var gifButton = $("<button>").addClass("subjects", "btn btn-primary").attr("data-name", topics[i]).text(topics[i]);
        $("#gifButtonsView").append(gifButton);
    }
}
displayGifButtons();

//function to add new button
function addNewButton() {
    $("#addGif").on("click", function () {
        var subject = $("#topicInput").val().trim();
        if (subject == "") {
            return false;//no blank buttons
        }
        topic.push(subject);
        displayGifButtons();
        return false;
    });
}
addNewButton();

//function to remove last button
function removeLastButton() {
    $("removeGif").on("click", function () {
        topic.pop(subject);
        displayGifButtons();
        return false;
    });
}
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    var results = response.data;
    //show results
    console.log(response);

    if (results == "") {
        alert("There is not a giffy for this!");
    }

for (var i = 0; i < results.length; i++) {
    //put gifs in a div
    var gifDiv = $("<div1>");
    //pull rating of gif
    var gifRating = $("<p>").text("Rating " + results[i].rating);
    gifDiv.append(gifRating);
    //pull gif
    var gifImage = $("<img>");
    gifImage.attr("src", results[i].images.fixed_height_small_still.url);
    //paused images
    gifImage.attr("data-still", results[i].images.fixed_height_small_still.url);
    //animated images
    gifImage.attr("data-animate", results[i].images.fixed_height_small.url);
    //how images come in, already paused
    gifImage.attr("data-state", "still").addClass("image");
    gifDiv.append(gifImage);
    //add new div to existing divs
    $("#gifsView").prepend(gifDiv);
}
});



//list of already created gifs

//event listeners