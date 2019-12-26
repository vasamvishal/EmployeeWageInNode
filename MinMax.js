
let upperBound = 999;
let lowerBound = 100;
let digit1 =Math.floor(lowerBound + (Math.random() * (upperBound - lowerBound) +1));
let digit2 =Math.floor(lowerBound + (Math.random() * (upperBound - lowerBound) +1));
let digit3 =Math.floor(lowerBound + (Math.random() * (upperBound - lowerBound) +1));
let digit4 =Math.floor(lowerBound + (Math.random() * (upperBound - lowerBound) +1));
let digit5 =Math.floor(lowerBound + (Math.random() * (upperBound - lowerBound) + 1));
console.log(digit1,digit2,digit3,digit4,digit5);
let max=digit1;
let min=digit1;
if(digit2>max)
{
	max=digit2;
}
else if(digit2<min)
{
	min=digit2;
}
if(digit3>max)
{	
	max=digit3;
}
else if(digit3<min)
{
        min=digit3;
}

if( digit4>max)
{       
	max=digit4;
}
else if(digit4<min)
{
        min=digit4;
}

if( digit5>max)
{       
        max=digit5;
}
else if(digit5<min)
{
        min=digit5;
}

console.log(max);
console.log(min);
