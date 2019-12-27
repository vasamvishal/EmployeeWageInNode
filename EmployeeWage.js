let EMP_RATE_PER_HOURS=10;
let NUM_OF_WORKING_DAYS=2;
let  MAX_HRS_IN_MONTH =10;

let IS_PART_TIME=1;
let IS_FULL_TIME=2;
let empHrs=0;
let empWage=0;
let totalEmpHrs=0;
let isPresent=1;
let totalEmpWage=0;
let totalWorkingDays=0;
let empDailyWage=new Map();

	while(totalEmpHrs <= MAX_HRS_IN_MONTH &&
		totalWorkingDays <= NUM_OF_WORKING_DAYS){
		totalWorkingDays++;
		let empCheck=Math.floor(Math.random()*3);
		empHrs=getWorkingHours(empCheck);
		totalEmpWage+= empHrs;
		empDailyWage.set(totalWorkingDays,calcDailyWage(empHrs));
		}
	function calcDailyWage(empHrs){
		return empHrs*EMP_RATE_PER_HOURS;
	}
	function getWorkingHours(empCheck){
	    switch(empCheck){
		case IS_FULL_TIME:
        		empHrs=8;
			break;
		case IS_PART_TIME:
        		empHrs=4;
			break;
		default:
        		empHrs=0;
			}
		return empHrs;
	}
	totalEmpWage+=calcDailyWage(totalEmpHrs);
	console.log(totalEmpWage);
