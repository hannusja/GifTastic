var topics = ["mermaid", "unicorn", "fairy", "fawn", "troll", "dragon"]

function renderButtons() {
    $("#buttons").empty()
    for (var i = 0; i < topics.length; i++) {
        var a = $("<button>")
        a.addClass("fav")
        a.attr("data-name", topics[i])
        a.text(topics[i])
        $("#buttons").append(a)
    }
}

$("#add-fav").on("click", function(event) {
    event.preventDefault()
    var fav = $("#fav-input").val().trim()
    topics.push(fav)
    renderButtons()
})

renderButtons()

function displayGif() {
    var chosen = $(this).attr("data-name")
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=aiLOQJHknECBEjpbRzQxZNPPt5stTrAl&q="+chosen+"&limit=10&offset=0&lang=en"

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var results = response.data
    for (var i = 0; i < results.length; i++) {
      var gifDiv = $("<div>")
      var rating = results[i].rating
      var p = $("<p>").text("Rating: " + rating)
      var gifurl = results[i].images.original_still.url
      var gifurlAnim = results[i].images.fixed_height.url
      var gifpic= $("<img>")
      gifpic.attr("src", gifurl)
      gifpic.attr("alt", "mythical creature image")
      gifpic.attr("class", "mygif")
      gifpic.attr("data-state", "still")
      gifpic.attr("data-still", gifurl)
      gifpic.attr("data-animate", gifurlAnim)
      $("#gifs").append(gifDiv)
      gifDiv.append(p);
      gifDiv.append(gifpic)
    }
  })
}

$(document).on("click", ".fav", displayGif)

$(document).on("click", ".mygif", function() {
  var state = $(this).attr("data-state")
  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"))
    $(this).attr("data-state", "animate")
  } else {
    $(this).attr("src", $(this).attr("data-still"))
    $(this).attr("data-state", "still")
  }
})