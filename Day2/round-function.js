function round(num) { 
  let m = num % 1
  console.log(m)
  if (m < 0.5) {
    let cal = Math.floor(num)
    console.log('math floor', cal)
  }
  else {
    let cal = Math.ceil(num)
    console.log('math celi', cal)
  }
}

round(-5.2)

let name = "30 Days Of JavaScript"
console.log('name:', name)
console.log('name length:', name.length)
console.log('name uppercase', name.toUpperCase())
console.log('name lowercase', name.toLowerCase())
console.log('name substr', name.substr(0,7))
console.log('name subString',name.substring(8))
console.log('name slice', name.substr(3,20))
console.log('name include :',name.includes('Script'))
console.log('name split: ',name.split())
console.log('name split:', name.split(' '))
let brand = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
console.log('brand split:', brand.split(','))
console.log('name replace :',name.replace('JavaScript', 'Python'))
console.log('name charat :',name.charAt(15))
console.log('name charcodeat', name.charCodeAt('J'))
console.log('name IndexOf:', name.indexOf('a'))
console.log('name lastIndexOf: ', name.lastIndexOf('a'))
let message = "You cannot end a sentence with because because because is a conjunction"
console.log('message IndexOf:', message.indexOf('because'))
console.log('message lastIndexOf: ', message.lastIndexOf('because'))
console.log('message search', message.search('because'))
console.log('name trim', name.trim(" "))
console.log('name startsWith:', name.startsWith('30'))
console.log('name endsWith: ', name.endsWith('t'))
console.log('name match :', name.match('a'))
console.log('name concat :', name.concat('30 Days of', 'JavaScript'))
console.log('name repeate :' , name.repeat(2))

// Level 2

var quote ="The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
var quote2 = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead"

let parsefloat = Math.round(parseFloat('9.8'))
console.log(parsefloat)

let python = "python"
let jargon = "jargon"
console.log(python.includes('on'),jargon.includes('on'))

message3 ="I hope this course is not full of jargon"

numrand1 =Math.floor(Math.random () * 101) 
console.log('random 0 to 100', numrand1)

numrand2 = Math.floor(Math.random () * 51)+50
console.log('random 50 to 100', numrand2)
numrand3 = Math.floor(Math.random () * 256)
console.log('random 0 to 255', numrand3)

let java = "JavaScript"
let randindex= Math.floor(Math.random()* java.length+1)
console.log(java[randindex])