let year=process.argv[2];
console.log(year);
        let leap = false;
	if(year <=1000 && year >=9999)
	{
        if(year % 4 == 0)
        {
            if( year % 100 == 0)
            {
           
                if ( year % 400 == 0)
                    leap = true;
                else
                    leap = false;
            }
            else
                leap = true;
        }
        else
            leap = false;
	}
	else
	console.log("Entered no is not a proper year");
        if(leap)
            console.log("It is a leap year.");
        else
            console.log( "It is not a leap year.");
    

