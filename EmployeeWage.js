let EMP_RATE_PER_HOURS=20;
let IS_PART_TIME=1;
let IS_FULL_TIME=2;
let empHrs=0;
let empWage=0;
let isPresent=1;

let empCheck=Math.floor(Math.random()*2);
if(empCheck ==IS_FULL_TIME )
        empHrs=8;
if(empCheck ==IS_PART_TIME )
        empHrs=4;
else
        empHrs=0;
empWage=empHrs*EMP_RATE_PER_HOURS;
