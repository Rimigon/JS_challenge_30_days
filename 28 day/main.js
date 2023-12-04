const leades = [{
	firtName: "Jonh",
	lastName: "Smith",
	country: "USA",
	score: 80,
	delete: false
}]

print()

function deletePlayer(playerName, playerLastName){
	for(let i = 0; i < leades.length; i++){
		if(leades[i].firtName == playerName && leades[i].lastName == playerLastName){
			leades[i].delete = true
		}
	}
	print()
}

function plusFive(playerName, playerLastName){
	for(let i = 0; i < leades.length; i++){
		if(leades[i].firtName == playerName && leades[i].lastName == playerLastName){
			leades[i].score += 5
		}
	}
	print()

}

function minusFive(playerName, playerLastName){
	for(let i = 0; i < leades.length; i++){
		if(leades[i].firtName == playerName && leades[i].lastName == playerLastName){
			leades[i].score -= 5
		}
	}
	print()

}

function addPlayer(){
	let newname = document.querySelector(".name").value
	let newlastName = document.querySelector(".lastName").value
	let newcountry = document.querySelector(".country").value
	let newscore = document.querySelector(".score").value
	leades[leades.length] = {
		firtName: newname,
		lastName: newlastName,
		country: newcountry,
		score: parseInt(newscore),
		delete: false
	}
	print()
}

function print(){
	let container = document.querySelector(".container")
	container.innerHTML = ""
	leades.sort(function(a, b) {
		console.log(a.score, b.score)
		return a.score - b.score
	  }).reverse()
	console.log(leades)
	for(let i = 0; i < leades.length; i++)
	{
		if(leades[i].delete == false)
		{
			container.innerHTML += 
				`<div class="card">
					<div class="info">
						<p>${leades[i].firtName} ${leades[i].lastName}</p>
						<p>${leades[i].country}</p>
						<p>${leades[i].score} </p>	
					</div>
					<div class="control">
						<button onclick="deletePlayer('${leades[i].firtName}', '${leades[i].lastName}')"><i class="fa-regular fa-trash-can"></i></button>
						<button onclick="plusFive('${leades[i].firtName}', '${leades[i].lastName}')">+5</button>
						<button onclick="minusFive('${leades[i].firtName}', '${leades[i].lastName}')">-5</button>
					</div>
				</div>`
		}
	}
}