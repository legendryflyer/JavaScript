//slice (StartIndex,EndIndex(NotIncluded))
//splice(IndexValue,NumberOfElementsToBeDeleted)
//concat 
// join 


//              0       1        2           3         4
let cities = ["pune","mumbai","banglore","kolkata","chennai"]
//              -5      -4        -3        -2         -1     

// console.log(cities.slice(1,4))
// console.log(cities.slice(0,3))
// console.log(cities.slice(1,3))
// console.log(cities.slice(-3,-1))


console.log(cities.splice(1,2))
console.log(cities)
console.log(cities.concat("delhi"))
console.log(cities.concat("delhi","hyderabad"))
console.log(cities.concat(["delhi","hyderabad"]))


//join 
cities2=["mumbai","delhi","nagpur","indore"]
console.log(cities2.join("-"))
console.log(cities2.join(" "))




numbers=[11,22,33,44,55,66,77,88,99,110]
let q=numbers.map(function(el,index,arr){
    return el*2
    
})
console.log(q)
let r=numbers.filter(function(el,index,arr){
    return el%2==0
    })
    console.log(r)



    let s=numbers.reduce(function(accumulator,currentValue,currentIndex
        ,arr){
            return accumulator+currentValue
            },0)
            console.log(s)











