const countries = [
	'Afghanistan',
	'Albania',
	'Algeria',
	'Andorra',
	'Angola',
	'Antigua and Barbuda',
	'Argentina',
	'Armenia',
	'Australia',
	'Austria',
	'Azerbaijan',
	'Bahamas',
	'Bahrain',
	'Bangladesh',
	'Barbados',
	'Belarus',
	'Belgium',
	'Belize',
	'Benin',
	'Bhutan',
	'Bolivia',
	'Bosnia and Herzegovina',
	'Botswana',
	'Brazil',
	'Brunei',
	'Bulgaria',
	'Burkina Faso',
	'Burundi',
	'Cambodia',
	'Cameroon',
	'Canada',
	'Cape Verde',
	'Central African Republic',
	'Chad',
	'Chile',
	'China',
	'Colombi',
	'Comoros',
	'Congo (Brazzaville)',
	'Congo',
	'Costa Rica',
	"Cote d'Ivoire",
	'Croatia',
	'Cuba',
	'Cyprus',
	'Czech Republic',
	'Denmark',
	'Djibouti',
	'Dominica',
	'Dominican Republic',
	'East Timor (Timor Timur)',
	'Ecuador',
	'Egypt',
	'El Salvador',
	'Equatorial Guinea',
	'Eritrea',
	'Estonia',
	'Ethiopia',
	'Fiji',
	'Finland',
	'France',
	'Gabon',
	'Gambia, The',
	'Georgia',
	'Germany',
	'Ghana',
	'Greece',
	'Grenada',
	'Guatemala',
	'Guinea',
	'Guinea-Bissau',
	'Guyana',
	'Haiti',
	'Honduras',
	'Hungary',
	'Iceland',
	'India',
	'Indonesia',
	'Iran',
	'Iraq',
	'Ireland',
	'Israel',
	'Italy',
	'Jamaica',
	'Japan',
	'Jordan',
	'Kazakhstan',
	'Kenya',
	'Kiribati',
	'Korea, North',
	'Korea, South',
	'Kuwait',
	'Kyrgyzstan',
	'Laos',
	'Latvia',
	'Lebanon',
	'Lesotho',
	'Liberia',
	'Libya',
	'Liechtenstein',
	'Lithuania',
	'Luxembourg',
	'Macedonia',
	'Madagascar',
	'Malawi',
	'Malaysia',
	'Maldives',
	'Mali',
	'Malta',
	'Marshall Islands',
	'Mauritania',
	'Mauritius',
	'Mexico',
	'Micronesia',
	'Moldova',
	'Monaco',
	'Mongolia',
	'Morocco',
	'Mozambique',
	'Myanmar',
	'Namibia',
	'Nauru',
	'Nepal',
	'Netherlands',
	'New Zealand',
	'Nicaragua',
	'Niger',
	'Nigeria',
	'Norway',
	'Oman',
	'Pakistan',
	'Palau',
	'Panama',
	'Papua New Guinea',
	'Paraguay',
	'Peru',
	'Philippines',
	'Poland',
	'Portugal',
	'Qatar',
	'Romania',
	'Russia',
	'Rwanda',
	'Saint Kitts and Nevis',
	'Saint Lucia',
	'Saint Vincent',
	'Samoa',
	'San Marino',
	'Sao Tome and Principe',
	'Saudi Arabia',
	'Senegal',
	'Serbia and Montenegro',
	'Seychelles',
	'Sierra Leone',
	'Singapore',
	'Slovakia',
	'Slovenia',
	'Solomon Islands',
	'Somalia',
	'South Africa',
	'Spain',
	'Sri Lanka',
	'Sudan',
	'Suriname',
	'Swaziland',
	'Sweden',
	'Switzerland',
	'Syria',
	'Taiwan',
	'Tajikistan',
	'Tanzania',
	'Thailand',
	'Togo',
	'Tonga',
	'Trinidad and Tobago',
	'Tunisia',
	'Turkey',
	'Turkmenistan',
	'Tuvalu',
	'Uganda',
	'Ukraine',
	'United Arab Emirates',
	'United Kingdom',
	'United States',
	'Uruguay',
	'Uzbekistan',
	'Vanuatu',
	'Vatican City',
	'Venezuela',
	'Vietnam',
	'Yemen',
	'Zambia',
	'Zimbabwe'
]

let startOfAny = true 
let sortCheck = true
document.querySelector('.start').style.background = "grey"


for(let i = 0; i < countries.length; i++){
	let country = document.createElement('div')
	country.className = "countries"
	country.textContent = countries[i]
	document.querySelector('.container').appendChild(country)
}

function startingOnWord(){
	startOfAny = true
	document.querySelector('.start').style.background = "grey"
	document.querySelector('.any').style.background = "palevioletred"
	search()

}

function anyWord(){
	startOfAny = false
	document.querySelector('.any').style.background = "grey"
	document.querySelector('.start').style.background = "palevioletred"
	search()
}

function search(countriesArr = countries){
	const searchWord = document.querySelector('input').value
	document.querySelector('.container').innerHTML = ''
	let sum = 0
	for(let i = 0; i < countries.length; i++){
		if(countries[i].toLowerCase().startsWith(searchWord.toLowerCase()) && startOfAny)
		{
			let country = document.createElement('div')
			country.className = "countries"
			country.textContent = countries[i]
			document.querySelector('.container').appendChild(country)
			sum++
		}
		else if(countries[i].toLowerCase().includes(searchWord.toLowerCase()) && !startOfAny){
			let country = document.createElement('div')
			country.className = "countries"
			country.textContent = countries[i]
			document.querySelector('.container').appendChild(country)
			sum++
		}
	}
	if(searchWord.length != 0 && startOfAny){
		document.querySelector('.stat').textContent = "Countries starts with " + searchWord + " are " + sum
	}
	else if(searchWord.length != 0 && !startOfAny){
		document.querySelector('.stat').textContent = "Countries containing " + searchWord + " are " + sum
	}
	else{
		document.querySelector('.stat').textContent = ""
	}
}

function sortCountries(){
	if(sortCheck){
		search(countries.sort())
		sortCheck = false
	}
	else{
		search(countries.sort().reverse())
		sortCheck = true
	}

}