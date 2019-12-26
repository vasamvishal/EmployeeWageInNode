	var number=process.argv[2];
	harmonicNumber=0;
	for(let i=1;i<= number;i++)
	{
		harmonicNumber+=1/i;
	}
	console.log(harmonicNumber);
