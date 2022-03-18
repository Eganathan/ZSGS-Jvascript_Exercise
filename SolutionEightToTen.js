
//Question Eight
let spacedText = " ZOHO IS AWESOME                    ";
let neatText = spacedText.trim();
console.log(neatText);

//Question Nine - Divisible by 10 ?
console.log( isDivisibleByTen(100) );
console.log( isDivisibleByTen(32) );

function isDivisibleByTen(val)
{
    if ((val%10) == 0)
    {
        return true
    }
    return false;
}

//Question Ten - Count the vowels
let k = numOVovels("aeioujhfgh6wq");
console.log(k);

function numOVovels(input)
{
    let counter = 0;
    for(let i =0; i <= input.length; i++)
    {
        let val = input.charAt(i);
        if(val == "a" || val == "e"|| val == "i"|| val =="o" || val == "u")
        counter++;
    }
    return counter;
}
