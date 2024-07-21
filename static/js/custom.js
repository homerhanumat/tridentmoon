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
        var sourceElement = document.querySelector("#quote-source");
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

/************************************************
* accordian
************************************************/

const accordionItemLabels = document.querySelectorAll(".accordion-item-label");
accordionItemLabels.forEach(label => {
    label.addEventListener("click", function() {
        const item = this.closest(".accordion-item");
        const content = item.querySelector(".accordion-content");
        const classes = this.classList;
        let isOpen = false;
        for (const c of classes) {
            if (c === "item-open") {
                isOpen = true;
            }
        }
        if (isOpen) {
            this.classList.remove("item-open");
            this.classList.remove("blue");
            content.style.display = "none";
            return null;
        }
        // get previous siblings
        let siblings = [];
        let prev = item.previousElementSibling;
        while (prev) {
            siblings.push(prev);
            prev = prev.previousElementSibling;
        }
        // Get next siblings
        let next = item.nextElementSibling;
        while (next) {
            siblings.push(next);
            next = next.nextElementSibling;
        }
        siblings.forEach(function(sibling) {
            const childLabel = sibling.querySelector(".accordion-item-label");
            childLabel.classList.remove("blue");
            childLabel.classList.remove("item-open");
            const childContent = sibling.querySelector(".accordion-content");
            childContent.style.display = "none";
        })
        this.className += "blue item-open";
        content.style.display = "block";
        this.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

