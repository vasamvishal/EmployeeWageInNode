let digits=new Array();

	for( let i=0;i<10;i++)
	{
	digits[i]=Math.floor(Math.random()*899)+100;
	console.log("Array values are",digits[i]);
	}

	let max1=digits[0];
	let max2=digits[1];
	let min1=digits[0];
	let min2=digits[1];

	 for(let i=0;i<digits.length;i++)
        {
		if(digits[i]>max1)
		{
		  max2=max1;
		  max1=digits[i];
		}
		else if(digits[i]<min1)
		{
		 min2=min1;
		 min1=digits[i];
		}
		else if(digits[i]>max2)
		{
		 max2=digits[i];
		}
		else if(digits[i]<min2)
                {
                 min2=digits[i];
                }
	}

                console.log(max2);
                console.log(min2);



		

