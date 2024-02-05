let m=90
if (m>=90)
{
    console.log("gread A")
}
else if (m>=75)
{
    console.log("gread B")

}
else if (m>=55)
{
    console.log("gread C")
}
else 
{
    console.log("fail")
}

//ternary oprator 
let a=10
let b=20
//if (a>b)
//{
//   console.log("a is greater ")
//}
//else 
//
//   console.log("b is graeter ")
//}





let c=5
if(a>b)
{
    if(a>c)
    {
        console.log("a is graeter")
    }    
        else 
        {
            console.log("c is graeter")

        }
    
}
if(b>c)
{
    console.log("b is graeter")

}
else{
    console.log("c is greater")
}


// switch case with break 

let city="indore"
switch(city)
{
    case "nagpur":
        console.log("MH")
        break 
    case "indore":
        console.log("MP")
        break 
    default:
        console.log("incorect city")       
}



// switch case with multiple cases
let city1="nagpur"
switch(city1)
{
    case "nagpur":
    case "mumbai":
        console.log("MH")
        break 
    
    case "indore":
    case  "bhopal":
        console.log("MP")
        break  
    
}


