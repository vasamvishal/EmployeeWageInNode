let day=process.argv[2];
let month=process.argv[3];
let flag=0;


if(month>=3 &&month <=6)
{
if(month==3)
{
if(day>=20 &&day<=30)
{
flag=1;
}
}
if(month==4)
{
if(day>=1 &&day<=30)
{
flag=1;
}
}

if(month==5)
{
if(day>=1 &&day<=30)
{
flag=1;
}
}

if(month==6)
{
if(day<=20 )
{
flag=1;
}
}
}
if(flag==1)
{
console.log("true");
}
else
{
console.log("False");
}

