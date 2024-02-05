let info={
    firstname:"tavish",
    _lastname: "anade"
    
}
console.log(info)
// keys in object are always string 
// map and object 
// both stores the value in prop-Value format 
// object can have string as property but map can have different set of properties or keys 


let   myMap = new Map()
// console.log(myMap)
myMap.set("1","one")
myMap.set("2","two")
myMap.set("3","three")
console.log(myMap)


let mapA=new Map([
    ["1","one"],
    [2,"two"],
    ['3','three']
])
console.log(mapA)


// size
console.log(mapA.size)

// set()
mapA.set(4,"four")
mapA.set("5","five")
console.log(mapA)


// has()
console.log(mapA.has('1')) // bool true or false


//delete
mapA.delete("1")
console.log(mapA)
mapA.delete(2)
console.log(mapA)


//loop ing through the map using forEach method

mapA.forEach((value,key)=>{
    console.log(`${key}: ${value}`)
})
// console.log(mapA)

mapA.forEach(function(value,key){
    console.log(key, ":"  , value)
})

// mapA.clear()
// console.log(mapA)

for(let key of mapA.keys()){
    console.log(key)
}


for( let val of mapA.values()){
    console.log(val)
}


for(let  [key,value] of mapA.entries()) {
    console.log(key,value)
}
    


