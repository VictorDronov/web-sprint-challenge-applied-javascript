// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container
let appendPoint = document.querySelector('.header-container')

function Header() {

    let header = document.createElement('div')
    let headerSpan = document.createElement('span')
    let title = document.createElement('h1')
    let heatSpan = document.createElement('span')

    header.classList.add('header')
    headerSpan.classList.add('date')
    heatSpan.classList.add('temp')

    header.appendChild(headerSpan)
    header.appendChild(title)
    header.appendChild(heatSpan)

    headerSpan.textContent = 'MARCH 28, 2020'
    title.textContent = 'Lambda Times'
    heatSpan.textContent = '98°'

    return header
}

appendPoint.appendChild(Header())