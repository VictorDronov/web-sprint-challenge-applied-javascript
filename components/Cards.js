// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: 
// https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//    <div class="img-container">
//      <img src={url of authors image} />
//      </div>
//    <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, 
// the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, 
// and append each card to the DOM.

let appendPoint = document.querySelector('.cards-container')

function iMakeCards (articleData){

    let card = document.createElement('div')
    let cardHeadline = document.createElement('div')
    let cardAuthor = document.createElement('div')
    let cardImgHolder = document.createElement('div')
    let img = document.createElement('img')
    let authorsName = document.createElement('span')

    card.appendChild(cardHeadline)
    card.appendChild(cardAuthor)
    cardAuthor.appendChild(cardImgHolder)
    cardImgHolder.appendChild(img)
    cardAuthor.appendChild(authorsName)

    card.classList.add('card')
    cardHeadline.classList.add('headline')
    cardAuthor.classList.add('author')
    cardImgHolder.classList.add('img-container')

    cardHeadline.textContent = articleData.headline
    img.src = articleData.authorPhoto
    authorsName.textContent = `By ${articleData.authorName}`

    card.addEventListener('click', ()=>{
        console.log(articleData.headline)
    })
    return card
}

axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(theData =>{
    let allArticles = theData.data.articles
    Object.values(allArticles).forEach(article =>{
        article.forEach(eachArticle =>{
            const newArticle = iMakeCards(eachArticle)
        appendPoint.appendChild(newArticle)
        })
        })
    })
.catch(error=> {
    console.log(error)
    // debugger
});
