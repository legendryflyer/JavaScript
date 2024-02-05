// toUpperCase()
// toLowerCase()
// replace()
// startsWith()
// endsWith()
// trim()
// trimStart()
// trimEnd()
// concat()
// includes()

// methods and properties 



//program 1
let city="pune"
console.log(city.length)
console.log(city[0])
let rev=""
for(i=0;i<city.length;i++){
    rev=city[i]+rev
}
console.log(rev)

let rev2=""
for(i=city.length-1;i<=0;i--){
    rev2=rev2+city[i]
}
console.log(rev2)

// slice
let city2="nagpur"
console.log(city2.slice(3))
console.log(city2.slice(-4))
console.log(city2.slice(1,5))


//join 
//let arr=[1,2,3,"a","b"]
// console.log(arr.join())
// console.log(arr.join("_"))
console.log(arr.join(" ")) 

//split 
//let str="hello world"
//console.log(str.split(" "))





