//String Functions - String is blank ?
var input = "";

console.log( isBlank(input+"343"));
console.log( isBlank(input+" "));
function isBlank(input)
{   
    if(input.trim().length == 0)
    return true;
    
    return false;
}

// String into words array
var input = "Hello World";
var arr = splitWords(input);
function splitWords(input)
{   
return wordsArray = input.split(" ");
}
console.log(arr);

//Substring function
var input = "Hello World";
console.log( input.substring(0,5));

//Write a JavaScript function to hide email addresses to protect from unauthorized user. -?

//Write a JavaScript function to capitalize the first letter of each word in a string.
var input = "hi! how are you ?"
var cap = input.charAt(0).toUpperCase();
console.log(cap+input.substring(1,input.length));

//Write a JavaScript function to insert a string within a string at a particular position (default is 1).
var str1 = "Hello How are you?";
var str2 = "ADDED ";
mergeString(str1,str2,6);
function mergeString(str1, str2, index)
{
    console.log(str1.substring(0,index) +str2+ str1.substring(index,str1.length));
}
//Write a JavaScript function that can pad (left, right) a string to get to a determined length.
var input = "Hello";
var input2 = " Padding Tester";
addPadding("he",10);
function addPadding(inp , length)
{
    let pad = length-inp.length;
    let count = Math.round(pad/2);
    let string = "";
    
    while(pad-- > 0)
    {
        string += "*";
    }
    
    let k = string.substring(0,count) +inp+string.substring(count);
    console.log(k);
    
}

//Write a JavaScript function to convert ASCII to Hexadecimal format.
