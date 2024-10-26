const api_url = "https://api.quotable.io/random";

const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

async function getQuote(){
    let response = await fetch('https://api.quotable.io/random');
    let data = await response.json();
    console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = `~ ${data.author}`;
}

getQuote(api_url);

function shareQuote(){
    window.open("whatsapp://send?text=" + quote.innerHTML + "---- by " + author.innerHTML, "Whatsapp", "width=600, height=300");
}

let speakBtn = document.querySelector(".speakBtn");

speakBtn.addEventListener("click", () =>{
    let sound = new SpeechSynthesisUtterance(`${quote.innerHTML} by ${author.innerHTML}`)
    speechSynthesis.speak(sound);
})


let copyBtn = document.querySelector(".copyBtn");

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(`${quote.innerHTML} by ${author.innerHTML}`);
})
