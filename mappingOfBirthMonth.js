
let birthMap =new Map();
var array=new Array();

for(let i=0;i<50;i++)
{
	let birthMonth=Math.round((Math.random()*11)+1);
	    array[i]=parseInt(birthMonth);
}
for(let i=0;i<50;i++)
{
                console.log("Values are",array[i]);
}

let values=array.sort();
console.log(values);
for (let [key, value] of birthMap) {
  console.log(key + ' = ' + value)
}

