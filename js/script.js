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

const quotes = [
  {
      quote: 'Constantly take inventory of what’s important to you.',
      author: 'Dave Chappelle' ,
     
  },
  {
      quote: 'Be yourself; everyone else is already taken.',
      author: 'Oscar Wilde' ,
     
  },
  {
      quote: 'Why so serious?',
      author: 'Joker' ,
      citation: 'The Dark Knight',
      year: '2008'
  },
  {
      quote: 'To infinity and beyond!',
      author: 'Buzz Lightyear' ,
      citation: 'Toy Story',
      year: '1995'
  },
  {
      quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
      author: 'James Cameron' ,
   
  },
  {
      quote: 'Never let the fear of striking out keep you from playing the game.',
      author: 'Babe Ruth' ,
     
  },
  {
    quote: 'All labor that uplifts humanity has dignity and importance and should be undertaken with painstaking excellence.',
    author: 'Martin Luther King Jr.' ,
   
},

];

/***
 * `getRandomQuote` function
***/ 
/**
 * Returns a random quote from the quotes array.
 *
 */
function getRandomQuote () {
  let randomNum = Math.floor(Math.random() * quotes.length);
  return quotes[randomNum];

}


/***
 * `printQuote` function
***/
/**
 * print random quote to the webpage.
 *  
 */
function printQuote() {

  let randomQuote = getRandomQuote(quotes);
  let html = `<p class="quote">${randomQuote.quote}</p>
  <p class="source">${randomQuote.author}`;
  
  if (randomQuote.citation) {
    html += `<span class="citation">${randomQuote.citation}</span>`;
  }
  if (randomQuote.year) {
    html += `<span class="year">${randomQuote.year}</span>`;
  }
  html += `</p>`;
  document.getElementById('quote-box').innerHTML = html;
          
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);