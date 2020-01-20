/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

  

//variable to hold output to the screen
var message = '';


//Array of objects to hold quote, source, citation, and year
var quotes = [
    {
        quote:  'Failure is a feeling long before it becomes an actual result.',
        source: 'Michelle Obama',
        citation: 'Becoming',
        year: 2018,
        tags: "Politics"
    },
    {
        quote:  'People Say Nothing Is Impossible, But I Do Nothing Every Day',
        source: 'A.A Milne',
        citation: "Winne-the-Pooh",
        year: "",
        tags: "Humor"
    },
    {
        quote:  'The only way to know is to live, learn, and grow.',
        source: 'Lauryn Hill',
        citation: "",
        year: "Music"
    },
    {
        quote:  'Without music, life would be a mistake.',
        source: 'Friedrich Nietzsche',
        citation: 'Twilight of the Idols',
        year: 1889,
        tags: "Philosophy"
    },
    {
        quote:  "I'm the one that's got to die when it's time for me to die, so let me live my life the way I want to.",
        source: 'Jimi Hendrix',
        citation: 'Jimi Hendrix - Axis: Bold as Love',
        year: 1989,
        tags: "Music"
    },
]


//Function to target the div with the id 'quote-box'
function print(){
    var outputDiv = document.getElementById('quote-box');
    outputDiv.innerHTML = message;
}


/***
 * `getRandomQuote` function to generate a random object from quote array and hold it in randomQuote variable
***/
function getRandomQuote (){
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    return randomQuote;
}


//added setInterval method to print a new quote every 25 seconds
document.getElementById('load-quote').addEventListener("click", ()=>{
setInterval(printQuote, 25000);
});


/***
 * `printQuote` function to print randomly selected object and print it to the screen
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
        if (quotes.tags){
            message += '<h3>' + quotes.tags + '</h3>';
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