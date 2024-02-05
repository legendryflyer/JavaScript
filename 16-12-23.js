// string 
// methods and properties 

let first_name="tavish"
console.log(first_name.length)

//method ------> gym
//action ---> exeresise
//return----> health


// program 2 

let middle_name="suresh"

//method ----> toUpperCase
// action---> convert all letters in the string into uppercase
// return--- > SURESH

let q1=middle_name.toLocaleUpperCase()
console.log(q1)


// program 3
let last_name = "Anade"
let q2=last_name.toLowerCase()
console.log(q2)


//program 4
let citie="nagpur"
let q4=citie.toLocaleUpperCase().toLocaleLowerCase().length
console.log(q4)

//program 5
let info="my name is tavish anade"
let q5=info.includes("my")
console.log(q5)

//program 6
let first="tavish"
let last="anade"
let fullName=`${first} ${last}`
console.log(fullName)


let q6=first.concat(" ").concat(last)
console.log(q6)


//program 7
//startsWith()
//endsWith()

let fruit="apple"
console.log(fruit)
let q7=fruit.startsWith("a")
let q8=fruit.endsWith("le")
console.log(q7,  q8)


//program 8
//replace()
let info2="i am learning js"
let q9=info2.replace("js","python")
console.log(q9)
//program 9
//split()
let text="this is a sample text for split method"
let words=text.split(" ")
console.log(words)

//program 10
let h=" pune "
let q10=h.trim()
console.log(q10.length)





