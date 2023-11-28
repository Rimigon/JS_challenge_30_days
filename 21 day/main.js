// Exercise: Level 1

// Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name

let firtsP = document.querySelector('p')

// Get each of the the paragraph using document.querySelector('#id') and by their id

let secondP = document.querySelector('#second-p')
let thirdP = document.querySelector('#third-p')
let fourthP = document.querySelector('#fourth-p')

// Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name

const allP = document.querySelectorAll('p')

// Loop through the nodeList and get the text content of each paragraph

allP.forEach(elem => console.log(elem.textContent))

// Set a text content to paragraph the fourth paragraph,Fourth Paragraph

allP[3].textContent = "Fourth Paragraph"

// Set id and class attribute for all the paragraphs using different attribute setting methods

allP.forEach(elem => {
  elem.setAttribute('class', 'paragraphs')
  console.log(elem)
})

// Exercise: Level 2

// Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)

allP.forEach((elem, i) => {
  elem.style.fontSize = '24px' // all titles will have 24px font size
  if (i % 2 === 0) {
    elem.style.color = 'green'
  } else {
    elem.style.color = 'red'
  }
})

allP.forEach((elem, i) => {
  if (i % 2 === 0) {
    elem.style.backgroundColor = 'red'
  } else {
    elem.style.backgroundColor = 'green'
  }
})

// Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
