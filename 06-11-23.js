// for loop 

// for(initialization; conditionCheck , increment / decrement){
//     // statements
// }

// for(let i = 1 ; i <= 3 ; i++){
//     console.log(i)
// }
// for(let i = 1 ; i <= 5 ; i++){
//     console.log(i)
// }
// for(let i = 1 ; i <= 5 ; i++){
//     console.log("hello")
// }
// for(let i = 5 ; i >= 5 ; i--){
//     console.log(i)
// }
// for(let i = 50 ; i >= 5 ; i = i - 5){
//     console.log(i)
// }
// for(let i = 2 ; i <= 20 ; i = i + 2){
//     console.log(i)
// }




//for loop with break statement 
for(i=0;i<=5;i++)
{
    if(i==3)
    {
        break
    }
    console.log(i)
}




for(i=0;i<=5;i++)
{
    console.log(i)
    if(i==3)
    {
        break
    }
}


for(i=5;i>=1;i--)
{
    if(i==3)
    {
        break
    }
    console.log(i)
}



for(i=5;i>=1;i--)
{
    console.log(i)
    if(i==3)
    {
        break
    }
}



for(i=2;i<=20;i++)
{
    console.log(i)
    if(i==14)
    {
        break
    }
}



//for loop with continue 
for(i=1;i<=5;i++)
{
    if(i==3)
    {
        continue
    }
    console.log(i)
}



for(i=2;i<=20;i=i+2)
{
    if(i==14)
    {
        continue
    }
    console.log(i)

}