/***********************************************************
 *
 * Random Quotes
 *
 ***********************************************************/

 function randomQuotes() {

    // utility
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
  
    var url = "/data/quotes.json";
  
    // define the callback:
    function callback(response, error) {
        if (response !== null) {
            processData(response);
        } else {
            console.log(error);
        }
    }
  
    // handling the response text
    function processData(json) {
        var quotes = JSON.parse(json);
        var randomIndex = getRandomInt(0, quotes.length);
        var quote = quotes[randomIndex].quote;
        var author = quotes[randomIndex].author;
        var quoteElement = document.querySelector("#quotation");
        quoteElement.innerHTML = quote;
        var sourceElement = document.querySelector("#quote-source")
        console.log(sourceElement);
        sourceElement.innerHTML = "&mdash; " + author;
    }
  
    //set it up
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    // timeout after 30 seconds:
    req.timeout = 30000;
    req.ontimeout = function () {
        console.log("Request timed out.");
    };
  
    // handle response to request:
    req.addEventListener("load", function () {
        if (req.status < 400) {
            callback(req.responseText);
        } else {
            callback(null, new Error(req.status + ":  " + req.statusText));
        }
    });
  
    // if we never get off the ground:
    req.addEventListener("error", function () {
        callback(null, new Error("Network error"));
    });
  
    // Now send it:
    req.send();
  }
  
  window.addEventListener('load', randomQuotes);

  let stuff = "hello";


