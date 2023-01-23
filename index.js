
const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const button = document.querySelector("#buttonn");
 
async function newQuote(){
    const Response = await fetch("https://api.quotable.io/random")
    const data = await Response.json();
     console.log(data);
     quote.innerText =  `"${data.content}"`;
     author.innerText = `~${data.author}`;
}
newQuote();