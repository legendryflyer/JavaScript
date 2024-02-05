//repeat 
let firstname="tavish"
let q=firstname.repeat(4)
console.log(q)


//substring
let q1=firstname.substring(1,3)
console.log(q1)

//charat
let q2=firstname.charAt(4)
console.log(q2)


//charCoadaAt()
let q3=firstname.charCodeAt(3)
console.log(q3)

let first="tavish"
let vowels="aeiou"
let count=0
for(i=0;i<firstname.length;i++){
    if (vowels.includes(first[i])){
        count=count+1
    }
}
console.log(count)


let count2=0
for (let i = 0; i < first.length; i++) {
    if (first[i] == 'a' || first[i] == 'e' || first[i] == 'i' || first[i] == 'o' || first[i] == 'o') {
        count2 = count2 + 1
    }
}

console.log(count2)
let fruits="apple mango pineapple banaan orange papaya"
let userinput="apple"
if(fruits.includes(userinput.toLowerCase)){
    console.log(userinput + " is available")

}
else{
    console.log(userinput+ " is not available")

}



