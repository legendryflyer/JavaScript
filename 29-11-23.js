//program 1
let birthyear=[2000,2001,2002,2003,2004]
let ages=[]
for(i=0;i<birthyear.length;i++)
{
    let age = 2023-birthyear[i];
    ages.push(age);

}
console.log(ages)

//program 2
let numbers=[11,22,33,44,55,66,77,88,99]
let above50=[]
for(i=0;i<numbers.length;i++)
{
    if(numbers[i]>50)
    {
        above50.push(numbers[i])
    }
}
console.log(above50)

//program 3
let marks=[11,22,33,44,55]
let total=0
for(i=0;i<marks.length;i++)
{
    total=total+marks[i]
}
console.log(total)

//program 4
let cities=["mumbai","pune","nagpur","bhopal","indore"]
for(i=0;i<cities.length;i++)
{
    console.log("welcome"  +   cities[i])
}






