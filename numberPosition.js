var number=process.argv[2];
if(number>=0 && number<10)
{
console.log("Unit");
}
else if(number>=10 && number <100)
{
console.log("Ten");
}
else if(number>=100 && number<1000 )
{
console.log("hundred");
}
else if(number>=1000 && number <10000)
{
console.log("thoushand");
}
else
{
console.log("Wrong number entered");
}

