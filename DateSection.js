let date = new Date;

//Q11 get current Date and time stamp
console.log("Todays Date -> "+date);

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
function compareDates(pDate, sDate)
{
    let month = date.getMonth();
    return monthArr[month];
}
