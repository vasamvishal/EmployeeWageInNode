var a=process.argv[2];
var b=process.argv[3];
var c=process.argv[4];

var result1=a+b*c;
var result2=c+a/b;
var result3=a%b+c;
var result4=a*b+c;

max=result1;
min=result1;

if(result2 > max)
	max=result2;
else if(result2 <min)
	min=result2;
if(result3 > max)
        max=result3;
else if(result3 <min)
        min=result3;
if(result4 > max)
        max=result4;
else if(result4 <min)
        min=result4;

console.log(max);
console.log(min);

