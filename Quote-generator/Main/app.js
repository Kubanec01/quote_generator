
// Quotes array
const quotes = [
    {text:"The greatest glory in living lies not in never falling, but in rising every time we fall. ", 
    author:"Nelson Mandela"},
    {text:"The way to get started is to quit talking and begin doing.", 
    author:"Walt Disney"},
    {text:"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.", 
    author:"Martin Luther King Jr."},
    {text:"The future belongs to those who believe in the beauty of their dreams. ", 
    author:"Eleanor Roosevelt"},
    {text:"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. ", 
    author:"James Cameron"},
    {text:"Do one thing every day that scares you.", 
    author:"Eleanor Roosevelt"},
    {text:"Well done is better than well said.",
    author:"Benjamin Franklin"},
    {text:"Be yourself; everyone else is already taken.", 
    author:"Oscar Wilde"},
    {text:"The only thing we have to fear is fear itself.", 
    author:"Franklin Roosevelt"}
];

// Random quote generator function
function generateQuotes() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    const quoteTextElement = document.querySelector(".text-container");
    quoteTextElement.innerHTML = `"${randomQuote.text}"<br>-${randomQuote.author}`;
}