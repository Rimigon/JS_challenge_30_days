const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

if(countries.includes('Ethiopia')){
    console.log('ETHIOPIA')
}
else{
    countries.push('Ethiopia')
}

console.log(countries.slice(0, 10))
console.log(countries.slice(0, 10)[Math.floor((countries.slice(0, 10).length - 1) / 2)])

