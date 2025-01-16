let imageCard = document.querySelector("#nft-image");

imageCard.addEventListener("mouseenter", ()=>{
  imageCard.classList.add('active');  
})

imageCard.addEventListener("mouseleave",()=>{
    imageCard.classList.remove('active');
})


let nftName = document.querySelector("#nft-name");

nftName.addEventListener("mouseenter", ()=>{
    nftName.classList.add('name-active')
})


nftName.addEventListener("mouseleave", ()=>{
    nftName.classList.remove('name-active')
})


let authorName = document.querySelector("#author-name");

authorName.addEventListener("mouseenter",()=>{
    authorName.classList.add("author-active")
})


authorName.addEventListener("mouseleave",()=>{
    authorName.classList.remove("author-active")
})