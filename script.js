/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

  

/*** 
 * `quotes` array 
***/
var message = '';

var quotes = [
    {
        quote:  'Failure is a feeling long before it becomes an actual result.',
        source: 'Michelle Obama',
        citation: 'Becoming',
        year: 2018
    },
    {
        quote:  'Teaching is the highest form of understanding',
        source: 'Aristotle',
        citation: "",
        year: ""
    },
    {
        quote:  'The only way to know is to live, learn, and grow.',
        source: 'Lauryn Hill',
        citation: "",
        year: ""
    },
    {
        quote:  'Without music, life would be a mistake.',
        source: 'Friedrich Nietzsche',
        citation: 'Twilight of the Idols',
        year: 1889
    },
    {
        quote:  "I'm the one that's got to die when it's time for me to die, so let me live my life the way I want to.",
        source: 'Jimi Hendrix',
        citation: 'Jimi Hendrix - Axis: Bold as Love',
        year: 1989
    },
]

function print(){
    var outputDiv = document.getElementById('quote-box');
    outputDiv.innerHTML = message;
}

/***
 * `getRandomQuote` function
***/
function getRandomQuote (){
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    return randomQuote;
}

//console.log(getRandomQuote(quotes));
/***
 * `printQuote` function
***/
function printQuote(){
    var quotes = getRandomQuote();
    message = '<p class="quote">' + quotes.quote + '</p>'
    message += '<p class="source">' + quotes.source;
        if (quotes.citation){
             message += '<span class="citation">' + quotes.citation + '</span>';
        } else {
             message += '';
        }
        if (quotes.year){
            message += '<span class="year">' + quotes.year + '</span>';
        } else {
            message += '';
        }
            message += '</p>';
                 
        print(message);
               
}




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);