// switch case without break 
let city="nagpur"
switch (city)
{
    case "nagpur":
        console.log("MH")
    case "indore":
        console.log("MP")
    case "jaipur":
        console.log("RJ")

             

}
//switch statement with break 
let city1="nagpur"
switch (city1)
{
    case "nagpur":
        console.log("MH")
        break
    case "indore":
        console.log("MP")
        break
    case "jaipur":
        console.log("RJ")
        break

             

}



//switch case with multiple cases 

let city3="nagpur"
switch (city3)
{
    case "nagpur":
    case "pune":    
         console.log("MH")
         break
    case "indore":
    case "bhopal":

         console.log("MP")
         break
    case "jaipur":
    case "udaypur":    
         console.log("RJ")
            break
             

}



let a=10
let b=20
let c=30 

if(a>b && a>C)
{
    console.log("a is greater ")

}
else if(b>a && b>c)
{
    console.log("b is greater")
}
else
{
    console.log("c is greater")

}

// above program using switch case
let greater=true
switch(greater)
{
    case a>b && a>c :
        console.log("a is graeter")
        break
    case b>c && b>a :
        console.log("b is graeter")
        break    
    default:
        console.log("c is greater")




}
