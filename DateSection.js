let date = new Date;

//Q11 get current Date and time stamp
console.log("Todays Date -> "+ date);

// Q12 Write a JavaScript function to get the number of days in a month.


//Q13 get month of the given date
console.log("Month of the given date -> "+getMonth(date));
function getMonth(date)
{
    const monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    let month = date.getMonth();
    return monthArr[month];
}
//Q14 compare Dates
console.log(compareDates(new Date('August 19, 1975 23:15:30'), new Date()));
function compareDates(pDate, sDate)
{
    if(pDate > sDate)
    return "1.st Date is in future"
    
    if(pDate < sDate)
    return "1.st Date is in past";
    
    if(pDate == sDate)
    return "Same dates"
}
// Q15 Write a JavaScript function to add specified minutes to a Date object.
//why automatic convertion
console.log(addMinutes(new Date('August 19, 1975 23:15:30'),60));
function addMinutes(inpDate ,input)
{
    let d = inpDate;
    let k = new Date(d);
    k.setMinutes(d.getMinutes()+input);
    console.log(k);
}
//  Write a JavaScript function to test whether a date is a weekend
console.log(isWeekend(new Date()));
console.log(isWeekend(new Date('Sat Mar 19 2022 07:26:14 GMT+0000 (GMT)')));
function isWeekend(inpDate)
{
    if(inpDate.getDay() >= 6)
    return true;
    
    return false;
}

// Write a JavaScript function to get difference between two dates in days.
getDiffrence(new Date, new Date('Sat Mar 10 2022 07:26:14 GMT+0000 (GMT)'));
function getDiffrence(date, date1)
{
    //first date
    var year = date.getYear();
    var month = date.getMonth();
    var day = date.getDate();
    
    //second date
    var year1 = date1.getYear();
    var month1 = date1.getMonth();
    var day1 = date1.getDate();
    var days = day - day1;
    
    console.log(days);
    
}

//  Write a JavaScript function to calculate 'yesterday day'
yesterDay(new Date);
function yesterDay(date)
{
    var days = date.getDate();
    console.log("Yesterday was "+(days-1) );
}
