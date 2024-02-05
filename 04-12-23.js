// map() ----(el,index,arr)
// filter()  ---->  (el,index,arr)
// reduce()   ----> (acc,el, index,arr)
// forEach()  -- (el,index,arr)
// find()  -- (el,index,arr)
// findIndex()  -- (el,index,arr)
// some()  -- (el,index,arr)-----> bool
// every()  -- (el,index,arr)------->bool


let birthyear=[2000,2001,2002,2003,2004,2005]
let ages=birthyear.map(function(el){
    return 2023-el
})
console.log(ages)


let numbers=[11,22,33,44,55,66,77,88,99]
let q=numbers.map(function(el){
    return el+40
})
console.log(q)


let sum=numbers.reduce(function(acc,el){
    return acc + el
},0)
console.log('sum=',sum)

let above50=numbers.filter(function(el){
    return el>50
    

    
})
console.log('above50=',above50)



let below10=numbers.filter(function(el){
    return el<10
})
console.log('below10=',below10)




let cities=["mumbai","nagpur","bhopal","indore"]
cities.forEach(function(el,index,arr){
    console.log("welcome "+el)
})



let num=numbers.find(function(el){
    return el==55
    
   
})
console.log(num)


let id=numbers.findIndex(function(el,index,arr){
    return el==55
})
console.log(id)



let above10=numbers.every(function(el){
    return el>10
})
console.log(above10)




let q10=numbers.some(function(el){
    return el==10
})
console.log(q10)













