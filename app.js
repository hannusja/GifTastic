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

var chosen=

var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=aiLOQJHknECBEjpbRzQxZNPPt5stTrAl&q="+chosen+"&limit=10&offset=0&rating=G&lang=en"

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);

  $("#gifs").append(response)
})