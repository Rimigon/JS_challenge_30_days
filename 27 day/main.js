let list = ["📖	Instructor", "🔥Motivator", "📔 Content Creator", "🌱 Educator", "💻 Programmer"]
let techs = ["PYTHON", "JS", "REDUX", "REACT", "NODE", "MONGODB", "PANDAS"]
let colors = ["red", "blue", "green", "purple", "yellow", "pink", "aqua"]
// console.log(Math.floor(Math.random() * 6))
let i = 0
document.querySelector('.container').textContent = list[i]
i++
let timerId = setInterval(() => {
	if(i == list.length){
		i = 0
	}
	document.querySelector('.container').textContent = list[i]
	i++
}, 2000);

let j = 0
document.querySelector('.tech').textContent = techs[j]
document.querySelector('.tech').style.color = colors[j]
j++
let techTimer = setInterval(() => {
	if(j == techs.length){
		j = 0
	}
	document.querySelector('.tech').textContent = techs[j]
	document.querySelector('.tech').style.color = colors[j]
	j++
}, 2000);



// let startOfAny = true 
// let sortCheck = true
// document.querySelector('.start').style.background = "grey"


// for(let i = 0; i < countries.length; i++){
// 	let country = document.createElement('div')
// 	country.className = "countries"
// 	country.textContent = countries[i]
// 	document.querySelector('.container').appendChild(country)
// }

// function startingOnWord(){
// 	startOfAny = true
// 	document.querySelector('.start').style.background = "grey"
// 	document.querySelector('.any').style.background = "palevioletred"
// 	search()

// }

// function anyWord(){
// 	startOfAny = false
// 	document.querySelector('.any').style.background = "grey"
// 	document.querySelector('.start').style.background = "palevioletred"
// 	search()
// }

// function search(countriesArr = countries){
// 	const searchWord = document.querySelector('input').value
// 	document.querySelector('.container').innerHTML = ''
// 	let sum = 0
// 	for(let i = 0; i < countries.length; i++){
// 		if(countries[i].toLowerCase().startsWith(searchWord.toLowerCase()) && startOfAny)
// 		{
// 			let country = document.createElement('div')
// 			country.className = "countries"
// 			country.textContent = countries[i]
// 			document.querySelector('.container').appendChild(country)
// 			sum++
// 		}
// 		else if(countries[i].toLowerCase().includes(searchWord.toLowerCase()) && !startOfAny){
// 			let country = document.createElement('div')
// 			country.className = "countries"
// 			country.textContent = countries[i]
// 			document.querySelector('.container').appendChild(country)
// 			sum++
// 		}
// 	}
// 	if(searchWord.length != 0 && startOfAny){
// 		document.querySelector('.stat').textContent = "Countries starts with " + searchWord + " are " + sum
// 	}
// 	else if(searchWord.length != 0 && !startOfAny){
// 		document.querySelector('.stat').textContent = "Countries containing " + searchWord + " are " + sum
// 	}
// 	else{
// 		document.querySelector('.stat').textContent = ""
// 	}
// }

// function sortCountries(){
// 	if(sortCheck){
// 		search(countries.sort())
// 		sortCheck = false
// 	}
// 	else{
// 		search(countries.sort().reverse())
// 		sortCheck = true
// 	}

// }