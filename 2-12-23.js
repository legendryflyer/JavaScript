// program 1
//let  birthyear=[2000,2001,2002,2003,2004,2005]
//let ages=[]
//for(let i =0;i<birthyear.length;i++)
//{
//    let age=2023-birthyear[i]
//    ages.push(age)
//}
//console.log(ages)

//map()
let  birthyear=[2000,2001,2002,2003,2004,2005]
let age=birthyear.map(function(el,index,arr)
{
    return 2023-el
})
console.log(age)

let numbers=[11,22,33,44,55,66,77,88,99,100]
let add=numbers.map(function(el,index,arr){
    return el+10
})
console.log(add)

//program 2
let marks=[45,47,39,44,55,54,47,90,80,78,65,47,82]
let above50=[]
for(i=0;i<marks.length;i++)
{
    if(marks[i]>50)
    {
        above50.push(marks[i])

    }
}
console.log(above50)

let above60=marks.filter(function(el,index,arr){
    return el > 60
})
console.log(above60)

let above70=marks.filter(function(el,index,arr){
    return el > 70
})
console.log(above70)


// program 3
let transections=[123,536,-3784,9374,-3749,-3846,-89,-748,893,947,1009]
let deposite=transections.filter(function(el,index,arr){
    return el > 0

})
console.log(deposite)
let withdrawal=transections.filter(function(el,index,arr){
    return el < 0
})
console.log(withdrawal)


//program 4
let t=[1,2,3,4,5,6,7,8,9,10]
let sum=t.reduce(function(accumulator,el,index,arr){
    return accumulator + el
    

},0)
console.log(sum)
let product=t.reduce(function(accumulator,el,index,arr){
    return accumulator * el
},1)
console.log(product)
let max=t.reduce(function(accumulator,el,index,arr){
    return Math.max(accumulator ,el)
    },-Infinity)
    console.log(max)
    
        





