	let digits=new Array();

	for( let i=0;i<10;i++)
	{
	digits[i]=Math.floor(Math.random()*899)+100;
	console.log("Array values are",digits[i]);
	}

	 for(let i=0;i<digits.length;i++){
	 for(let j=i+1;j<digits.length;j++){
		if(digits[i]>digits[j])
		{
		temp=digits[i];
		digits[i]=digits[j];	
		digits[j]=temp;
		}
	}
	}
	
          for(let i=0;i<digits.length;i++){
		console.log(digits[i]);
		
		}
	console.log("MAX SECOND DIGIT IS",digits[digits.length-2]);
        console.log("MIN SECOND DIGIT IS",digits[1]); 

		
		

