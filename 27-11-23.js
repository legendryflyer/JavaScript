let names=["a","b","c","d","e"]
console.log(names[0])
names.push("f")
names.unshift("g")
console.log(names) 
names.pop()
names.shift()
console.log(names)
q=names.length
console.log(q)
for (let i = 0; i <= q-1 ; i++) 
{
    console.log(names[i])
}

q1=0
while(q1<=q)
{
    console.log(names[q1])
    q1++
}



//methods




//method------->push
//action-------->add the element to the last 
//return----->new length of array 
arr=[2,3]
t=arr.push(4)
console.log(arr)
console.log(t)

//method------->unshift
//action-------->adds a new item to the beginning of an array and returns the new length of the array.
//return------>returns the new length of the array.
arr=[2,3]
t1=arr.unshift(1)
console.log(arr)
console.log(t1)


//method------->pop
//action-------->removes the last element from an array and returns that element. This method changes the length of the array.
//return------>returns the removed element from the array.
arr=[2,3]
t2=arr.pop()
console.log(arr)
console.log(t2)

//method------->shift
//action------->remove the first element.
//return------>removes the first element from an array and returns that removed element.
arr=[2,3]
t3=arr.shift()
console.log(arr)
console.log(t3)

//method------->include
//action------->check if an array includes a certain value among its entries.
//return------>Returns true if at least one occurrence of the specified value.
//              Returns false otherwise.
arr=[2,3]
t4=arr.includes(2)
console.log(arr)
console.log(t4)

