// Generating numbers and marking evens, odds and prime numbers with three different colors.

const calculWeight = () => {
  const mass = document.querySelector('input').value
  const planet = document.querySelector('select').value
  console.log(planet)
  document.querySelector('.container').innerHTML = ''
  if(isNaN(mass) || planet == "Select planet")
  {
    let warning = document.createElement('p')
    warning.style.textAlign = "center"
    warning.style.fontSize = "50px"
    warning.style.background = "rgba(192, 204, 195, 0 )"
    warning.textContent = "Incorrect data"
    document.querySelector('.container').appendChild(warning);
  }
  else{
    // добавления изображения на страницу
    let img = new Image()
    let imageSrc = "images/" + planet.toLocaleLowerCase() + ".png"
    console.log(imageSrc)
    img.src = imageSrc;
    document.querySelector('.container').appendChild(img);

    let weight = document.createElement('p')
    let weightTitle = document.createElement('p')
    let weightContainer = document.createElement('div')
    weightContainer.className = "weightContainer"
    weightTitle.className = "weightTitle"
    weightTitle.textContent = "The weight of the object on " + planet
    document.querySelector('.container').appendChild(weightContainer);
    document.querySelector('.weightContainer').appendChild(weightTitle);
    switch(true){
      case planet == "MERCURY":
        weight.className = "weight"
        weight.textContent = (mass * 0.38).toFixed(2) + "N"
        document.querySelector('.weightContainer').appendChild(weight);
      break;
      case planet == "VENUS":
        weight.className = "weight"
        weight.textContent = (mass * 0.906).toFixed(2) + "N"
        document.querySelector('.weightContainer').appendChild(weight);
      break;
      case planet == "EARTH":
        weight.className = "weight"
        weight.textContent = mass + "N"
        document.querySelector('.weightContainer').appendChild(weight);
      break;
      case planet == "MOON":
        weight.className = "weight"
        weight.textContent = (mass * 0.165).toFixed(2) + "N"
        document.querySelector('.weightContainer').appendChild(weight);
      break;
      case planet == "MARS":
        weight.className = "weight"
        weight.textContent = (mass * 0.378).toFixed(2) + "N"
        document.querySelector('.weightContainer').appendChild(weight);
      break;
      case planet == "JUPITER":
        weight.className = "weight"
        weight.textContent = (mass * 2.442).toFixed(2) + "N"
        document.querySelector('.weightContainer').appendChild(weight);
      break;
      case planet == "SATURN":
        weight.className = "weight"
        weight.textContent = (mass * 1.065).toFixed(2) + "N"
        document.querySelector('.weightContainer').appendChild(weight);
      break;
      case planet == "URANUS":
        weight.className = "weight"
        weight.textContent = (mass * 0.903).toFixed(2) + "N"
        document.querySelector('.weightContainer').appendChild(weight);
      break;
      case planet == "NEPTUNE":
        weight.className = "weight"
        weight.textContent = (mass * 1.131).toFixed(2) + "N"
        document.querySelector('.weightContainer').appendChild(weight);
      break;
      case planet == "PLUTO":
        weight.className = "weight"
        weight.textContent = (mass * 0.063).toFixed(2) + "N"
        document.querySelector('.weightContainer').appendChild(weight);
      break;
    }
  }
  
}