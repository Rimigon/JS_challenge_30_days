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
