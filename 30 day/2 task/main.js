function validate(){
	let phoneNumber = document.getElementById('telephone').value
	let email = document.getElementById('email').value
	let password = document.getElementById('password').value
	let name = document.getElementById('first-name').value
	let secondName = document.getElementById('second-name').value
	let bio = document.getElementById('bio').value
	let nameRGEX = /^[А-ЯЁ][а-яё]{3,19}$/
	let phoneRGEX = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/
	let emailRGEX =  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
	let passwordRGEX = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g
	let phoneResult = phoneRGEX.test(phoneNumber)
	let emailResult = emailRGEX.test(email)
	let passwordResult = passwordRGEX.test(password)
	let nameResult = nameRGEX.test(name)
	let secondResult = nameRGEX.test(secondName)
	if(phoneResult, emailResult, passwordResult, nameResult, secondResult){
		alert("!!!!!!!!!!!!")
	}
	else{
		alert("??????????????????")
	}
}