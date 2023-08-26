const generateMemeBtn = document.querySelector(".memegenerator .generate-meme-btn");
const memeImage =document.querySelector(".memegenerator img");
const memeTitle =document.querySelector(".memegenerator .meme-title");
const memeAuthor =document.querySelector(".memegenerator .meme-author");

const updateDetails = (url,title,author) =>{
    memeImage.setAttribute("src",url)
    memeTitle.innerHTML=title;
    memeAuthor.innerHTML=`Meme By:${author}`;
}


const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes").then((response)=> response.json()).then(data=>{
        updateDetails(data.url,data.title,data.author)
    });
}

generateMemeBtn.addEventListener("click", generateMeme);

generateMeme();