const colors = ["#a8c3ed", "#301538", "#ff004c", "#27362e", "#0b46e6", "#7a541d", "#46a822"]
const backColors = ["#37453b", "#5e8c87", "#3c2354", "#73b842", "#6666d4", "linear-gradient(#e66465, #9198e5)"]

function animateWord(){
	let container = document.querySelector(".container")
	let contant = container.textContent
	container.innerText = ""
	for(let i = 0; i < contant.length; i++){
		console.log(contant[i])
		let div = document.createElement("div")
		div.style.color = colors[Math.floor(Math.random() * colors.length)]
		div.className = "elem"
		div.textContent = contant[i]
		document.querySelector('.container').appendChild(div)
	}
	document.querySelector('.container').style.background = backColors[Math.floor(Math.random() * backColors.length)]
	document.querySelector('.container').style.fontSize = `${Math.floor(Math.random()  * (160 - 100) + 100)}px`
}

animateWord()
setInterval(animateWord, 4000)